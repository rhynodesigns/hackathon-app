

var Router = Backbone.Model.extend({
  routes: {
    '': 'index',
    'attendant': 'attendant',
    'business': 'business'
  }
});

var router = new Router();
export default router;
