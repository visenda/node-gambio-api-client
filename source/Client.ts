import { ClientOptionsInterface } from './Interfaces';
import {
  RequestDispatcher,
  AddressEndpointConnector,
  CategoryEndpointConnector,
  CountryEndpointConnector,
} from '.';

class Client {
  /**
   * Client version.
   * @type {String}
   */
  public static VERSION: string = '0.1.0';

  /**
   * Client options.
   * @type {ClientOptionsInterface}
   */
  private options: ClientOptionsInterface;

  /**
   * Request dispatcher.
   * @type {RequestDispatcher}
   */
  private requestDispatcher: RequestDispatcher;

  /**
   * Address endpoint connector.
   * @type {AddressEndpointConnector}
   */
  public addresses: AddressEndpointConnector;

  /**
   * Category endpoint connector.
   * @type {AddressEndpointConnector}
   */
  public categories: CategoryEndpointConnector;

  /**
   * Country endpoint connector.
   * @type {CountryEndpointConnector}
   */
  public countries: CountryEndpointConnector;

  /**
   * Creates an instance of Client.
   */
  constructor(options: ClientOptionsInterface) {
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

    // Assign parameter as property.
    this.options = options;

    // Set request dispatcher as property.
    this.requestDispatcher = new RequestDispatcher(this.options);

    // Set endpoint connectors as properties.
    this.addresses = new AddressEndpointConnector(this.requestDispatcher);
    this.categories = new CategoryEndpointConnector(this.requestDispatcher);
    this.countries = new CountryEndpointConnector(this.requestDispatcher);
  }
}

export { Client };
