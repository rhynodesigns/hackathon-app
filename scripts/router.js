import UserView from './views/user';
import {LotCollection} from './models/lots';

var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'parking': 'parking',
    'attendant': 'attendant',
    'business': 'business'
  },

  parking: function() {
  	this.lots = new Backbone.Collection([
      {'address': '101 North Main Street Greenville, SC',
      'price': 5},
      {'address': '131 North Main Street Greenville, SC',
      'price': 4},
      ]
  	);
  	// this.lots.fetch().then(function(response) {
  		this.UserView = new UserView({collection: this.lots});
  		$('#app').html(this.UserView.el);
  	// }.bind(this));
	// console.log('hi');
  }

});

var router = new Router();
export default router;