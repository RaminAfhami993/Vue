<template>
  <div>
    <app-header></app-header>
    <app-body></app-body>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import Names from './components/names.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-body': Names
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
