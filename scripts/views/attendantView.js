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
        this.carMax = 55;
        this.available=30;
        this.cars = 30;
        this.reserved= 3;

        this.render();
    },

    render: function(){
        this.$el.html(JST['attendant']({
            "cars":this.available,
            'reserved':this.reserved
        }));
    },
    carIn: function(){
        this.available = $('.attendant-spots-left').text();
        this.available = parseInt(this.available) + 1;
        if(this.available > this.carMax) {
            this.available -= 1;
            alert('The lot is full');
        }else if(this.available === this.carMax){
            this.render(this.available);
            alert('The lot is full')

        }else if(this.available > (this.carMax - 3)){
            this.render(this.available);
            alert('There is room for only ' + (this.carMax - this.available) + ' more cars');

        }else this.render(this.available);
    },
    carOut: function(){
        this.available = $('.attendant-spots-left').text();
        this.available = parseInt(this.available) - 1;
        if(this.available >= 0){
            this.render(this.available);
        }else this.available += 1;
    },
    calculateAvailable:function(){
        return this.available = this.cars - this.reserved;
    }

});
export default AttendantView;