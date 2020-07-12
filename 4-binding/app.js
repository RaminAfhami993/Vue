new Vue({
    el: "#mainApp",
    data: {
        name: "Ramin",
        link: "http://google.com",
        htmlLink: "<a href='https://google.com'>Click on this text</a>"
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + " " + this.name
        }
    }
});