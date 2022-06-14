<template>
  <div>
    <nav class="site-nav navbar navbar-expand bg-primary navbar-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/"
          >Security Dashboard</router-link
        >
        <div class="navbar-nav ml-auto">
          <router-link
            v-if="role == 'admin'"
            class="nav-item nav-link"
            to="/dashboard"
            >Dashboard</router-link
          >
          <router-link v-if="username" class="nav-item nav-link" to="/reports"
            >Reports</router-link
          >
          <router-link v-if="!username" class="nav-item nav-link" to="/login"
            >Login</router-link
          >
          <router-link
            v-if="role == 'admin'"
            class="nav-item nav-link"
            to="/register"
            >Register User</router-link
          >
          <router-link v-if="username" class="nav-item nav-link" to="/logout"
            >Logout</router-link
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavigationComponent",
  props: ["username", "role"],
};
</script>
