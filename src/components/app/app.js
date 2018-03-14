import {Chat} from './../chat/chat.js';
import {Form} from './../form/form.js';

import HttpService from './../../modules/http.service.js';
import ChatService from './../../modules/chat.service.js';

import './milligram.css';
import './app.css';


const USER_NAME = 'Artsiom';


export class App {
    constructor({el}) {
        this.el = el;
        this.chat = new Chat({
            el: document.createElement('div'),
            data: {
                messages: [],
                user: USER_NAME
            }
        });
        this.form = new Form({
            el: document.createElement('div'),
            onSubmit: this._onFormSubmit.bind(this)
        });

        this.el.append(this.chat.el, this.form.el);

        const httpService = new HttpService();

        this.chatService = new ChatService({
            http: httpService,
            pollingInterval: 1000
        });

        this.chatService.setUserName(USER_NAME);

        this.chatService.on('messages', (messages) => {
            this.chat.add(messages);
            this.chat.render();
        });

        this.chatService.startPolling();
        this.render();
    }

    render() {
        this.chat.render();
        this.form.render();
    }

    _onFormSubmit({text}) {
        this.chatService.sendMessage({
            text,
        });

        this.chat.setScrollStrategy('bottom');
        this.form.render();
    }
}
