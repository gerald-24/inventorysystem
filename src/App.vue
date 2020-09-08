<template>
  <v-app>
    <v-main>
      <!-- NavigationBar  -->
      <navigation-bar></navigation-bar>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavigationBar from "./components/NavigationBar";

export default {
  name: "App",

  components: {
    NavigationBar
  },

  data: () => ({
    //
  })
};
</script>
