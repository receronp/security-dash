<template>
  <div>
    <h1>Login</h1>
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-2">
        <label class="form-label text-end">User:</label>
      </div>
      <div class="col-sm-4 text-start">
        <input
          type="text"
          class="form-control"
          placeholder="User Name"
          v-model="user.username"
        />
      </div>
      <div class="col-sm-3"></div>
    </div>
    <br />
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-2">
        <label class="form-label text-end">Password:</label>
      </div>
      <div class="col-sm-4 text-start">
        <input
          type="password"
          class="form-control"
          placeholder="password"
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
        <button class="btn btn-primary" @click="login()">Login</button>
      </div>
      <div class="col-sm-3"></div>
    </div>
  </div>
</template>

<script>
import { CallApi, urlBase } from "@/utils";

export default {
  name: "LoginView",
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
        alert("Usuario o contraseña invalidos");
        this.user.username = "";
        this.user.password = "";
      }
    },
  },
  mounted() {
    sessionStorage.removeItem("sessionData");
  },
};
</script>
