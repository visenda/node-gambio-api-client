"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderEndpointConnector = void 0;
const _1 = require(".");
/**
 * Provides methods to perform requests to the shop's order endpoint.
 * @extends {AbstractEndpointConnector}
 */
class OrderEndpointConnector extends _1.AbstractEndpointConnector {
    /**
     * Returns the endpoint route for attributes or properties.
     * @param {String} type Attribute or property?
     * @returns {String} The appropriate route.
     */
    getAttributeOrPropertyRoute(type) {
        return (type === 'attribute') ? `${type}s` : 'properties';
    }
    /**
     * Creates an order item attribute or property.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Object} data Order item attribute/property data.
     * @param {String} type Attribute or property?
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid order item ID parameter.
     * @throws {Error} Missing or invalid data parameter.
     */
    createAttributeOrProperty(orderId, orderItemId, data, type) {
        // Check order ID parameter.
        if (!orderId || typeof orderId !== 'number') {
            throw new Error('Missing or invalid order ID');
        }
        // Check order item ID parameter.
        if (!orderItemId || typeof orderItemId !== 'number') {
            throw new Error('Missing or invalid order item ID');
        }
        // Check order item attribute/property data parameter.
        if (!data || typeof data !== 'object') {
            throw new Error(`Missing or invalid order item ${type} data`);
        }
        // Perform request.
        return this.requestDispatcher.post(`${this.getRoute()}/${orderId}/items/${orderItemId}/${this.getAttributeOrPropertyRoute(type)}`, data);
    }
    /**
     * Deletes an order item attribute/property by its ID.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Number} orderItemAttributeOrPropertyId Order item attribute/property ID.
     * @param {String} type Attribute or property?
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid order item ID parameter.
     * @throws {Error} Missing or invalid order item attribute/property ID parameter.
     */
    deleteAttributeOrProperty(orderId, orderItemId, orderItemAttributeOrPropertyId, type) {
        // Check order ID parameter.
        if (!orderId || typeof orderId !== 'number') {
            throw new Error('Missing or invalid order ID');
        }
        // Check order item ID parameter.
        if (!orderItemId || typeof orderItemId !== 'number') {
            throw new Error('Missing or invalid order item ID');
        }
        // Check order item attribute/property ID parameter.
        if (!orderItemAttributeOrPropertyId || typeof orderItemAttributeOrPropertyId !== 'number') {
            throw new Error('Missing or invalid order item ${type} ID');
        }
        // Perform request.
        return this.requestDispatcher.delete(`${this.getRoute()}/${orderId}/items/${orderItemId}/${this.getAttributeOrPropertyRoute(type)}/${orderItemAttributeOrPropertyId}`);
    }
    /**
     * Returns the order item attributes/properties.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {String} type Attribute or property?
     * @returns {Promise}
     */
    getAttributesOrProperties(orderId, orderItemId, type) {
        // Check order ID parameter.
        if (!orderId || typeof orderId !== 'number') {
            throw new Error('Missing or invalid order ID');
        }
        // Check order item ID parameter.
        if (!orderItemId || typeof orderItemId !== 'number') {
            throw new Error('Missing or invalid order item ID');
        }
        // Perform request.
        return this.requestDispatcher.get(`${this.getRoute()}/${orderId}/items/${orderItemId}/${this.getAttributeOrPropertyRoute(type)}`);
    }
    /**
     * Returns a specific order item attribute/property.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Number} orderItemAttributeOrPropertyId Order item attribute/property ID.
     * @param {String} type Attribute or property?
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid order item ID parameter.
     * @throws {Error} Missing or invalid order item attribute/property ID parameter.
     */
    getAttributeOrProperty(orderId, orderItemId, orderItemAttributeOrPropertyId, type) {
        // Check order ID parameter.
        if (!orderId || typeof orderId !== 'number') {
            throw new Error('Missing or invalid order ID');
        }
        // Check order item ID parameter.
        if (!orderItemId || typeof orderItemId !== 'number') {
            throw new Error('Missing or invalid order item ID');
        }
        // Check order item attribute/property ID parameter.
        if (!orderItemAttributeOrPropertyId || typeof orderItemAttributeOrPropertyId !== 'number') {
            throw new Error('Missing or invalid order item ${type} ID');
        }
        // Perform request.
        return this.requestDispatcher.get(`${this.getRoute()}/${orderId}/items/${orderItemId}/${this.getAttributeOrPropertyRoute(type)}/${orderItemAttributeOrPropertyId}`);
    }
    /**
     * Updates an order item attribute/property.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Number} orderItemAttributeOrPropertyId Order item attribute/property ID.
     * @param {Object} data Order item attribute/property data.
     * @param {String} type Attribute or property?
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid order item ID parameter.
     * @throws {Error} Missing or invalid order item attribute/property ID parameter.
     */
    updateAttributeOrProperty(orderId, orderItemId, orderItemAttributeOrPropertyId, data, type) {
        // Check order ID parameter.
        if (!orderId || typeof orderId !== 'number') {
            throw new Error('Missing or invalid order ID');
        }
        // Check order item ID parameter.
        if (!orderItemId || typeof orderItemId !== 'number') {
            throw new Error('Missing or invalid order item ID');
        }
        // Check order item attribute/property ID parameter.
        if (!orderItemAttributeOrPropertyId || typeof orderItemAttributeOrPropertyId !== 'number') {
            throw new Error('Missing or invalid order item ${type} ID');
        }
        // Perform request.
        return this.requestDispatcher.put(`${this.getRoute()}/${orderId}/items/${orderItemId}/${this.getAttributeOrPropertyRoute(type)}/${orderItemAttributeOrPropertyId}`, data);
    }
    /**
     * Returns the order endpoint route.
     * @returns {String} Order endpoint route.
     */
    getRoute() {
        return '/orders';
    }
    /**
     * Creates an order item attribute.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Object} data Order item attribute data.
     * @returns {Promise}
     */
    createAttribute(orderId, orderItemId, data) {
        return this.createAttributeOrProperty(orderId, orderItemId, data, 'attribute');
    }
    /**
     * Creates an order item property.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Object} data Order item property data.
     * @returns {Promise}
     */
    createProperty(orderId, orderItemId, data) {
        return this.createAttributeOrProperty(orderId, orderItemId, data, 'property');
    }
    /**
     * Creates an order item.
     * @param {Number} orderId Order ID.
     * @param {Object} data Order item data.
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid data parameter.
     */
    createItem(orderId, data) {
        // Check order ID parameter.
        if (!orderId || typeof orderId !== 'number') {
            throw new Error('Missing or invalid order ID');
        }
        // Check data parameter.
        if (!data || typeof data !== 'object') {
            throw new Error('Missing or invalid order item data');
        }
        // Perform request.
        return this.requestDispatcher.post(`${this.getRoute()}/${orderId}/items`, data);
    }
    /**
     * Creates an order total.
     * @param {Number} orderId Order ID.
     * @param {Object} data Order total data.
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid data parameter.
     */
    createTotal(orderId, data) {
        // Check order ID parameter.
        if (!orderId || typeof orderId !== 'number') {
            throw new Error('Missing or invalid order ID');
        }
        // Check data parameter.
        if (!data || typeof data !== 'object') {
            throw new Error('Missing or invalid order total data');
        }
        // Perform request.
        return this.requestDispatcher.post(`${this.getRoute()}/${orderId}/totals`, data);
    }
    /**
     * Deletes an order item attribute by its ID.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Number} orderItemAttributeId Order item attribute ID.
     * @returns {Promise}
     */
    deleteAttribute(orderId, orderItemId, orderItemAttributeId) {
        return this.deleteAttributeOrProperty(orderId, orderItemId, orderItemAttributeId, 'attribute');
    }
    /**
     * Deletes an order item property by its ID.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Number} orderItemPropertyId Order item property ID.
     * @returns {Promise}
     */
    deleteProperty(orderId, orderItemId, orderItemPropertyId) {
        return this.deleteAttributeOrProperty(orderId, orderItemId, orderItemPropertyId, 'property');
    }
    /**
     * Deletes an order item by its ID.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid order item ID parameter.
     */
    deleteItem(orderId, orderItemId) {
        // Check order ID parameter.
        if (!orderId || typeof orderId !== 'number') {
            throw new Error('Missing or invalid order ID');
        }
        // Check order item ID parameter.
        if (!orderItemId || typeof orderItemId !== 'number') {
            throw new Error('Missing or invalid order item ID');
        }
        // Perform request.
        return this.requestDispatcher.delete(`${this.getRoute()}/${orderId}/items/${orderItemId}`);
    }
    /**
     * Deletes an order total by its ID.
     * @param {Number} orderId Order ID.
     * @param {Number} orderTotalId Order total ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid order total ID parameter.
     */
    deleteTotal(orderId, orderTotalId) {
        // Check order ID parameter.
        if (!orderId || typeof orderId !== 'number') {
            throw new Error('Missing or invalid order ID');
        }
        // Check order total ID parameter.
        if (!orderTotalId || typeof orderTotalId !== 'number') {
            throw new Error('Missing or invalid order total ID');
        }
        // Perform request.
        return this.requestDispatcher.delete(`${this.getRoute()}/${orderId}/totals/${orderTotalId}`);
    }
    /**
     * Returns an order history.
     * @param {Number} id Order ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid ID parameter.
     */
    getHistory(id) {
        // Check ID parameter.
        if (!id || typeof id !== 'number') {
            throw new Error('Missing or invalid order ID');
        }
        // Perform request.
        return this.requestDispatcher.get(`${this.getRoute()}/${id}/history`);
    }
    /**
     * Returns an order history by its ID.
     * @param {Number} orderId Order ID.
     * @param {Number} orderHistoryId Order history ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid order history ID parameter.
     */
    getHistoryById(orderId, orderHistoryId) {
        // Check order ID parameter.
        if (!orderId || typeof orderId !== 'number') {
            throw new Error('Missing or invalid order ID');
        }
        // Check order history ID parameter.
        if (!orderHistoryId || typeof orderHistoryId !== 'number') {
            throw new Error('Missing or invalid order history ID');
        }
        // Perform request.
        return this.requestDispatcher.get(`${this.getRoute()}/${orderId}/history/${orderHistoryId}`);
    }
    /**
     * Returns the order item attributes.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @returns {Promise}
     */
    getAttributes(orderId, orderItemId) {
        return this.getAttributesOrProperties(orderId, orderItemId, 'attribute');
    }
    /**
     * Returns the order item properties.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @returns {Promise}
     */
    getProperties(orderId, orderItemId) {
        return this.getAttributesOrProperties(orderId, orderItemId, 'property');
    }
    /**
     * Returns a specific order item attribute.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Number} orderItemAttributeId Order item attribute ID.
     * @returns {Promise}
     */
    getAttribute(orderId, orderItemId, orderItemAttributeId) {
        return this.getAttributeOrProperty(orderId, orderItemId, orderItemAttributeId, 'attribute');
    }
    /**
     * Returns a specific order item property.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Number} orderItemPropertyId Order item property ID.
     * @returns {Promise}
     */
    getProperty(orderId, orderItemId, orderItemPropertyId) {
        return this.getAttributeOrProperty(orderId, orderItemId, orderItemPropertyId, 'property');
    }
    /**
     * Returns the order items.
     * @param {Number} id Order ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid ID parameter.
     */
    getItems(id) {
        // Check ID parameter.
        if (!id || typeof id !== 'number') {
            throw new Error('Missing or invalid order ID');
        }
        // Perform request.
        return this.requestDispatcher.get(`${this.getRoute()}/${id}/items`);
    }
    /**
     * Returns an order item.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid order item ID parameter.
     */
    getItem(orderId, orderItemId) {
        // Check order ID parameter.
        if (!orderId || typeof orderId !== 'number') {
            throw new Error('Missing or invalid order ID');
        }
        // Check order item ID parameter.
        if (!orderItemId || typeof orderItemId !== 'number') {
            throw new Error('Missing or invalid order item ID');
        }
        // Perform request.
        return this.requestDispatcher.get(`${this.getRoute()}/${orderId}/items/${orderItemId}`);
    }
    /**
     * Returns the order totals.
     * @param {Number} id Order ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid ID parameter.
     */
    getTotals(id) {
        // Check ID parameter.
        if (!id || typeof id !== 'number') {
            throw new Error('Missing or invalid order ID');
        }
        // Perform request.
        return this.requestDispatcher.get(`${this.getRoute()}/${id}/totals`);
    }
    /**
     * Returns an order total.
     * @param {Number} orderId Order ID.
     * @param {Number} orderTotalId Order total ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid order total ID parameter.
     */
    getTotal(orderId, orderTotalId) {
        // Check order ID parameter.
        if (!orderId || typeof orderId !== 'number') {
            throw new Error('Missing or invalid order ID');
        }
        // Check order item ID parameter.
        if (!orderTotalId || typeof orderTotalId !== 'number') {
            throw new Error('Missing or invalid order total ID');
        }
        // Perform request.
        return this.requestDispatcher.get(`${this.getRoute()}/${orderId}/totals/${orderTotalId}`);
    }
    /**
     * Updates an order item attribute.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Number} orderItemAttributeId Order item attribute ID.
     * @param {Object} data Order item attribute data.
     * @returns {Promise}
     */
    updateAttribute(orderId, orderItemId, orderItemAttributeId, data) {
        return this.updateAttributeOrProperty(orderId, orderItemId, orderItemAttributeId, data, 'attribute');
    }
    /**
     * Updates an order item property.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Number} orderItemPropertyId Order item property ID.
     * @param {Object} data Order item property data.
     * @returns {Promise}
     */
    updateProperty(orderId, orderItemId, orderItemPropertyId, data) {
        return this.updateAttributeOrProperty(orderId, orderItemId, orderItemPropertyId, data, 'property');
    }
    /**
     * Updates an order item.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Object} data Order item data.
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid order item ID parameter.
     * @throws {Error} Missing or invalid order item data parameter.
     */
    updateItem(orderId, orderItemId, data) {
        // Check order ID parameter.
        if (!orderId || typeof orderId !== 'number') {
            throw new Error('Missing or invalid order ID');
        }
        // Check order item ID parameter.
        if (!orderItemId || typeof orderItemId !== 'number') {
            throw new Error('Missing or invalid order item ID');
        }
        // Check order item data parameter.
        if (!data || typeof data !== 'object') {
            throw new Error(`Missing or invalid order item data`);
        }
        // Perform request.
        return this.requestDispatcher.put(`${this.getRoute()}/${orderId}/items/${orderItemId}`, data);
    }
    /**
     * Updates an order status.
     * @param {Number} id Order ID.
     * @param {Object} data Order status data.
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid order status data parameter.
     */
    updateStatus(id, data) {
        // Check order ID parameter.
        if (!id || typeof id !== 'number') {
            throw new Error('Missing or invalid order ID');
        }
        // Check order item data parameter.
        if (!data || typeof data !== 'object') {
            throw new Error(`Missing or invalid order status data`);
        }
        // Perform request.
        return this.requestDispatcher.patch(`${this.getRoute()}/${id}/status`, data);
    }
    /**
     * Updates an order total.
     * @param {Number} id Order ID.
     * @param {Object} data Order status data.
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid order status data parameter.
     */
    updateTotal(orderId, orderTotalId, data) {
        // Check order ID parameter.
        if (!orderId || typeof orderId !== 'number') {
            throw new Error('Missing or invalid order ID');
        }
        // Check order total ID parameter.
        if (!orderTotalId || typeof orderTotalId !== 'number') {
            throw new Error('Missing or invalid order total ID');
        }
        // Check order item data parameter.
        if (!data || typeof data !== 'object') {
            throw new Error(`Missing or invalid order total data`);
        }
        // Perform request.
        return this.requestDispatcher.put(`${this.getRoute()}/${orderId}/totals/${orderTotalId}`, data);
    }
}
exports.OrderEndpointConnector = OrderEndpointConnector;
