import AttendantView from './views/attendantView';

var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'parking':'parking',
    'attendant': 'attendant',
    'business': 'business'
  },
  attendant: function(){
    $('#app').html(new AttendantView().el);
  }
});

var router = new Router();
export default router;
