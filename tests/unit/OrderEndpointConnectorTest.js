import test from 'tape';
import { OrderEndpointConnector, RequestDispatcher } from './../../distribution/scripts';
import { reusableTesters } from './../../tools/helpers';
import { login } from './../../tools/fixtures';
import { variables } from './../../tools/values';

const instance = new OrderEndpointConnector(new RequestDispatcher(login));

test('OrderEndpointConnector#constructor', t => reusableTesters.testEndpointConnectorConstructor(t, OrderEndpointConnector));
test('OrderEndpointConnector#createAttribute', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'createAttribute', [variables.examples.number, variables.examples.number, variables.empty.object]));
test('OrderEndpointConnector#createItem', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'createItem', [variables.examples.number, variables.empty.object]));
test('OrderEndpointConnector#createTotal', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'createTotal', [variables.examples.number, variables.empty.object]));
test('OrderEndpointConnector#create', t => reusableTesters.testEndpointConnectorCreateMethod(t, instance));
test('OrderEndpointConnector#deleteAttribute', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'deleteIttribute', [variables.examples.number, variables.examples.number, variables.examples.number]));
test('OrderEndpointConnector#deleteProperty', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'deleteProperty', [variables.examples.number, variables.examples.number, variables.examples.number]));
test('OrderEndpointConnector#deleteTotal', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'deleteTotal', [variables.examples.number, variables.examples.number]));
test('OrderEndpointConnector#delete', t => reusableTesters.testEndpointConnectorDeleteMethod(t, instance));
test('OrderEndpointConnector#getHistory', t => reusableTesters.testEndpointConnectorCustomMethodWithRequiredParameter(t, instance, 'getHistory', variables.examples.number));
test('OrderEndpointConnector#getHistoryById', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'getHistoryById', [variables.examples.number, variables.examples.number]));
test('OrderEndpointConnector#getAttributes', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'getAttributes', [variables.examples.number, variables.examples.number]));
test('OrderEndpointConnector#getProperties', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'getProperties', [variables.examples.number, variables.examples.number]));
test('OrderEndpointConnector#getAttribute', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'getAttribute', [variables.examples.number, variables.examples.number, variables.examples.number]));
test('OrderEndpointConnector#getProperty', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'getProperty', [variables.examples.number, variables.examples.number, variables.examples.number]));
test('OrderEndpointConnector#getItems', t => reusableTesters.testEndpointConnectorCustomMethodWithRequiredParameter(t, instance, 'getItems', variables.examples.number));
test('OrderEndpointConnector#getItem', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'getItem', [variables.examples.number, variables.examples.number]));
test('OrderEndpointConnector#getTotals', t => reusableTesters.testEndpointConnectorCustomMethodWithRequiredParameter(t, instance, 'getTotals', variables.examples.number));
test('OrderEndpointConnector#getTotal', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'getTotal', [variables.examples.number, variables.examples.number]));
test('OrderEndpointConnector#get', t => reusableTesters.testEndpointConnectorGetMethod(t, instance));
test('OrderEndpointConnector#getById', t => reusableTesters.testEndpointConnectorGetByIdMethod(t, instance));
test('OrderEndpointConnector#search', t => reusableTesters.testEndpointConnectorSearchMethod(t, instance));