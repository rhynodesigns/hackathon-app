import AttendantView from './views/AttendantView';
import AttendantReservationView from './views/AttendantReservationView'
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
    this.reservations = new Backbone.Collection();
    this.reservations.add([
      {id: 1, name: 'Johnson'},
      {id: 2, name: 'Hackett'}
    ]);
    console.log(this.reservations);
    $('#app').html(new AttendantReservationView({collection:this.reservations}).el);
  }
});

var router = new Router();
export default router;
