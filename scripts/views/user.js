export default Backbone.View.extend({

	template: JST['user'],
	tagName: 'div',
	className: 'user-view',

	events: {

	},

	initialize: function() {
		var coords = [];
		_.map(this.collection.models, function(lot) {
			var url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+lot.get('address')+'&key=AIzaSyAxLmBk-m1DqRj2OhzXzsVr6ECwRZty0X4';
			$.ajax({
				url: url,
				type: 'GET'
			}).then(function(response) {
				var lat = response.results[0].geometry.location.lat;
				var lng = response.results[0].geometry.location.lng;
				coords.push({'lng': lng, 'lat': lat});
				console.log(coords);
			});
		});

		// this.render();
		// console.log('hi');
	},

	render: function() {
		this.$el.html(this.template(this.collection.toJSON()));
	}

});