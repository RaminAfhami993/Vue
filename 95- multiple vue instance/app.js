const app1 = new Vue({
    el: "#app1",
    data: {
        title: 'app1'
    },
    computed: {
        greet: function() {
            return "Hi from app1 computed prop"
        }
    }
});


const app2 = new Vue({
    el: "#app2",
    data: {
        title: 'app2'
    },
    methods: {
        changeApp1Title: function() {
            app1.title = "set app1 title from app2"
        }
    },
    computed: {
        greet: function() {
            return "Hi from app2 computed prop"
        }
    }
});

app2.title = 'set app2 title from outside'