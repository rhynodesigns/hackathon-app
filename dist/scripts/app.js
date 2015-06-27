require.register("main", function(exports, require, module){
  'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

(function () {
  'use strict';

  $(document).ready(function () {
    Backbone.history.start();
  });
})();
  
});

require.register("router", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _viewsBusinessView = require('./views/business-view');

var _viewsBusinessView2 = _interopRequireDefault(_viewsBusinessView);

var _viewsCreateView = require('./views/create-view');

var _viewsCreateView2 = _interopRequireDefault(_viewsCreateView);

var _viewsEditView = require('./views/edit-view');

var _viewsEditView2 = _interopRequireDefault(_viewsEditView);

var _viewsCompanyLotView = require('./views/company-lot-view');

var _viewsCompanyLotView2 = _interopRequireDefault(_viewsCompanyLotView);

var _modelsBusinessModel = require('./models/business-model');

var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'parking': 'parking',
    'attendant': 'attendant',
    'business': 'business',
    'business/company/:company_id/lots': 'displayCompanyLots',
    'business/create': 'createForm',
    'business/:id/edit': 'editForm'
  },

  index: function index() {
    $('#app').html(JST.application);
  },

  business: function business() {
    var lots = new _modelsBusinessModel.LotCollection([{
      id: 1,
      company: 'Park Corp',
      company_id: 1,
      name: 'Hackathon',
      address: '101 North Main',
      availableSpaces: '12',
      hours: '8:00am to 6:00pm',
      price: '5.00'
    }, {
      id: 2,
      company: 'Park Corp',
      company_id: 1,
      name: 'Hackathon',
      address: '101 North Main',
      availableSpaces: '12',
      hours: '8:00am to 6:00pm',
      price: '5.00'
    }, {
      id: 3,
      company: 'Lot Corp',
      company_id: 2,
      name: 'Bay Lot',
      address: '101 South Main',
      availableSpaces: '24',
      hours: '8:00am to 6:00pm',
      price: '7.00'
    }]);
    var view = new _viewsBusinessView2['default']({ collection: lots });
    $('#app').html(view.el);
  },

  displayCompanyLots: function displayCompanyLots(id) {
    var lots = new _modelsBusinessModel.LotCollection([{
      id: 1,
      company: 'Park Corp',
      company_id: 1,
      name: 'Hackathon',
      address: '101 North Main',
      availableSpaces: '12',
      hours: '8:00am to 6:00pm',
      price: '5.00'
    }, {
      id: 2,
      company: 'Park Corp',
      company_id: 1,
      name: 'Hackathon',
      address: '101 North Main',
      availableSpaces: '12',
      hours: '8:00am to 6:00pm',
      price: '5.00'
    }, {
      id: 3,
      company: 'Lot Corp',
      company_id: 2,
      name: 'Bay Lot',
      address: '101 South Main',
      availableSpaces: '24',
      hours: '8:00am to 6:00pm',
      price: '7.00'
    }]);
    var view = new _viewsBusinessView2['default']({ collection: lots });
    $('#app').html(view.el);
  },

  createForm: function createForm() {
    var lots = new _modelsBusinessModel.LotCollection();
    var view = new _viewsCreateView2['default']({ collection: lots });
    $('#app').html(view.el);
  },

  editForm: function editForm(id) {
    var lots = new _modelsBusinessModel.LotCollection([{
      id: 1,
      company: 'Park Corp',
      name: 'Hackathon',
      address: '101 North Main',
      availableSpaces: '12',
      hours: '8:00am to 6:00pm',
      price: '5.00'
    }, {
      id: 2,
      company: 'Park Corp',
      name: 'Hackathon',
      address: '101 North Main',
      availableSpaces: '12',
      hours: '8:00am to 6:00pm',
      price: '5.00'
    }, {
      id: 3,
      company: 'Lot Corp',
      name: 'Bay Lot',
      address: '101 South Main',
      availableSpaces: '24',
      hours: '8:00am to 6:00pm',
      price: '7.00'
    }]);
    var view = new _viewsEditView2['default']({
      collection: lots,
      model: id
    });
    $('#app').html(view.el);
  }
});

var router = new Router();
exports['default'] = router;
module.exports = exports['default'];
  
});

