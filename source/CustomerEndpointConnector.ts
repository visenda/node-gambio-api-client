import { AbstractEndpointConnector } from '.';
import { ResponseInterface, GetOptionsInterface } from './Interfaces';

/**
 * Provides methods to perform requests to the shop's customer endpoint.
 * @extends {AbstractEndpointConnector}
 */
class CustomerEndpointConnector extends AbstractEndpointConnector {
  /**
   * Returns the customer endpoint route.
   * @returns {String} Customer endpoint route.
   */
  public getRoute(): string {
    return '/customers';
  }

  /**
   * Returns all customers, that are guests.
   * @param {GetOptionsInterface} [options] GET request modifier options.
   * @returns {Promise}
   */
  public getGuests(options?: GetOptionsInterface): Promise<ResponseInterface> {
    return this.requestDispatcher.get(this.getRoute(), Object.assign({}, this.parseGetOptions(options), { type: 'guests' }));
  }

  /**
   * Returns the addresses of a customer.
   * @param {Number} id Customer ID.
   * @returns {Promise}
   * @throws {Error} Missing or invalid ID parameter.
   */
  public getAddresses(id: number): Promise<ResponseInterface> {
    // Check ID parameter.
    if (!id || typeof id !== 'number') {
      throw new Error('Missing or invalid customer ID');
    }

    // Perform request.
    return this.requestDispatcher.get(`${this.getRoute()}/${id}/addresses`);
  }
}

export { CustomerEndpointConnector };
