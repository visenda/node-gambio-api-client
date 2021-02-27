"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerEndpointConnector = void 0;
const _1 = require(".");
/**
 * Provides methods to perform requests to the shop's customer endpoint.
 * @extends {AbstractEndpointConnector}
 */
class CustomerEndpointConnector extends _1.AbstractEndpointConnector {
    /**
     * Returns the customer endpoint route.
     * @returns {String} Customer endpoint route.
     */
    getRoute() {
        return '/customers';
    }
    /**
     * Returns all customers, that are guests.
     * @param {GetOptionsInterface} [options] GET request modifier options.
     * @returns {Promise}
     */
    getGuests(options) {
        return this.requestDispatcher.get(this.getRoute(), Object.assign({}, this.parseGetOptions(options), { type: 'guests' }));
    }
    /**
     * Returns the addresses of a customer.
     * @param {Number} id Customer ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid ID parameter.
     */
    getAddresses(id) {
        // Check ID parameter.
        if (!id || typeof id !== 'number') {
            throw new Error('Missing or invalid customer ID');
        }
        // Perform request.
        return this.requestDispatcher.get(`${this.getRoute()}/${id}/addresses`);
    }
}
exports.CustomerEndpointConnector = CustomerEndpointConnector;
//# sourceMappingURL=CustomerEndpointConnector.js.map