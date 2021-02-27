"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryEndpointConnector = void 0;
const _1 = require(".");
/**
 * Provides methods to perform requests to the shop's country endpoint.
 * @extends {AbstractEndpointConnector}
 */
class CountryEndpointConnector extends _1.AbstractEndpointConnector {
    /**
     * Returns the country endpoint route.
     * @returns {String} Country endpoint route.
     */
    getRoute() {
        return '/countries';
    }
    /**
     * Returns the zones for a country.
     * @param {Number} id Country ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid ID parameter.
     */
    getZonesByCountryId(id) {
        // Check ID parameter.
        if (!id || typeof id !== 'number') {
            throw new Error('Missing or invalid country ID');
        }
        // Perform request.
        return this.requestDispatcher.get(`${this.getRoute()}/${id}/zones`);
    }
}
exports.CountryEndpointConnector = CountryEndpointConnector;
