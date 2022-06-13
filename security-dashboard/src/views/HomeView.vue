<template>
  <div class="mt-3">
    <div v-if="username" class="text-secondary text-center">
      Welcome back
      <span class="font-weight-bold text-info">{{ username }}</span>
    </div>
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-10 col-md-10 col-lg-8 col-xl-7">
          <h4 class="display-4 text-primary mb-2">Security Dashboard</h4>
          <p class="lead">
            This simple app implements a security dashboard were admins can have
            a general overview of the location of enterprise vehicles, and
            drivers can track their own progress and be directed to end users.
          </p>
          <router-link v-if="!username" class="btn btn-primary me-2" to="/login"
            >Log In</router-link
          >
          <router-link
            v-if="role == 'admin'"
            class="btn btn-primary me-2"
            to="/register"
            >Register User</router-link
          >
          <router-link
            v-if="role == 'admin'"
            class="btn btn-primary me-2"
            to="/dashboard"
            >Dashboard</router-link
          >
          <router-link v-if="username" class="btn btn-primary" to="/logout"
            >Log Out</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  props: ["username", "role"],
};
</script>
