new Vue({
    el: "#mainApp",
    data: {
        available: true,
        padd: true
    },
    methods: {

    },
    computed: {
        compClass: function() {
            return {
                available: this.available,
                padd: this.padd
            }
        }
    }
});