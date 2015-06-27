export default Backbone.View.extend({

	template: JST['user'],
	tagName: 'div',
	className: 'user-view',

	events: {
		'submit': 'reserveSpace',
		'click .fa-close': 'hideForm'
	},

	initialize: function() {
		var self = this;
		var coords = [];
		var counter = 0;
		this.listenTo(this.collection, 'update add remove change', this.refresh);
		_.map(this.collection.models, function(lot) {
			var url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+lot.get('address')+'&key=AIzaSyAxLmBk-m1DqRj2OhzXzsVr6ECwRZty0X4';
			$.ajax({
				url: url,
				type: 'GET'
			}).then(function(response) {
				self.render();
				var address = self.collection.models[counter].attributes.address;
				var price = self.collection.models[counter].attributes.price;
				var name = self.collection.models[counter].attributes.name;
				var id = self.collection.models[counter].attributes.id;
				var remaining = self.collection.models[counter].attributes.availableSpaces;
				var totalSpaces = self.collection.models[counter].attributes.totalSpaces;
				counter++;
				var lat = response.results[0].geometry.location.lat;
				var lng = response.results[0].geometry.location.lng;
				coords.push({'lng': lng, 'lat': lat, 'address': address, 'price': price, 'name': name, 'id': id, 'remaining': remaining, 'totalSpaces': totalSpaces});
				var map = new GMaps({
				  div: '#map-canvas',
				  lat: 34.852618,
				  lng: -82.39401
				});
				_.map(coords, function(item) {
					map.addMarker({
					  lat: item.lat,
					  lng: item.lng,
					  title: 'Parking-Lot',
					  click: function(e) {
					  	$('.lot-specifics').fadeToggle();
					    $('.lot-title').html(item.name);
					    $('.lot-address').html(item.address);
					    $('.lot-price').html('$ '+item.price);					  
					    $('.lot-specifics').attr('id', item.id);
					   console.log(item.id);
					  }
					});
				});
			});
		});
	},

	render: function() {
		this.$el.html(this.template(this.collection.toJSON()));
	},

	// reserveSpace: function(e) {
	// 	e.preventDefault();
	// 	var id = $('.lot-specifics').attr('id');
	// 	_.filter(this.collection.models, function(item) {
	// 		if(item.attributes._id == id) {
	// 			var remaining = item.attributes.spacesLeft;
	// 			remaining--;
	// 			item.set('spacesLeft', remaining);
	// 			item.save();
	// 			console.log(item);
	// 		}
	// 	});
	// },

	hideForm: function() {
		$('.lot-specifics').fadeToggle();
	},

	refresh: function() {
		this.collection.fetch().then(function() {
			this.initialize();
		}.bind(this));
	}

});