<template>
    <div>
        <ul>
            <li v-for="name in names" @click="name.show = !name.show">
                <h1> {{ name.name }} </h1>
                <h3 v-show="name.show"> {{ name.technology }} </h3>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        names: {
            type: Array,
            required: true
        }
    },
    data () {
        return {

        }
    }
}
</script>

<style scoped>
#ninjas{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>
