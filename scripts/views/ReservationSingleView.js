/**
 * Created by firewaterjoe on 6/27/15.
 */
export default Backbone.View.extend({
    template: JST.attendantReservationSingle,
    tagName: 'li',
    initialize:function(){
        this.render();
    },
    render:function(){
        console.log('final ');
        //this.$el.html('<h1>dude</h1>')
        this.$el.html(this.template(this.model));
    }
});
