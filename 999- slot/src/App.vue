<template>
  <div>
    <form-helper>
      <p slot="before">{{ title }}</p>
      <p slot="after">after main text</p>
    </form-helper>
  </div>
</template>

<script>

import FormHelper from "./components/FormHelper.vue"

export default {
  components: {
    "form-helper": FormHelper
  },
  data () {
    return {
      title: "here is a title"
    }
  }
}
</script>

<style>
h1 {
  color: red
}

p {
  color: blue
}
</style>
