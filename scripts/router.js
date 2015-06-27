import UserView from './views/user';
import {LotCollection} from './models/lots';

var Router = Backbone.Router.extend({
  routes: {
    '': 'parking',
    'parking': 'parking',
    'attendant': 'attendant',
    'business': 'business'
  },

  parking: function() {
  	this.lots = new Backbone.Collection({
  		'address': '101 North Main Street Greenville, SC'
  	});
  	// this.lots.fetch().then(function(response) {
  		this.UserView = new UserView({collection: this.lots});
  		$('#app').html(this.UserView.el);
  	// }.bind(this));
	// console.log('hi');
  }

});

var router = new Router();
export default router;