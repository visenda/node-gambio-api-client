"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailEndpointConnector = void 0;
const _1 = require(".");
/**
 * Provides methods to perform requests to the shop's email endpoint.
 * @extends {AbstractEndpointConnector}
 */
class EmailEndpointConnector extends _1.AbstractEndpointConnector {
    constructor() {
        super(...arguments);
        /**
         * Email endpoint routes.
         * @type {Object}
         */
        this.routes = {
            // Emails.
            main: '/emails',
            // Email attachments.
            attachments: '/attachments',
        };
    }
    /**
     * Returns the Email endpoint route.
     * @returns {String} Email endpoint route.
     */
    getRoute() {
        return this.routes.main;
    }
    /**
     * Returns all pending Emails.
     * @param {GetOptionsInterface} [options] GET request modifier options.
     * @returns {Promise}
     */
    getPending(options) {
        return this.requestDispatcher.get(this.getRoute(), Object.assign({}, this.parseGetOptions(options), { state: 'pending' }));
    }
    /**
     * Queues a new Email.
     * @param {Object} data Email data.
     * @returns {Promise}
     * @throws {Error} Missing or invalid data parameter.
     */
    queue(data) {
        // Check data parameter.
        if (!data || typeof data !== 'object') {
            throw new Error('Missing or invalid Email data');
        }
        // Perform request.
        return this.requestDispatcher.put(this.getRoute(), data);
    }
    /**
     * Sends a new Email.
     * @param {Object} data Email data.
     * @returns {Promise}
     * @throws {Error} Missing or invalid data parameter.
     */
    send(data) {
        // Check data parameter.
        if (!data || typeof data !== 'object') {
            throw new Error('Missing or invalid Email data');
        }
        // Perform request.
        return this.requestDispatcher.post(this.getRoute(), data);
    }
    /**
     * Sends an existing Email.
     * @param {Number} id Email ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid ID parameter.
     */
    sendById(id) {
        // Check ID parameter.
        if (!id || typeof id !== 'number') {
            throw new Error('Missing or invalid Email ID');
        }
        // Perform request.
        return this.requestDispatcher.post(`${this.getRoute()}/${id}`, {});
    }
    /**
     * Uploads an Email attachment.
     * @param {String} filePath Path to file.
     * @param {String} fileName Desired file name.
     * @returns {Promise}
     * @throws {Error} Missing or invalid file path parameter.
     * @throws {Error} Missing or invalid file name parameter.
     */
    uploadAttachment(filePath, fileName) {
        // Check file path parameter.
        if (!filePath || typeof filePath !== 'string') {
            throw new Error('Missing or invalid file path');
        }
        // Check file name parameter.
        if (!fileName || typeof fileName !== 'string') {
            throw new Error('Missing or invalid file name');
        }
        // Perform request.
        return this.requestDispatcher.uploadFile(this.routes.attachments, filePath, fileName, 'filedata', 'name');
    }
}
exports.EmailEndpointConnector = EmailEndpointConnector;
//# sourceMappingURL=EmailEndpointConnector.js.map