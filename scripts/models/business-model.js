var Lot = Backbone.Model.extend({
  defaults: function() {
    return {
      name: '',
      address: '',
      availableSpaces: '',
      hours: '',
      price: ''
    };
  }
});

var LotCollection = Backbone.Collection.extend({
  model: Lot
  //url: 'greenville-parking.com'
});

export default {Lot, LotCollection};
