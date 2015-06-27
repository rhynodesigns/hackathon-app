export default Backbone.View.extend({

	template: JST['confirmation'],
	tagName: 'div',
	className: 'confirmation-container',

	events: {
		'click ': 'reserveSpace',
	},

	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html(this.template(this.collection.toJSON()));
	},

	reserveSpace: function() {
		var id = $('.lot-specifics').attr('id');
		_.filter(this.collection.models, function(item) {
			if(item.attributes.id == id) {
				var remaining = item.attributes.availableSpaces;
				remaining--;
				item.set('availableSpaces', remaining);
				item.save();
				console.log(item);
			}
		});
	}

});