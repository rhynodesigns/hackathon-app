/**
 * Created by firewaterjoe on 6/26/15.
 */
var AttendantView =Backbone.View.extend({
    template: JST.attendant,
    className: 'attendant-container',
    events: {
        'click .attendant-car-in': 'carIn',
        'click .attendant-car-out': 'carOut'
    },
    initialize: function(){
        this.cars = 30;
        this.render();
    },

    render: function(){
        this.$el.html(JST['attendant']({
            "cars":this.cars
        }));
    },
    carIn: function(){
        this.cars = $('.attendant-spots-left').text();
        this.cars = parseInt(this.cars) + 1;
        this.render(this.cars);
    },
    carOut: function(){
        this.cars = $('.attendant-spots-left').text();
        this.cars = parseInt(this.cars) - 1;
        this.render(this.cars);

    }

});
export default AttendantView;