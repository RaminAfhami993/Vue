<template>
    <footer>
                <p>Copyright 2017 {{ title }}</p>
    </footer>
</template>

<script>
export default {
  data () {
    return {
      title: 'example'
    }
  }
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
