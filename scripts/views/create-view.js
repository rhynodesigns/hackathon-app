import router from './../router';

export default Backbone.View.extend({
  template: JST.businesscreate,

  events: {
    'submit .business-create-form': 'saveModel'
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
    var lotName = this.$('.business-name-create').val();
    var lotAddress = this.$('.business-address-create').val();
    var lotSpaces = this.$('.business-available-spaces-create').val();
    var lotHours = this.$('.business-hours-create').val();
    var lotPrice = this.$('.business-price-create').val();
    this.collection.create({
      name: lotName,
      address: lotAddress,
      totalSpaces: lotSpaces,
      hours: lotHours,
      price: lotPrice
    });
    console.log(this.collection);
    router.navigate('business', {trigger: true});
  }
});
