import router from './../router';

export default Backbone.View.extend({
  template: JST.editform,

  events: {
    'submit .company-lot-edit-form': 'saveEdit',
    'click .company-lot-edit-delete': 'deleteLot'
  },

  initialize: function() {
    console.log(this.collection);
    var modelId = this.model;
    var collection = this.collection;
    var list = _.filter(collection, function(object) {
      if(object._id === modelId) {
        return object;
      }
    });
    this.model = list;
    // var modelId = Number(this.model) - 1;
    // this.model = this.collection.models[modelId];
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
  },

  saveEdit: function(e) {
    e.preventDefault();
    var lotName = this.$('.lot-name-edit').val();
    var lotAddress = this.$('.lot-address-edit').val();
    var lotSpaces = this.$('.lot-spaces-edit').val();
    var lotHours = this.$('.lot-hours-edit').val();
    var lotPrice = this.$('.lot-price-edit').val();
    this.collection.create({
      name: lotName,
      address: lotAddress,
      availableSpaces: lotSpaces,
      hours: lotHours,
      price: lotPrice
    });
    console.log(this.model);
    router.navigate('business', {trigger: true});
  },

  deleteLot: function(e) {
    e.preventDefault();
    var answer = confirm("Are you sure you want to delete this lot? This is irreversible");
    if(answer) {
      this.collection.destroy(this.model);
      router.navigate('business', {trigger: true});
    }
  }
});
