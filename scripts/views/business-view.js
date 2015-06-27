export default Backbone.View.extend({
  template: JST.business,

  events: {
    'submit .business-form': 'saveModel'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  },

  saveModel: function() {
    //create the model and save to server
  }
});
