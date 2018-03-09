import {Chat} from './../chat/chat.js';
import {Form} from './../form/form.js';

const CHAT_ENDPOINT = 'https://components2510.firebaseio.com/chat.json';

export class App {
    constructor({el}) {
        this.el = el;
        this.chat = new Chat({
            el: document.createElement('div'),
        });
        this.form = new Form({
            el: document.createElement('div'),
            onSubmit: this._onFormSubmit.bind(this),
        });

        this.el.append(this.chat.el, this.form.el);

        setInterval(this.fetchData.bind(this), 1000);
        this.render();
    }

    fetchData() {
        fetch(CHAT_ENDPOINT)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                this.chat.setMessages(Object.values(data));
                this.chat.render();
            });
    }

    postData(data) {
        fetch(CHAT_ENDPOINT, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        });
    }

    render() {
        this.chat.render();
        this.form.render();
    }

    _onFormSubmit(messageData) {
        this.form.reset();
        this.postData(messageData);
    }
}
