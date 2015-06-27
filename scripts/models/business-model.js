var Lot = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: function() {
    return {
      name: '',
      company: '',
      address: '',
      availableSpaces: '',
      hours: '',
      price: '',
      created_at: new Date()
    };
  }
});

var LotCollection = Backbone.Collection.extend({
  model: Lot,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/lots'
  // url: 'http://greenville-parking.com/companies/1/lots'
});

export default {Lot, LotCollection};
