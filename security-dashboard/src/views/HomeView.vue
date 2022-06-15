<template>
  <div class="mt-3">
    <div v-if="username" class="text-secondary text-center">
      Bienvenido de nuevo
      <span class="font-weight-bold text-info">{{ username }}</span>
    </div>
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-10 col-md-10 col-lg-8 col-xl-7">
          <img src="../assets/Dash.png" alt width="300" height="300" />
          <h4 class="display-6 text-primary mb-2">Security Dashboard</h4>
          <p class="h6">
            Esta aplicación implementa un panel de seguridad donde los
            administradores pueden tener una visión general de la ubicación de
            los vehículos de la empresa, y los conductores pueden realizar un
            seguimiento de su propio progreso y dirigirse a los usuarios
            finales.
          </p>
          <router-link v-if="!username" class="btn btn-primary me-2" to="/login"
            >Login</router-link
          >
          <router-link
            v-if="role == 'admin'"
            class="btn btn-primary me-2"
            to="/dashboard"
            >Dashboard</router-link
          >
          <router-link
            v-if="username"
            class="btn btn-primary me-2"
            to="/reports"
            >Reportes</router-link
          >
          <router-link
            v-if="role == 'admin'"
            class="btn btn-primary me-2"
            to="/register"
            >Registrar Usuario</router-link
          >
          <router-link v-if="username" class="btn btn-primary" to="/logout"
            >Logout</router-link
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
