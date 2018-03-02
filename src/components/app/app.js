import {Chat} from './../chat/chat.js';
import {Form} from './../form/form.js';

export class App {
	constructor({el}) {
		this.el = el;

		const chat = new Chat({
			el: document.createElement('div'),
			data: {}
		});

		const form = new Form({
			el: document.createElement('div'),
			onUserData: (messageData) => {
				chat.addMessage(messageData);
			},
		});


		this.el.append(chat.el, form.el);
		chat.render();
		form.render();
		// здесь будем использовать Form, Chat
	}
}
