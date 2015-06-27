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
  	this.lots = new LotCollection();
   //    {'company': 'Best Parking EVAR!',
   //    'id': 1,
   //    'title': 'A parking lot',
   //    'address': '101 North Main Street Greenville, SC',
   //    'price': 5,
   //    'totalSpaces': 50,
   //    'spacesLeft': 45},
   //    {'company': 'Parking Company, Inc.',
   //    'id': 2,
   //    'title': 'Another parking lot',
   //    'address': '131 North Main Street Greenville, SC',
   //    'price': 4,
   //    'totalSpaces': 30,
   //    'spacesLeft': 15},
   //    ]
  	// );
  	this.lots.fetch().then(function(response) {
  		this.UserView = new UserView({collection: this.lots});
  		$('#app').html(this.UserView.el);
  	}.bind(this));
	// console.log('hi');
  }

});

var router = new Router();
export default router;