"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryEndpointConnector = void 0;
const _1 = require(".");
/**
 * Provides methods to perform requests to the shop's category endpoint.
 * @extends {AbstractEndpointConnector}
 */
class CategoryEndpointConnector extends _1.AbstractEndpointConnector {
    constructor() {
        super(...arguments);
        /**
         * Category endpoint routes.
         * @type {Object}
         */
        this.routes = {
            // Categories.
            main: '/categories',
            // Category icons.
            icons: '/category_icons',
            // Category images.
            images: '/category_images',
        };
    }
    /**
     * Returns the category endpoint route.
     * @returns {String} Category endpoint route.
     */
    getRoute() {
        return this.routes.main;
    }
    /**
     * Deletes a category icon by its file name.
     * @param {String} fileName File name.
     * @returns {Promise}
     * @throws {Error} Missing or invalid file name parameter.
     */
    deleteIcon(fileName) {
        // Check file name parameter.
        if (!fileName || typeof fileName !== 'string') {
            throw new Error('Missing or invalid category icon file name');
        }
        // Perform request.
        return this.requestDispatcher.delete(this.routes.icons, { filename: fileName });
    }
    /**
     * Deletes a category image by its file name.
     * @param {String} filename File name.
     * @returns {Promise}
     * @throws {Error} Missing or invalid file name parameter.
     */
    deleteImage(filename) {
        // Check file name parameter.
        if (!filename || typeof filename !== 'string') {
            throw new Error('Missing or invalid category image file name');
        }
        // Perform request.
        return this.requestDispatcher.delete(this.routes.images, { filename });
    }
    /**
     * Returns the children of a category.
     * @param {Number} id Category ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid ID parameter.
     */
    getChild(id) {
        // Check ID parameter.
        if (!id || typeof id !== 'number') {
            throw new Error('Missing or invalid category ID');
        }
        // Perform request.
        return this.requestDispatcher.get(`${this.getRoute()}/${id}/children`);
    }
    /**
     * Returns all category icons.
     * @returns {Promise}
     */
    getIcons() {
        return this.requestDispatcher.get(this.routes.icons);
    }
    /**
     * Returns all category images.
     * @returns {Promise}
     */
    getImages() {
        return this.requestDispatcher.get(this.routes.images);
    }
    /**
     * Renames a category icon.
     * @param {String} oldFilename File to rename.
     * @param {String} newFilename New file name.
     * @returns {Promise}
     * @throws {Error} Missing or invalid old file name parameter.
     * @throws {Error} Missing or invalid new file name parameter.
     */
    renameIcon(oldFilename, newFilename) {
        // Check old file name parameter.
        if (!oldFilename || typeof oldFilename !== 'string') {
            throw new Error('Missing or invalid old file name');
        }
        // Check new file name parameter.
        if (!newFilename || typeof newFilename !== 'string') {
            throw new Error('Missing or invalid new file name');
        }
        // Perform request.
        return this.requestDispatcher.put(this.routes.icons, { oldFilename, newFilename });
    }
    /**
     * Renames a category image.
     * @param {String} oldFilename File to rename.
     * @param {String} newFilename New file name.
     * @returns {Promise}
     * @throws {Error} Missing or invalid old file name parameter.
     * @throws {Error} Missing or invalid new file name parameter.
     */
    renameImage(oldFilename, newFilename) {
        // Check old file name parameter.
        if (!oldFilename || typeof oldFilename !== 'string') {
            throw new Error('Missing or invalid old file name');
        }
        // Check new file name parameter.
        if (!newFilename || typeof newFilename !== 'string') {
            throw new Error('Missing or invalid new file name');
        }
        // Perform request.
        return this.requestDispatcher.put(this.routes.images, { oldFilename, newFilename });
    }
    /**
     * Uploads a category icon.
     * @param {String} filePath File path.
     * @param {String} fileName File name.
     * @throws {Error} Missing or invalid file path parameter.
     * @throws {Error} Missing or invalid file name parameter.
     */
    uploadIcon(filePath, fileName) {
        // Check file path parameter.
        if (!filePath || typeof filePath !== 'string') {
            throw new Error('Missing or invalid file path');
        }
        // Check file name parameter.
        if (!fileName || typeof fileName !== 'string') {
            throw new Error('Missing or invalid file path');
        }
        // Perform request.
        return this.requestDispatcher.uploadFile(this.routes.icons, filePath, fileName);
    }
    /**
     * Uploads a category image.
     * @param {String} filePath File path.
     * @param {String} fileName File name.
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
            throw new Error('Missing or invalid file path');
        }
        // Perform request.
        return this.requestDispatcher.uploadFile(this.routes.images, filePath, fileName);
    }
}
exports.CategoryEndpointConnector = CategoryEndpointConnector;
