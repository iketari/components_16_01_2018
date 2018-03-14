class AvatarService {
    constructor() {
        this._users = new Proxy({}, {
            get: this._onNameGet.bind(this),
            set: this._onNameSet.bind(this)
        });
    }

    // TODO: https://semantic-ui.com/images/avatar2/small/${imgName}.png
    getByName(userName) {
        if (!this._users[userName]) {
            this._users[userName] = `https://unsplash.it/200/200/?random=${Math.random() * 1000}`;
        }

        return this._users[userName];
    }

    _onNameGet(target, property, receiver) {
        return localStorage.getItem(property);
    }

    _onNameSet(target, property, value, receiver) {
        localStorage.setItem(property, value);

        return true;
    }
}

export const avatarService = new AvatarService();
