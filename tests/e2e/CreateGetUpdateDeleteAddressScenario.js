import addressFixture from './../../tools/tests/fixtures/address.json';

const invoker = client => client.addresses
  .create(addressFixture)
  .then(address => address.id)
  .then(id => client.addresses.getById(id))
  .then(address => client.addresses.update(address.id, { firstname: 'Bob' }))
  .then(() => client.addresses.search('Bob'))
  .then(addresses => addresses[0].id)
  .then(id => client.addresses.delete(id))
  .then(() => client);

export default invoker;