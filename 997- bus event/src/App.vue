<template>
  <div>
    <app-header :title="headerAndFooterTitle"></app-header>
    <app-body :names="names" @firstEvent="changeTitle($event)" :title="title"></app-body>
    <hr />
    <app-body :names="names" @firstEvent="changeTitle($event)" :title="title"></app-body>
    <app-footer :title="headerAndFooterTitle"></app-footer>
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
        title: "this is a test string",
        headerAndFooterTitle: "Vue"
    }
  },
  methods: {
    changeTitle(c) {
            console.log(c)
            let x = this.title.split('');
            x.pop();
            this.title = x.join('');
    }
  },
}
</script>

<style>

</style>
