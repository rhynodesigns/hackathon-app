export default Backbone.View.extend({

	template: JST['user'],
	tagName: 'div',
	className: 'user-view',

	events: {
		'click .lot-reservation-action': 'reserveSpot'
	},

	initialize: function() {
		var self = this;
		var coords = [];
		_.map(this.collection.models, function(lot) {
			var url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+lot.get('address')+'&key=AIzaSyAxLmBk-m1DqRj2OhzXzsVr6ECwRZty0X4';
			$.ajax({
				url: url,
				type: 'GET'
			}).then(function(response) {
				self.render();
				var lat = response.results[0].geometry.location.lat;
				var lng = response.results[0].geometry.location.lng;
				coords.push({'lng': lng, 'lat': lat});
				// url = GMaps.staticMapURL({
				//   size: [610, 300],
				//   lat: 34.852618,
				//   lng: -82.39401,
				//   markers: [
				//     {lat: lat, lng: lng},
				//   ]
				// });

				// $('<img/>').attr('src', url)
				//   .appendTo('#map-canvas');
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
					    alert(item.lat);
					  }
					});
				});
			});
		});
	},

	render: function() {
		this.$el.html(this.template(this.collection.toJSON()));
	},

	reserveSpot: function() {
		console.log(this.collection);
	}

});