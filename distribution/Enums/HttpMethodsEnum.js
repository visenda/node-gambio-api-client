"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpMethodsEnum = void 0;
/**
 * Contains all HTTP methods used by the request dispatcher.
 * @enum {String}
 */
var HttpMethodsEnum;
(function (HttpMethodsEnum) {
    HttpMethodsEnum[HttpMethodsEnum["GET"] = 0] = "GET";
    HttpMethodsEnum[HttpMethodsEnum["POST"] = 1] = "POST";
    HttpMethodsEnum[HttpMethodsEnum["PUT"] = 2] = "PUT";
    HttpMethodsEnum[HttpMethodsEnum["DELETE"] = 3] = "DELETE";
    HttpMethodsEnum[HttpMethodsEnum["PATCH"] = 4] = "PATCH";
})(HttpMethodsEnum || (HttpMethodsEnum = {}));
exports.HttpMethodsEnum = HttpMethodsEnum;
//# sourceMappingURL=HttpMethodsEnum.js.map