/**
 * Created by firewaterjoe on 6/26/15.
 */
var Reservation = Backbone.Model.extend({

});

var ReservationCollection = Backbone.Collection.extend({
    model: Reservation,
    url:'http://greenville-parking.com/reservations'
}
);
export default {ReservationCollection,Reservation};