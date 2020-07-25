<template>
    <add-blog></add-blog>
</template>

<script>

import AddBlog from './components/AddBlog.vue'
export default {
  components: {
    "add-blog": AddBlog
  },
  data () {
    return {
    }
  }
}
</script>

<style>
body {
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
