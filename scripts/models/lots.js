var Lot = Backbone.Model.extend({

	idAttribute: '_id',
	urlRoot: 'http://tiny-lasagna-server.herokuapp.com/collections/lots',
	defaults: {
		'address': '',
		'price': 0,
		'totalSpaces': 0
	}

});

var LotCollection = Backbone.Collection.extend({

	url: 'http://tiny-lasagna-server.herokuapp.com/collections/lots',
	model: Lot,

});

export default {Lot, LotCollection};