require.register("models/business-model", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Lot = Backbone.Model.extend({
  defaults: function defaults() {
    return {
      name: '',
      address: '',
      availableSpaces: '',
      hours: '',
      price: '',
      created_at: new Date()
    };
  }
});

var LotCollection = Backbone.Collection.extend({
  model: Lot,
  url: 'http://greenville-parking.com/companies/1/lots'
});

exports['default'] = { Lot: Lot, LotCollection: LotCollection };
module.exports = exports['default'];
  
});

require.register("views/business-view", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _companyLotView = require('./company-lot-view');

var _companyLotView2 = _interopRequireDefault(_companyLotView);

var _router = require('./../router');

var _router2 = _interopRequireDefault(_router);

exports['default'] = Backbone.View.extend({
  template: JST.business,

  events: {
    'submit .business-search': 'searchCompany'
  },

  initialize: function initialize() {
    this.render();
  },

  render: function render() {
    this.$el.html(this.template());
  },

  searchCompany: function searchCompany(e) {
    e.preventDefault();
    var companyName = this.$('.company-name-input').val();
    var companyLots = this.collection.where({ company: companyName });
    var companyLotsView = new _companyLotView2['default']({ collection: companyLots });
    $('.company-results').html(companyLotsView.el);
  }
});
module.exports = exports['default'];
  
});

require.register("views/company-lot-view", function(exports, require, module){
  "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Backbone.View.extend({
  template: JST.companylots,

  initialize: function initialize() {
    this.render();
  },

  render: function render() {
    this.$el.html(this.template(this.collection));
  }
});
module.exports = exports["default"];
  
});

require.register("views/create-view", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _router = require('./../router');

var _router2 = _interopRequireDefault(_router);

exports['default'] = Backbone.View.extend({
  template: JST.businesscreate,

  events: {
    'submit .business-create-form': 'saveModel'
  },

  initialize: function initialize() {
    console.log(this.collection);
    this.render();
  },

  render: function render() {
    this.$el.html(this.template());
  },

  saveModel: function saveModel(e) {
    e.preventDefault();
    var lotName = this.$('.business-name-create').val();
    var lotAddress = this.$('.business-address-create').val();
    var lotSpaces = this.$('.business-available-spaces-create').val();
    var lotHours = this.$('.business-hours-create').val();
    var lotPrice = this.$('.business-price-create').val();
    this.collection.create({
      name: lotName,
      address: lotAddress,
      availableSpaces: lotSpaces,
      hours: lotHours,
      price: lotPrice
    });
    console.log(this.collection);
    _router2['default'].navigate('business', { trigger: true });
  }
});
module.exports = exports['default'];
  
});

require.register("views/edit-view", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _router = require('./../router');

var _router2 = _interopRequireDefault(_router);

exports['default'] = Backbone.View.extend({
  template: JST.editform,

  events: {
    'submit .company-lot-edit-form': 'saveEdit',
    'click .company-lot-edit-delete': 'deleteLot'
  },

  initialize: function initialize() {
    var modelId = Number(this.model) - 1;
    this.model = this.collection.models[modelId];
    this.render();
  },

  render: function render() {
    this.$el.html(this.template(this.model));
  },

  saveEdit: function saveEdit(e) {
    e.preventDefault();
    var lotName = this.$('.lot-name-edit').val();
    var lotAddress = this.$('.lot-address-edit').val();
    var lotSpaces = this.$('.lot-spaces-edit').val();
    var lotHours = this.$('.lot-hours-edit').val();
    var lotPrice = this.$('.lot-price-edit').val();
    this.model.set({
      name: lotName,
      address: lotAddress,
      availableSpaces: lotSpaces,
      hours: lotHours,
      price: lotPrice
    });
    console.log(this.model);
    _router2['default'].navigate('business', { trigger: true });
  },

  deleteLot: function deleteLot(e) {
    e.preventDefault();
    var answer = confirm('Are you sure you want to delete this lot? This is irreversible');
    if (answer) {
      this.model.destroy();
      _router2['default'].navigate('business', { trigger: true });
    }
  }
});
module.exports = exports['default'];
  
});

//# sourceMappingURL=app.js.map