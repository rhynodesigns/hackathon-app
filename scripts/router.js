import BusinessView from './views/business-view';
import CreateView from './views/create-view';
import EditView from './views/edit-view';

import {LotCollection} from './models/business-model';

var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'parking': 'parking',
    'attendant': 'attendant',
    'business': 'business',
    'business/create': 'createForm',
    'business/:id/edit': 'editForm'
  },

  index: function() {
    $('#app').html(JST.application);
  },

  business: function() {
    var lots = new LotCollection([
      {
        id: 1,
        company: 'Park Corp',
        name: 'Hackathon',
        address: '101 North Main',
        availableSpaces: '12',
        hours: '8:00am to 6:00pm',
        price: '5.00'
      },
      {
      id: 2,
      company: 'Park Corp',
      name: 'Hackathon',
      address: '101 North Main',
      availableSpaces: '12',
      hours: '8:00am to 6:00pm',
      price: '5.00'
      },
      {
      id: 3,
      company: 'Lot Corp',
      name: 'Bay Lot',
      address: '101 South Main',
      availableSpaces: '24',
      hours: '8:00am to 6:00pm',
      price: '7.00'
      }
    ]);
    var view = new BusinessView({collection: lots});
    $('#app').html(view.el);
  },

  createForm: function() {
    var lots = new LotCollection();
    var view = new CreateView({collection: lots});
    $('#app').html(view.el);
  },

  editForm: function(id) {
    var lots = new LotCollection([
    {
      id: 1,
      company: 'Park Corp',
      name: 'Hackathon',
      address: '101 North Main',
      availableSpaces: '12',
      hours: '8:00am to 6:00pm',
      price: '5.00'
    },
    {
    id: 2,
    company: 'Park Corp',
    name: 'Hackathon',
    address: '101 North Main',
    availableSpaces: '12',
    hours: '8:00am to 6:00pm',
    price: '5.00'
    },
    {
    id: 3,
    company: 'Lot Corp',
    name: 'Bay Lot',
    address: '101 South Main',
    availableSpaces: '24',
    hours: '8:00am to 6:00pm',
    price: '7.00'
  }
  ]);
    var view = new EditView({
      collection: lots,
      model: id
      });
    $('#app').html(view.el);
  }
});

var router = new Router();
export default router;
