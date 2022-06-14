<template>
  <div class="mt-3">
    <h1>Register</h1>
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-2">
        <label class="form-label text-end">Role:</label>
      </div>
      <div class="col-sm-4 text-start">
        <select class="form-select" v-model="user.role">
          <option disabled value="">Select role</option>
          <option value="admin">Admin</option>
          <option value="employee">Employee</option>
        </select>
      </div>
      <div class="col-sm-3"></div>
    </div>
    <br />
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-2">
        <label class="form-label text-end">Name:</label>
      </div>
      <div class="col-sm-4 text-start">
        <input
          type="text"
          class="form-control"
          placeholder="Name"
          v-model="user.name"
        />
      </div>
      <div class="col-sm-3"></div>
    </div>
    <br />
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-2">
        <label class="form-label text-end">Username:</label>
      </div>
      <div class="col-sm-4 text-start">
        <input
          type="text"
          class="form-control"
          placeholder="Username"
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
          placeholder="Password"
          v-model="user.password"
          @keyup.enter="register()"
        />
      </div>
      <div class="col-sm-3"></div>
    </div>
    <br />
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-6 text-center">
        <button class="btn btn-primary" @click="register()">
          Register User
        </button>
      </div>
      <div class="col-sm-3"></div>
    </div>
  </div>
</template>

<script>
import { CallApi, urlBase } from "@/utils";

export default {
  name: "RegisterView",
  props: ["role"],
  data() {
    return {
      user: {
        name: "",
        username: "",
        role: "",
        password: "",
      },
    };
  },
  methods: {
    async register() {
      var data = {
        profile: this.user.role,
        name: this.user.name,
        username: this.user.username,
        password: this.user.password,
      };

      if (data.name && data.username && data.password && data.profile) {
        const result = await CallApi(urlBase + "/user/register", "POST", data);
        if (result !== null) {
          // Admin keeps his session active.
          // sessionStorage.setItem("sessionData", JSON.stringify(data));
          window.location.href = "index.html";
        } else {
          if (data.profile.length == 0 || data.profile == null) {
            alert("Invalid role selection.");
          } else {
            alert("Datos de registro no pudieron ser procesados.");
          }
          this.user.profile = "";
          this.user.name = "";
          this.user.username = "";
          this.user.password = "";
        }
      } else {
        alert("Datos de registro incompletos.");
      }
    },
  },
  mounted() {
    if (this.role !== "admin") {
      window.location.href = "index.html";
    }
  },
};
</script>
