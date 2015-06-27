var Lot = Backbone.Model.extend({

    urlRoot: 'http://greenville-parking.com/lots'

});

var LotsCollection = Backbone.Collection.extend({

    url: 'http://greenville-parking.com/lots',
    model: Lot,

});

export default {Lot, LotsCollection};