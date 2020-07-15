Vue.component('greeting', {
    template: `
        <p>hello, I'm {{ name }} <button @click="changeName">Change name</button></p>
    `,
    data: function()  {
        return {
            name: "Ramin"
        }
    },
    methods: {
        changeName: function() {
            this.name = "Arman"
        }
    }
})


const app1 = new Vue({
    el: "#app1",
});


const app2 = new Vue({
    el: "#app2",
});

