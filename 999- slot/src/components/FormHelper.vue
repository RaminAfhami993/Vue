<template>
    <div>
        <!--
        <slot></slot>
        <h1>
            Form Helper main text
        </h1>
        <slot></slot>
        -->

        <slot name="before"></slot>
        <h1>
            Form Helper main text
        </h1>
        <slot name="after"></slot>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
p {
  color: green
}
</style>

