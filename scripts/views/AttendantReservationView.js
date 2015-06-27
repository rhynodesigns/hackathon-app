/**
 * Created by firewaterjoe on 6/27/15.
 */
import ReservationSingleView from './ReservationSingleView';
export default Backbone.View.extend({
    template: JST.attendantReservations,
    initialize: function(){
        console.log(this.collection);
        this.render();
    },
    render:function(){
        this.$el.html(this.template());
        this.renderChildren();
    },
    renderChildren: function(){
        _.invoke(this.children || [], 'remove');

        this.children = this.collection.map(function(child) {
            //console.log('child ',child);
            var view = new ReservationSingleView({
                model: child
            });

            this.$('.reservation-list').append(view.el);
            return view;
        }.bind(this));

        return this;
    },

    remove: function(){
        _.invoke(this.children || [], 'remove');
        Backbone.View.prototype.remove.apply(this, arguments);
    }
})