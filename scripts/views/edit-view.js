import router from './../router';

export default Backbone.View.extend({
  template: JST.editform,

  events: {
    'submit .company-lot-edit-form': 'saveEdit'
  },

  initialize: function() {
    var modelId = Number(this.model) - 1;
    this.model = this.collection.models[modelId];
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
  },

  saveEdit: function(e) {
    e.preventDefault();
    var lotName = this.$('.lot-name-edit-input').val();
    var lotAddress = this.$('.lot-address-edit-input').val();
    var lotSpaces = this.$('.lot-spaces-edit-input').val();
    var lotHours = this.$('.lot-hours-edit-input').val();
    var lotPrice = this.$('.lot-price-edit-input').val();
    this.model.set({
      name: lotName,
      address: lotAddress,
      availableSpaces: lotSpaces,
      hours: lotHours,
      price: lotPrice
    });
    console.log(this.model);
    router.route('business');
  }
});
