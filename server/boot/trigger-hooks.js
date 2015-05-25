var async = require('async');

module.exports = function(app, cb) {
  async.waterfall([
    async.apply(createModel),
    async.apply(updateModel),
    async.apply(destroyModel)
  ], cb);

  function createModel(cb) {
    console.log('\n--- Creating a model');
    app.models.CoffeeShop.create({
      name: 'Bel Cafe',
      city: 'San Mateo'
    }, cb);
  }

  function updateModel(coffeeShop, cb) {
    console.log('\n--- Updating a model');
    coffeeShop.updateAttribute('city', 'Vancouver', cb);
  }

  function destroyModel(coffeeShop, cb) {
    console.log('\n--- Destroying a model');
    coffeeShop.destroy(cb);
  }
};
