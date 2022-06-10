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

.statsContainer {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

/* On mouse-over, add a deeper shadow */
.statsContainer:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
@import "node_modules/bootstrap/scss/bootstrap.scss";
</style>
