"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoneEndpointConnector = void 0;
const _1 = require(".");
/**
 * Provides methods to perform requests to the shop's zone endpoint.
 * @extends {AbstractEndpointConnector}
 */
class ZoneEndpointConnector extends _1.AbstractEndpointConnector {
    /**
     * Returns the zone endpoint route.
     * @returns {String} Zone endpoint route.
     */
    getRoute() {
        return '/zones';
    }
}
exports.ZoneEndpointConnector = ZoneEndpointConnector;
//# sourceMappingURL=ZoneEndpointConnector.js.map