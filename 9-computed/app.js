new Vue({
    el: "#mainApp",
    data: {
        a: 0,
        b: 0,
        age: 20
    },
    methods: {
        adda: function() {
            return this.a++
        },
        addb: function() {
            return this.b++
        },
        addAToAgeT: function() {
            console.log(1);

            return this.a + this.age
        },
        addBToAgeT: function() {
            console.log(2);

            return this.b + this.age
        },
    },
    computed: {
        addAToAgeC: function() {
            console.log(3);
            
            return this.a + this.age
        },
        addBToAgeC: function() {
            console.log(4);

            return this.b + this.age
        },
    }
});