var Lot = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: function() {
    return {
      name: '',
      company: '',
      address: '',
      totalSpaces: '',
      hours: '',
      price: '',
      lattitude: '34.8628',
      longitude: '-82.3915',
      created_at: new Date()
    };
  }
});

var LotCollection = Backbone.Collection.extend({
  model: Lot,
  url: 'http://greenville-parking.com/companies/1/lots'
});

export default {Lot, LotCollection};
