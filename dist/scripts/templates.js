this["JST"] = this["JST"] || {};
this["JST"]["application"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h1>Hello</h1>\n";
},"useData":true});
this["JST"]["business"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"business-page\">\n  <div class=\"business-page\">\n    <header class=\"menubar\">\n      <img id=\"logo\" src=\"img/greenvilleparking.gif\"></img>\n    <div class=\"menubar\">\n    <ul class=\"menulink\">\n  	  <li class=\"menulink\"><a class=\"menulink\" href=\"/\">Home</a></li>\n  	  <li class=\"menulink\"><a class=\"menulink\" href=\"#\">Attendance</a></li>\n  	  <li class=\"menulink\"><a class=\"menulink\" href=\"#\">Business</a></li>\n  	  <li class=\"menulink\"><a class=\"menulink\" href=\"contact\">Contact</a></li>\n    </ul>\n    </div>\n  </header>\n  <form class=\"business-search\">\n    <input type=\"text\" class=\"company-name-input\" placeholder=\"Enter Company Name\" autocomplete=\"on\" autofocus=\"on\">\n    <input type=\"submit\" class=\"search-input\" value=\"Search\">\n  </form>\n  <a href=\"#/business/create\"><button class=\"create-new-model\">Register New Lot</button></a>\n  <section class=\"company-results\"></section>\n</div>\n";
},"useData":true});
this["JST"]["businesscreate"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"business-page\">\n  <form class=\"business-create-form\">\n    <h3 class=\"business-name-text\">Unique Name for Lot</h3>\n    <input type=\"text\" class=\"business-name-create create-input\" placeholder=\"Lot Name\">\n\n    <h3 class=\"business-address-text\">Lot Address: Be Specific</h3>\n    <input type=\"text\" class=\"business-address-create create-input\" placeholder=\"Ex: 101 North Main Street Greenville, SC 29605\" required=\"required\">\n\n    <h3 class=\"business-spaces-text\">Number of Available Parking Spaces</h3>\n    <input type=\"number\" class=\"business-available-spaces-create create-input\" required=\"required\" placeholder=\"Ex: 24\">\n\n    <h3 class=\"business-hours-text\">Business Hours</h3>\n    <input type=\"text\" class=\"business-hours-create create-input\" placeholder=\"Ex: 8:00am to 6:00pm\" required=\"required\">\n\n    <h3 class=\"business-price-text\">Price per Space</h3>\n    <input type=\"text\" class=\"business-price-create create-input\" required=\"required\"  placeholder=\"Ex: 5.00\">\n\n    <input type=\"submit\" class=\"business-form-submit\" value=\"Add Your Lot\">\n  </form>\n</div>\n";
},"useData":true});
this["JST"]["companylots"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "    <tr class=\"company-results-container\">\n      <td class=\"company-lot-id\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.id : stack1), depth0))
    + "</td>\n      <td class=\"company-lot-name\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.name : stack1), depth0))
    + "</td>\n      <td class=\"company-lot-address\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.address : stack1), depth0))
    + "</td>\n      <td class=\"company-lot-spaces\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.availableSpaces : stack1), depth0))
    + "</td>\n      <td class=\"company-lot-hours\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.hours : stack1), depth0))
    + "</td>\n      <td class=\"company-lot-price\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.price : stack1), depth0))
    + "</td>\n      <td class=\"company-lot-edit-button\">\n        <a href=\"#/business/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.id : stack1), depth0))
    + "/edit\">\n        <button class=\"edit-lot-information\">Edit\n        </button>\n      </a>\n      </td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "  <table class=\"company-results-table\">\n      <th class=\"company-lot-id-header\">Lot ID</th>\n      <th class=\"company-lot-name-header\">Name</th>\n      <th class=\"company-lot-address-header\">Address</th>\n      <th class=\"company-lot-spaces-header\">Spaces</th>\n      <th class=\"company-lot-hours-header\">Hours</th>\n      <th class=\"company-lot-price-header\">Price</th>\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </table>\n";
},"useData":true});
this["JST"]["editform"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"business-page\">\n  <form class=\"company-lot-edit-form\">\n    <input type=\"text\" class=\"lot-name-edit edit-input\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.name : stack1), depth0))
    + "\">\n    <input type=\"text\" class=\"lot-address-edit edit-input\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.address : stack1), depth0))
    + "\">\n    <input type=\"number\" class=\"lot-spaces-edit edit-input\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.availableSpaces : stack1), depth0))
    + "\">\n    <input type=\"text\" class=\"lot-hours-edit edit-input\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.hours : stack1), depth0))
    + "\">\n    <input type=\"text\" class=\"lot-price-edit edit-input\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.price : stack1), depth0))
    + "\">\n    <input type=\"submit\" class=\"edit-save\" value=\"Update this Lot\">\n  </form>\n  <button class=\"company-lot-edit-delete\">Delete this Lot</button>\n</div>\n"
    + alias2(helpers.log.call(depth0,depth0,{"name":"log","hash":{},"data":data}))
    + "\n";
},"useData":true});