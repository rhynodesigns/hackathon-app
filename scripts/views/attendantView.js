/**
 * Created by firewaterjoe on 6/26/15.
 */
var AttendantView =Backbone.View.extend({
    template: JST.attendant,
    className: 'container',
    events: {
        'submit': 'postMessage'
    },
    initialize: function(){
        this.render();
    },

    render: function(){
        this.$el.html(this.template());
    }

});
export default AttendantView;