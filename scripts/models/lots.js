var Lot = Backbone.Model.extend({
 defaults: function() {
   return {
     name: '',
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
 url: 'http://greenville-parking.com/companies/1/lots'
});

export default {Lot, LotCollection};