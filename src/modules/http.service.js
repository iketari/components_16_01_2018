/**
 * Service for making of http requests
 * @module {HttpService} HttpService
 */

/**
 * @class HttpService
 * @alias module:HttpService
 * @mixes Emitter
 */
export default class HttpService {
    /**
     * @private
     * @constructor
     */
    constructor() {
    }

    /**
     * Setting the base URL for requests
     * @param {string} url
     */
    setBaseUrl(url) {
        this.baseUrl = url;
    }

    /**
     * Setting a JWT token
     * @param {string} token 
     */
    setToken(token) {
        this.token = token;
    }

    /**
     * Making a HTTP request
     * @param {string} type specified a HTTP method
     * @param {Object} data specified a body of request
     * @return {Promise}
     */
    makeRequest(type = 'GET', data = {}) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            let url;
            if (this.token) {
                url = this.baseUrl + `?auth=${this.token}`;
            } else {
                url = this.baseUrl;
            }

            xhr.open(type, url, true);

            xhr.addEventListener('load', () => resolve({
                data: JSON.parse(xhr.responseText),
                xhr
            }));
            xhr.addEventListener('error', reject);
            xhr.addEventListener('abort', reject);

            xhr.send(JSON.stringify(data));
        });
    }
}

