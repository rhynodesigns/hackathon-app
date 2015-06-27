/**
 * Created by firewaterjoe on 6/27/15.
 */
export default Backbone.View.extend({
    template: JST.attendantReservationSingle,
    tagName: 'li',
    className: 'attendant-list-item',
    events: {
        'click .attendant-list-item': 'checkReservation'
    },

    initialize:function(){

        this.render();
    },
    render:function(){
        console.log('what',this.model);
        this.$el.html(this.template(this.model.toJSON()));
    },
    checkReservation: function(){
        console.log('hi');
    }

});
