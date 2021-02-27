"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductEndpointConnector = void 0;
const _1 = require(".");
/**
 * Provides methods to perform requests to the shop's product endpoint.
 * @extends {AbstractEndpointConnector}
 */
class ProductEndpointConnector extends _1.AbstractEndpointConnector {
    constructor() {
        super(...arguments);
        /**
         * Product endpoint routes.
         * @type {Object}
         */
        this.routes = {
            // Products.
            main: '/products',
            // Product images.
            images: '/product_images',
        };
    }
    /**
     * Returns the product endpoint route.
     * @returns {String} Product endpoint route.
     */
    getRoute() {
        return this.routes.main;
    }
    /**
     * Creates a new product link.
     * @param {Number} productId Product ID.
     * @param {Number} categoryId Category ID to link.
     * @returns {Promise}
     * @throws {Error} Missing or invalid product ID.
     * @throws {Error} Missing or invalid category ID.
     */
    createLink(productId, categoryId) {
        // Check product ID parameter.
        if (!productId || typeof productId !== 'number') {
            throw new Error('Missing or invalid product ID');
        }
        // Check category ID parameter.
        if (!categoryId || typeof categoryId !== 'number') {
            throw new Error(`Missing or invalid category ID`);
        }
        // Perform request.
        return this.requestDispatcher.post(`${this.getRoute()}/${productId}/links`, { categoryId });
    }
    /**
     * Deletes a product image.
     * @param {String} filename Product image file name.
     * @returns {Promise}
     * @throws {Error} Missing or invalid file name.
     */
    deleteImage(filename) {
        if (!filename || typeof filename !== 'string') {
            throw new Error('Missing or invalid file name');
        }
        // Perform request.
        return this.requestDispatcher.delete(this.routes.images, { filename });
    }
    /**
     * Deletes all product links.
     * @param {Number} id Product ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid product ID.
     */
    deleteLinks(id) {
        // Check product ID parameter.
        if (!id || typeof id !== 'number') {
            throw new Error('Missing or invalid product ID');
        }
        // Perform request.
        return this.requestDispatcher.delete(`${this.getRoute()}/${id}/links`);
    }
    /**
     * Deletes a product link.
     * @param {Number} productId Product ID.
     * @param {Number} categoryId Linked category ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid product ID.
     * @throws {Error} Missing or invalid category ID.
     */
    deleteLink(productId, categoryId) {
        // Check product ID parameter.
        if (!productId || typeof productId !== 'number') {
            throw new Error('Missing or invalid product ID');
        }
        // Check category ID parameter.
        if (!categoryId || typeof categoryId !== 'number') {
            throw new Error('Missing or invalid category ID');
        }
        // Perform request.
        return this.requestDispatcher.delete(`${this.getRoute()}/${productId}/links`, { categoryId });
    }
    /**
     * Returns all product links.
     * @param {Number} id Product ID.
     * @param {GetOptionsInterface} [options] GET request modifier options.
     * @returns {Promise}
     */
    getLinks(id, options) {
        // Check product ID parameter.
        if (!id || typeof id !== 'number') {
            throw new Error('Missing or invalid product ID');
        }
        // Perform request.
        return this.requestDispatcher.get(`${this.getRoute()}/${id}/links`, this.parseGetOptions(options));
    }
    /**
     * Returns a product link.
     * @param {Number} productId Product ID.
     * @param {Number} categoryId Linked category ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid product ID.
     * @throws {Error} Missing or invalid category ID.
     */
    getLink(productId, categoryId) {
        // Check product ID parameter.
        if (!productId || typeof productId !== 'number') {
            throw new Error('Missing or invalid product ID');
        }
        // Check category ID parameter.
        if (!categoryId || typeof categoryId !== 'number') {
            throw new Error('Missing or invalid category ID');
        }
        // Perform request.
        return this.requestDispatcher.delete(`${this.getRoute()}/${productId}/links`, { categoryId });
    }
    /**
     * Renames a product image.
     * @param {String} oldFilename Old file name to be renamed.
     * @param {String} newFilename New file name.
     * @returns {Promise}
     * @throws {Error} Missing or invalid old file name.
     * @throws {Error} Missing or invalid new file name.
     */
    renameImage(oldFilename, newFilename) {
        // Check old file name parameter.
        if (!oldFilename || typeof oldFilename !== 'string') {
            throw new Error('Missing or invalid old file name');
        }
        // Check old file name parameter.
        if (!newFilename || typeof newFilename !== 'string') {
            throw new Error('Missing or invalid new file name');
        }
        // Perform request.
        return this.requestDispatcher.put(this.routes.images, { oldFilename, newFilename });
    }
    /**
     * Updates a product link.
     * @param {Number} productId Product ID.
     * @param {Number} oldCategoryId Old category ID.
     * @param {Number} newCategoryId New category ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid product ID.
     * @throws {Error} Missing or invalid old category ID.
     * @throws {Error} Missing or invalid new category ID.
     */
    updateLink(productId, oldCategoryId, newCategoryId) {
        // Check product ID parameter.
        if (!productId || typeof productId !== 'number') {
            throw new Error('Missing or invalid product ID');
        }
        // Check old category ID parameter.
        if (!oldCategoryId || typeof oldCategoryId !== 'number') {
            throw new Error('Missing or invalid old category ID');
        }
        // Check new category ID parameter.
        if (!newCategoryId || typeof newCategoryId !== 'number') {
            throw new Error('Missing or invalid new category ID');
        }
        // Perform request.
        return this.requestDispatcher.put(`${this.getRoute()}/${productId}/links`, { oldCategoryId, newCategoryId });
    }
    /**
     * Uploads a product image.
     * @param {String} filePath Path to file.
     * @param {String} fileName Desired file name.
     * @returns {Promise}
     * @throws {Error} Missing or invalid file path parameter.
     * @throws {Error} Missing or invalid file name parameter.
     */
    uploadImage(filePath, fileName) {
        // Check file path parameter.
        if (!filePath || typeof filePath !== 'string') {
            throw new Error('Missing or invalid file path');
        }
        // Check file name parameter.
        if (!fileName || typeof fileName !== 'string') {
            throw new Error('Missing or invalid file name');
        }
        // Perform request.
        return this.requestDispatcher.uploadFile(this.routes.images, filePath, fileName);
    }
    /**
     * Updates multiple products
     * @param {Object} data Product entries.
     * @returns {Promise}
     * @throws {Error} Missing or invalid data parameter.
     */
    updateMultiple(data) {
        // Check data parameter.
        if (!data || typeof data !== 'object') {
            throw new Error('Missing or invalid data');
        }
        // Perform request.
        return this.requestDispatcher.put(`${this.getRoute()}`, data);
    }
}
exports.ProductEndpointConnector = ProductEndpointConnector;
//# sourceMappingURL=ProductEndpointConnector.js.map