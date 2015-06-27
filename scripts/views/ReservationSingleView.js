/**
 * Created by firewaterjoe on 6/27/15.
 */
export default Backbone.View.extend({
    template: JST.attendantReservationSingle,
    tagName: 'li',
    className: 'attendant-list-item',
    initialize:function(){
        console.log(this.model.toJSON());
        this.render();
    },
    render:function(){
        this.$el.html(this.template(this.model.toJSON()));
    }
});
