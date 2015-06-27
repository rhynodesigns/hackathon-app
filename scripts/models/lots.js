var Lot = Backbone.Model.extend({

    urlRoot: 'http://greenville-parking.com/lots',

});

var LotCollection = Backbone.Collection.extend({

    url: 'http://greenville-parking.com/lots',
    model: Lot,

});

export default {Lot, LotCollection};