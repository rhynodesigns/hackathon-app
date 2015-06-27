export default Backbone.View.extend({

	template: JST['confirmation'],
	tagName: 'div',
	className: 'confirmation-container',

	events: {

	},

	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html(this.template(this.collection.toJSON()));
	}

});