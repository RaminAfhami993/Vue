<template>
  <div>
    <app-header></app-header>
    <app-body :names="names" :title="title"></app-body>
    <hr />
    <app-body :names="names" :title="title"></app-body>
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
        names: [
            {name: 'Ramin', technology: 'Node', show: false},
            {name: 'Mahone', technology: 'CSS', show: false},
            {name: 'Pedram', technology: 'JS', show: false},
            {name: 'Arsham', technology: 'HTML', show: false}
        ],
        title: "this is a test string"
    }
  }
}
</script>

<style>

</style>
