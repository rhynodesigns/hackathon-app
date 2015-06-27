import UserView from './views/user';
import {LotCollection} from './models/lots';

var Router = Backbone.Model.extend({
  routes: {
    '': 'index',
    'user': 'user',
    'attendant': 'attendant',
    'business': 'business'
  },

  parking: function() {
  	// this.lots = new Backbone.Collection({
  	// 	'address': 'stuff'
  	// });
  	// this.lots.fetch().then(function(response) {
  	// 	this.UserView = new UserView({collection: this.lots});
  	// }.bind(this));
	console.log('hi');
  }

});

var router = new Router();
export default router;