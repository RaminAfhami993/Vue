<template>
    <footer>
        <p @click="changetitle">Copyright 2017 {{ copytitle }}</p>
    </footer>
</template>

<script>

import { bus } from "../main"

export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      copytitle: this.title
    }
  },
  methods: {
    changetitle() {
      this.copytitle = 'changed title here in footer'
      bus.$emit('change', 'new title from footer')
    }
  },
}
</script>

<style scoped>
    footer {
        background: #222;
        padding: 6px;
    }
    p {
        color: lightgreen;
        text-align: center;
    }
</style>
