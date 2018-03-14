export class Form {
    constructor({el, onSubmit}) {
        this.el = el;

        this.el.addEventListener('submit', this._onSubmit.bind(this));
        this.onSubmit = onSubmit;
    }

    render() {
        this.el.innerHTML = formTemplate();
    }

    _onSubmit(event) {
        event.preventDefault();
        this.onSubmit({
            text: event.target.querySelector('textarea').value
        });
    }
}
