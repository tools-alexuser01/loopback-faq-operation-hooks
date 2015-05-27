module.exports = function(CoffeeShop) {

  // afterInitialize is a model hook which is still used in loopback
  // http://docs.strongloop.com/display/public/LB/Model+hooks#Modelhooks-afterInitialize
  CoffeeShop.afterInitialize = function() {
    console.log('> afterInitialize triggered');
  };

  // the rest are all operation hooks - http://docs.strongloop.com/display/public/LB/Operation+hooks
  CoffeeShop.observe('before save', function(ctx, next) {
    console.log('> before save triggered:', ctx.Model.modelName, (ctx.instance || ctx.data));
    next();
  });

  CoffeeShop.observe('after save', function(ctx, next) {
    console.log('> after save triggered:', ctx.Model.modelName, ctx.instance);
    next();
  });

  CoffeeShop.observe('before delete', function(ctx, next) {
    console.log('> before delete triggered:', ctx.Model.modelName, ctx.instance);
    next();
  });

  CoffeeShop.observe('after delete', function(ctx, next) {
    console.log('> after delete triggered:', ctx.Model.modelName, (ctx.instance || ctx.where));
    next();
  });

};
