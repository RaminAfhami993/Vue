<template>
  <div>
    <keep-alive>
        <component :is="component"></component>
    </keep-alive>
    <button @click="component = 'loginForm'">show loginForm</button>
    <button @click="component = 'messageForm'">show messageForm</button>
  </div>
</template>

<script>
// Imports
import LoginForm from "./components/loginForm.vue"
import MessageForm from "./components/messageForm.vue"

export default {
  components: {
    "loginForm": LoginForm,
    "messageForm": MessageForm
  },
  data () {
    return {
      component: "loginForm"
    }
  }
}
</script>

<style>

</style>
