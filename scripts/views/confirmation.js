export default Backbone.View.extend({

	template: JST['confirmation'],
	tagName: 'div',
	className: 'confirmation-container',

	events: {
		'click ': 'reserveSpace',
	},

	initialize: function(options) {
		this.render();
		this.data = options.data;
		console.log(this);
		// this.listenTo(this.collection, 'add', this.confirm);
	},

	render: function() {
		this.$el.html(this.template(this.collection.toJSON()));
	},

	reserveSpace: function() {
		var id = localStorage.getItem('id');
		_.filter(this.data.models, function(item) {
			if(item.attributes.id == id) {
				var remaining = item.attributes.availableSpaces;
				remaining--;
				item.set('availableSpaces', remaining);
				item.save();
				console.log(item);
			}
		});
		this.collection.create({}, {
			error: function(model, response) {},
			success: function(model, response) {
				$('.blur').html(response.reservation_key);
			}
		})
	}

});