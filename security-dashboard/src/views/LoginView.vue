<template>


  
  <div class="mt-3">
    
    <body class="text-center">
      <img src= "../assets/Dash.png" alt width="100" height="100"/>
    <h1 class="h3 mb-3 font-weight-normal">Iniciar sesión</h1>
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-2">
        <label class="form-label text-end">Usuario:</label>
      </div>
      <div class="col-sm-4 text-start">
        <input
          type="text"
          class="form-control"
          placeholder="Usuario"
          v-model="user.username"
        />
      </div>
      <div class="col-sm-3"></div>
    </div>
    <br />
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-2">
        <label class="form-label text-end">Contraseña:</label>
      </div>
      <div class="col-sm-4 text-start">
        <input
          type="password"
          class="form-control"
          placeholder="Contraseña"
          v-model="user.password"
          @keyup.enter="login()"
        />
      </div>
      <div class="col-sm-3"></div>
    </div>
    <br />
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-6 text-center">
        <button class="btn btn-outline-primary" @click="login()">Iniciar Sesión</button>
      </div>
      <div class="col-sm-3"></div>
    </div>
    </body>
  </div>
</template>

<script>
import { CallApi, urlBase } from "@/utils";

export default {
  name: "LoginView",
  props: ["username"],
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      var data = {
        username: this.user.username,
        password: this.user.password,
      };

      const result = await CallApi(urlBase + "/user/login", "POST", data);
      if (result.length > 0) {
        sessionStorage.setItem("sessionData", JSON.stringify(result[0]));
        window.location.href = "index.html";
      } else {
        alert("Usuario o contraseña inválidos");
        this.user.username = "";
        this.user.password = "";
      }
    },
  },
  mounted() {
    if (this.username !== "") {
      window.location.href = "index.html";
    }
  },
};
</script>
