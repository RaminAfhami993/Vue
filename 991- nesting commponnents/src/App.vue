<template>
  <div id="app">
    <h1> {{ title }} </h1>
    <names></names>
  </div>
</template>

<script>
// local nesting components
import Names from './Names'

export default {
  components: {
    'names': Names
  },
  name: 'app',
  data() {
    return {
      title: "Nesting"
    }
  }
}
</script>

<style>

</style>
