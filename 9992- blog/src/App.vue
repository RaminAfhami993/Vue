<template>
  <div> 
    <keep-alive>
        <component :is="component"></component>
    </keep-alive>

    <button @click="component = 'add-blog'"> add new blog </button>
    <button @click="component = 'all-blogs'"> all blogs </button>
  </div> 
</template>

<script>

import AddBlog from './components/AddBlog.vue';
import AllBlogs from './components/AllBlogs.vue';

export default {
  components: {
    "add-blog": AddBlog,
    "all-blogs": AllBlogs
  },
  data () {
    return {
      component: 'all-blogs'
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
