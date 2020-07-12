new Vue({
    el: "#mainApp",
    data: {
        name: "Ramin"
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + " " + this.name
        }
    }
});