"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestDispatcher = void 0;
require("core-js/shim");
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const request_1 = __importDefault(require("request"));
const Enums_1 = require("./Enums");
const _1 = require(".");
/**
 * Performs requests to the shop's endpoints.
 * @implements {RequestDispatcherInterface}
 */
class RequestDispatcher {
    /**
     * Creates an instance of RequestDispatcher.
     * @throws {Error} Missing or invalid client options.
     * @throws {Error} Missing or invalid shop URL.
     * @throws {Error} Missing or invalid shop user.
     * @throws {Error} Missing or invalid shop password.
     */
    constructor(options) {
        /**
         * Default request headers.
         * @type {Object}
         */
        this.headers = {
            'User-Agent': 'Node API client'
        };
        // Check parameter.
        if (!options || typeof options !== 'object') {
            throw new Error('Missing or invalid client options');
        }
        // Check URL.
        if (!options.url || typeof options.url !== 'string') {
            throw new Error('Missing or invalid shop URL');
        }
        // Check user.
        if (!options.user || typeof options.user !== 'string') {
            throw new Error('Missing or invalid shop user');
        }
        // Check password.
        if (!options.password || typeof options.password !== 'string') {
            throw new Error('Missing or invalid shop password');
        }
        // Assign auth property.
        this.auth = {
            user: options.user,
            pass: options.password,
        };
        // Assign URL property.
        this.url = options.url + _1.Configuration.API_URL;
    }
    /**
     * Returns the default request parameters.
     * @returns {Object} Default request parameters.
     */
    getDefaultRequestParameters() {
        return {
            headers: this.headers,
            auth: this.auth,
            json: true
        };
    }
    /**
     * Performs an HTTP request to a specific endpoint using the request library.
     * @param {String} route Endpoint route.
     * @param {HttpMethodsEnum} method HTTP request method.
     * @param {Object} [data] Request data.
     * @param {Boolean} [hasFormData] Is the data object a form data object?
     * @returns {Promise}
     */
    performRequest(route, method, data, hasFormData = false) {
        // Get HTTP method name.
        const requestMethodName = Enums_1.HttpMethodsEnum[method];
        // Request data body property name.
        const dataPropertyName = hasFormData ? 'formData' : (method === Enums_1.HttpMethodsEnum.GET ? 'qs' : 'body');
        // Set addtional request parameters.
        const additionalParameters = {
            url: this.url + route,
            method: requestMethodName,
            [dataPropertyName]: data,
        };
        // Merge default request parameters with addtional ones.
        const mergedParameters = Object.assign(this.getDefaultRequestParameters(), additionalParameters);
        // Request promise handler.
        const promiseHandler = (resolve, reject) => {
            // Response handler.
            const responseHandler = (error, response) => {
                // Parsed response.
                let parsed = null;
                // Reject promise with the error parameter, if defined.
                if (error) {
                    reject(error);
                    return;
                }
                // Reject promise with the response body, if the status code is not ok.
                if (response.statusCode < 200 || response.statusCode > 299) {
                    reject(response.body);
                    return;
                }
                // Parse the response body.
                try {
                    if (typeof response.body === 'string') {
                        parsed = JSON.parse(response.body);
                    }
                    else {
                        parsed = response.body;
                    }
                }
                catch (parseError) {
                    resolve(response.body);
                }
                // Resolve promise.
                resolve(parsed);
            };
            // Send request.
            request_1.default(mergedParameters, responseHandler);
        };
        return new Promise(promiseHandler);
    }
    /**
     * Performs a HTTP GET request to a specific endpoint and returns a promise.
     * @param {String} route Endpoint route to perform the request to.
     * @param {Object} [data] Request data.
     * @throws {Error} Request route is empty or not a string.
     * @throws {Error} Data object is not an object.
     * @returns {Promise}
     */
    get(route, data) {
        // Check URL parameter.
        if (!route || typeof route !== 'string') {
            throw new Error('Missing or invalid route');
        }
        // Check data parameter.
        if (data && typeof data !== 'object') {
            throw new Error('Invalid request data');
        }
        // Perform request.
        return this.performRequest(route, Enums_1.HttpMethodsEnum.GET, data);
    }
    /**
     * Performs a HTTP POST request to a specific endpoint and returns a promise.
     * @param {String} route Endpoint route to perform the request to.
     * @param {Object} data Request data.
     * @throws {Error} Request route is empty or not a string.
     * @throws {Error} Data object is not an object.
     * @returns {Promise}
     */
    post(route, data) {
        // Check URL parameter.
        if (!route || typeof route !== 'string') {
            throw new Error('Missing or invalid route');
        }
        // Check data parameter.
        if (!data || typeof data !== 'object') {
            throw new Error('Missing or invalid request data');
        }
        // Perform request.
        return this.performRequest(route, Enums_1.HttpMethodsEnum.POST, data);
    }
    /**
     * Performs a HTTP PUT request to a specific endpoint and returns a promise.
     * @param {String} route Endpoint route to perform the request to.
     * @param {Object} data Request data.
     * @throws {Error} Request route is empty or not a string.
     * @throws {Error} Data object is not an object.
     * @returns {Promise}
     */
    put(route, data) {
        // Check URL parameter.
        if (!route || typeof route !== 'string') {
            throw new Error('Missing or invalid route');
        }
        // Check data parameter.
        if (!data || typeof data !== 'object') {
            throw new Error('Missing or invalid request data');
        }
        // Perform request.
        return this.performRequest(route, Enums_1.HttpMethodsEnum.PUT, data);
    }
    /**
     * Performs a HTTP PATCH request to a specific endpoint and returns a promise.
     * @param {String} route Endpoint route to perform the request to.
     * @param {Object} data Request data.
     * @throws {Error} Request route is empty or not a string.
     * @throws {Error} Data object is not an object.
     * @returns {Promise}
     */
    patch(route, data) {
        // Check URL parameter.
        if (!route || typeof route !== 'string') {
            throw new Error('Missing or invalid route');
        }
        // Check data parameter.
        if (!data || typeof data !== 'object') {
            throw new Error('Missing or invalid request data');
        }
        // Perform request.
        return this.performRequest(route, Enums_1.HttpMethodsEnum.PATCH, data);
    }
    /**
     * Performs a HTTP DELETE request to a specific endpoint and returns a promise.
     * @param {String} route Endpoint route to perform the request to.
     * @param {Object} [data] Request data.
     * @throws {Error} Request route is empty or not a string.
     * @throws {Error} Data object is not an object.
     * @returns {Promise}
     */
    delete(route, data) {
        // Check URL parameter.
        if (!route || typeof route !== 'string') {
            throw new Error('Missing or invalid route');
        }
        // Check data parameter.
        if (data && typeof data !== 'object') {
            throw new Error('Invalid request data');
        }
        // Perform request.
        return this.performRequest(route, Enums_1.HttpMethodsEnum.DELETE, data);
    }
    /**
     * Performs a file upload to a specific endpoint and returns a promise.
     * @param {String} route Endpoint route to perform the request to.
     * @param {String} filePath Path to file.
     * @param {String} fileName File name.
     * @param {String} [filePostFieldName] Post field name for the file.
     * @param {String} [fileNamePostFieldName] Post field name for the file name.
     * @throws {Error} Request route is empty or not a string.
     * @throws {Error} File path is empty or not a string.
     * @throws {Error} File name is empty or not a string.
     * @throws {Error} File post field name not a string.
     * @throws {Error} File name post field name not a string.
     * @returns {Promise}
     */
    uploadFile(route, filePath, fileName, filePostFieldName = 'file', fileNamePostFieldName = 'filename') {
        // Check route parameter.
        if (!route || typeof route !== 'string') {
            throw new Error('Missing or invalid route');
        }
        // Check file path parameter.
        if (!filePath || typeof filePath !== 'string') {
            throw new Error('Missing or invalid file path');
        }
        // Check file name path parameter.
        if (!fileName || typeof fileName !== 'string') {
            throw new Error('Missing or invalid file name');
        }
        // Check file post field name.
        if (filePostFieldName && typeof filePostFieldName !== 'string') {
            throw new Error('Invalid file post field name');
        }
        // Check file name post field name.
        if (fileNamePostFieldName && typeof fileNamePostFieldName !== 'string') {
            throw new Error('Invalid file name post field name');
        }
        // Read file.
        const file = fs.createReadStream(path.resolve(filePath));
        // Form data.
        const formData = {
            [filePostFieldName]: file,
            [fileNamePostFieldName]: fileName,
        };
        // Perform request.
        return this.performRequest(route, Enums_1.HttpMethodsEnum.POST, formData, true);
    }
}
exports.RequestDispatcher = RequestDispatcher;
