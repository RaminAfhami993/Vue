<template>
  <div>
    <h1>inner h1</h1>
    <ul>
        <li v-for="name in names"> {{ name }} </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
        names: ['ramin', 'mahone', 'bahram']
    }
  }
}
</script>


<style>
  h1 {
    color: purple
  }
</style>

