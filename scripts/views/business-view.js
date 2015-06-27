import CompanyLotsView from './company-lot-view';
import router from './../router';

export default Backbone.View.extend({
  template: JST.business,

  events: {
    'submit .business-search': 'searchCompany'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  },

  searchCompany: function(e) {
    e.preventDefault();
    var companyName = this.$('.company-name-input').val();
    var companyLots = this.collection.where({company: companyName});
    var companyLotsView = new CompanyLotsView({collection: companyLots});
    $('.company-results').html(companyLotsView.el);
  }
});
