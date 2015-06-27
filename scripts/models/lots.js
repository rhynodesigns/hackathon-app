var Lot = Backbone.Model.extend({

	defaults: {
		'address': '',
		'price': 0,
		'totalSpaces': 0
	}

});

var LotCollection = Backbone.Collection.extend({

	model: Lot,

});

export default {Lot, LotCollection};