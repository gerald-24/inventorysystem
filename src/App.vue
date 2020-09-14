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
import notify from "./notify";

export default {
  name: "App",

  components: {
    NavigationBar
  },
  created() {
    notify.test();
  },

  data: () => ({
    //
  })
};
</script>
