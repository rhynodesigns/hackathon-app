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
  model: Business,
  url: 'greenville-parking.com'
});
