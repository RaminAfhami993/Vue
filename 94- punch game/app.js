new Vue({
    el: "#mainApp",
    data: {
        health: 100,
        ended: false
    },
    methods: {
        restart: function() {
            this.health = 100;
            this.ended = false
        },
        punch: function() {
            this.health -= 10;
            if ( this.health === 0) this.ended = true;
        }
    }
});
