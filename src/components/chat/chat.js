export class Chat {
    constructor({el, data = {messages: []}}) {
        this.el = el;
        this.data = data;

        this._scrollStrategy = 'bottom';

        this._initEvents();
    }

    _initEvents() { }

    render({scroll} = {}) {
        this._saveScrollTop();
        this.el.innerHTML = this._getHtml(this.data);
        this._restoreScrollTop(scroll);
    }

    _getMessagesHtml() {
        return this.data.messages.map((message) => `
            <div class="message-box left-img">
                <div class="picture">
                    <img src="https://unsplash.it/200/200/?random=0.07515586249598627">
                    <span class="time">21:30</>
                </div>
                <div class="message">
                    <span>${message.name}</span>
                    <p>${message.text}</p>
                </div>
            </div>
        `).join('');
    }

    _getHtml() {
        return `
        <div class="chat">
            <div class="chat__container">
                <div class="header">
                    <h2>You are logged in as ...</h2>
                </div>
                <div class="chat__box">
                    ${this._getMessagesHtml()}
                </div>
            </div>
        </div>
        `;
    }

    _saveScrollTop() {
        let chatBox = this.el.querySelector('.chat__box');

        if (chatBox) {
            this._scrollTop = chatBox.scrollTop;
        }
    }

    _restoreScrollTop() {
        let chatBox = this.el.querySelector('.chat__box');

        if (chatBox) {
            switch (this._scrollStrategy) {
                case 'bottom':
                    chatBox.scrollTop = chatBox.scrollHeight;
                    break;
                case 'fixed':
                    chatBox.scrollTop = this._scrollTop;
            }
        }
    }

    _updateMessages() {
        this.data.messages = this.data.messages.sort((message1, message2) => {
            return message2.date - message1.date;
        });
    }

    setMessages(messages = []) {
        this.data.messages.length = 0;
        this.add(messages);
    }

    setScrollStrategy(strategy) {
        this._scrollStrategy = strategy;
    }

    add(messages = []) {
        let addOneMessageMethod = this.addOne.bind(this);

        messages.forEach(addOneMessageMethod);
    }

    addOne(data) {
        this.data.messages.push(this._prepareMessage(data));
    }

    _prepareMessage({name, text, date = Date.now(), html}) {
        return {
            name,
            isMine: name === this.data.user,
            text,
            date: new Date(date),
            html
        };
    }

    setUserName(name) {
        this.data.user = name;
    }
}
