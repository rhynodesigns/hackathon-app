export default Backbone.View.extend({

	template: JST['user'],
	tagName: 'div',
	className: 'user-view',

	events: {

	},

	initialize: function() {
		this.render();
		console.log('hi');
	},

	render: function() {
		this.$el.html(this.template(this.collection.toJSON()));
	}

});