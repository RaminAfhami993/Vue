const app1 = new Vue({
    el: "#app",
    data: {
        output: "nothing yet"
    },
    methods: {
        getRefs: function() {
            console.log(this.$refs);
            this.output = this.$refs.name.value
        }
    }
});


