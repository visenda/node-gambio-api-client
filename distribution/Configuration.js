"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuration = void 0;
/**
 * Provides client configuration values.
 */
class Configuration {
}
exports.Configuration = Configuration;
/**
 * Current API version.
 * @type {Number}
 * @static
 */
Configuration.API_VERSION = 2;
/**
 * Path to API controller.
 * @type {String}
 * @static
 */
Configuration.API_URL = `/api.php/v${Configuration.API_VERSION}`;
//# sourceMappingURL=Configuration.js.map