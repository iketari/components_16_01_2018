export class Form {
	constructor({el, onUserData}) {
		this.el = el;
		this.onUserData = onUserData;
		this._initEvents();
	}

	_initEvents() {
		this.el.addEventListener('submit', this._onSubmit.bind(this));
	}

	_onSubmit(event) {
		event.preventDefault();
		const formEl = event.target;
		const messageData = {};

		Array.from(formEl.querySelectorAll('[name]')).forEach((el) => {
			messageData[el.name] = el.value;
		});

		this.onUserData(messageData);

		this.el.querySelector('form').reset();
	}

	render() {
		this.el.innerHTML = `
			<form>
				<input name="nickname" type="text" placeholder="Имя пользователя"></input>
				<br>
				<textarea name="text"></textarea>
				<input type="submit" value="Отправить">
			</form>
		`;
	}
}
