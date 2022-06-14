<template>
  <div>
    <NavigationComponent :username="username" :role="role" />
    <router-view
      class="container"
      :username="username"
      :role="role"
      :user_vehicle="user_vehicle"
    />
  </div>
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
      username: "",
      role: "",
      user_vehicle: "",
    };
  },
  methods: {
    setSessionData() {
      const sessionData = sessionStorage.getItem("sessionData");
      if (sessionData != null) {
        const objSessionData = JSON.parse(sessionData);
        this.username = objSessionData.username;
        this.role = objSessionData.profile;
        this.user_vehicle = objSessionData.user_vehicle;
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
