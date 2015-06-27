import AttendantView from './views/attendantView';

var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'parking':'parking',
    'attendant': 'attendant',
    'business': 'business',
    'attendant/reservations': 'checkReservations'
  },
  attendant: function(){
    $('#app').html(new AttendantView().el);
  },
  checkReservations: function(){
    $('#app').html('<h1>hello</h1>')
  }
});

var router = new Router();
export default router;
