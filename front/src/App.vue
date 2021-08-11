<template>
  <div id="app">
    <Login/>
  </div>
</template>

<script>
import Login from "@/components/Login";

export default {
  name: 'App',
  components: {
    Login,
  }
}
</script>

<style>
@import url('http://fonts.googleapis.com/css?family=Lato:400,700');
#app {
  font-family:  Lato, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
