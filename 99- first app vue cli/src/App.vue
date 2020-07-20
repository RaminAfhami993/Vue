<template>
  <div id="app">
    <h1> {{ title }} </h1>
    <p> {{ greeting() }} </p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      title: "VUE CLI"
    }
  },
  methods: {
    greeting() {
      return `hello from ${this.title}`
    }
   },
}
</script>

<style>

</style>
