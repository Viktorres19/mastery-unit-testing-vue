<template>
  <button v-show="loggedIn">Logout</button> <!--output 1.2. we not display the button -->
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      loggedIn: false // input 1.1. where data false
    }
  }
}
</script>

<style scoped>

</style>