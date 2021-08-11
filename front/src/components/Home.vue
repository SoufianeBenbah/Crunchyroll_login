<template>
  <v-card
      color="grey lighten-4"
      tile
  >
    <v-toolbar dense color="#42b983">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Toolbar</v-toolbar-title>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
