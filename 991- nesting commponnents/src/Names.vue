<template>
  <div id="app">
    <ul>
        <li v-for="name in names"> {{ name }} </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
        names: ['ramin', 'mahone', 'bahram']
    }
  }
}
</script>

