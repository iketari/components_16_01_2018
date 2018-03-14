/**
 * Service of chat functionality. Provide sending and polling of messages.
 * @module {ChatService} ChatService
 */

import {deepEqual} from '../utils/pure.js';
import Emitter from '../utils/emitter.js';


/**
 * @class ChatService
 * @alias module:ChatService
 * @mixes Emitter
 */
export default class ChatService {

    constructor({ baseUrl, pollingInterval = 15000, http }) {
        Emitter.apply(this);

        this.pollingInterval = pollingInterval;
        this.http = http;

        this.http.setBaseUrl('https://components2510.firebaseio.com/chat.json');

        this._messages = [];
        this._pollingID = null;
        this._stopped = false;
        this._username = 'anonimus';
    }

    /**
     * @method setUserName
     * @public
     * @param {string} name - set username field
     */
    setUserName(name) {
        this._username = name;
        this.trigger('username:change', {name});
    }


    getUserName() {
        return this._username;
    }

    getMessages() {
        return this.http.makeRequest()
            .then(resp => Object.values(resp.data));
    }

    sendMessage(data) {
        data.date = Date.now();
        data.name = this._username;

        return this.http.makeRequest('POST', data)
            .then(resp => resp.data);
    }

    startPolling() {
        this._stopped = false;

        let doRequest = () => {
            if (this._stopped) {
                return;
            }

            this.getMessages().then((messages) => {
                this.setMessages(messages);
                this._pollingID = setTimeout(doRequest, this.pollingInterval);
            });
        };

        doRequest();
    }

    stopPolling() {
        clearInterval(this._pollingID);
        this._stopped = true;
    }

    setMessages(messages) {
        if (deepEqual(this._messages, messages)) {
            return;
        }

        this._messages = messages;
        this.trigger('messages', this._messages);
    }
}
