<template>
  <NavigationComponent />
  <router-view class="container" :userName="userName" />
</template>

<script>
import NavigationComponent from "./components/NavigationComponent.vue";

export default {
  name: "App",
  components: {
    NavigationComponent,
  },
  data() {
    return {
      userName: "",
      userType: "",
    };
  },
  methods: {
    setSessionData() {
      const sessionData = sessionStorage.getItem("sessionData");
      if (sessionData != null) {
        const objSessionData = JSON.parse(sessionData);
        this.userName = objSessionData.userName;
        this.userType = objSessionData.profile;
      }
    },
  },
  mounted() {
    this.setSessionData();
  },
};
</script>

<style lang="scss">
$primary: #05b2dd;

@import "node_modules/bootstrap/scss/bootstrap.scss";
</style>
