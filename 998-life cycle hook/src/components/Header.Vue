<template>
    <header>
     <h1>
        header {{ copytitle }}
     </h1>
    </header>
</template>

<script>

import { bus } from "../main";

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
  created() {
    bus.$on('change', (data) => {
      this.copytitle = data;
    })
  },
}
</script>

<style scoped>
    header {
        background: lightgreen;
        padding: 10px;
    }
    h1 {
        color: #222;
        text-align: center;
    }
</style>
