export default Backbone.View.extend({
  template: JST.businesscreate,

  events: {
    'submit .business-form': 'saveModel'
  },

  initialize: function() {
    console.log(this.collection);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  },

  saveModel: function(e) {
    e.preventDefault();
    var lotName = this.$('.business-name-input').val();
    var lotAddress = this.$('.business-address-input').val();
    var lotSpaces = this.$('.business-available-spaces-input').val();
    var lotHours = this.$('.business-hours-input').val();
    var lotPrice = this.$('.business-price-input').val();
    this.collection.add({
      name: lotName,
      address: lotAddress,
      availableSpaces: lotSpaces,
      hours: lotHours,
      price: lotPrice
    });
    console.log(this.collection);
  }
});
