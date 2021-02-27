"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressEndpointConnector = void 0;
const _1 = require(".");
/**
 * Provides methods to perform requests to the shop's address endpoint.
 * @extends {AbstractEndpointConnector}
 */
class AddressEndpointConnector extends _1.AbstractEndpointConnector {
    /**
     * Returns the address endpoint route.
     * @returns {String} Address endpoint route.
     */
    getRoute() {
        return '/addresses';
    }
}
exports.AddressEndpointConnector = AddressEndpointConnector;
//# sourceMappingURL=AddressEndpointConnector.js.map