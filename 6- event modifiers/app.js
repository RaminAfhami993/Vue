new Vue({
    el: "#mainApp",
    data: {
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        add: function(units) {
            this.counter += units;
        }, 
        subtract: function(units) {
            this.counter -= units;
        },
        logCordinates: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
});