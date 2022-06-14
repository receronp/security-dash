<template>
  <div class="mt-3">
    <h1>Registrar Usuario</h1>
    <div class="row mt-2">
      <div class="col-sm-3"></div>
      <div class="col-sm-2">
        <label class="form-label text-end">Rol:</label>
      </div>
      <div class="col-sm-4 text-start">
        <select class="form-select" v-model="user.role">
          <option disabled value="">Selecciona Rol</option>
          <option value="admin">Admin</option>
          <option value="employee">Empleado</option>
        </select>
      </div>
      <div class="col-sm-3"></div>
    </div>
    <br />
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-2">
        <label class="form-label text-end">Nombre:</label>
      </div>
      <div class="col-sm-4 text-start">
        <input
          type="text"
          class="form-control"
          placeholder="Nombre"
          v-model="user.name"
        />
      </div>
      <div class="col-sm-3"></div>
    </div>
    <br />
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
        />
      </div>
      <div class="col-sm-3"></div>
    </div>
    <br />
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-2">
        <label class="form-label text-end">ID de Unidad:</label>
      </div>
      <div class="col-sm-4 text-start">
        <input
          type="text"
          class="form-control"
          placeholder="###"
          v-model="user.user_vehicle"
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
          Registrar Usuario
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
        user_vehicle: null,
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
        user_vehicle: this.user.user_vehicle,
      };

      if (data.name && data.username && data.password && data.profile) {
        const result = await CallApi(urlBase + "/user/register", "POST", data);
        if (result !== null) {
          // Admin keeps his session active.
          // sessionStorage.setItem("sessionData", JSON.stringify(data));
          window.location.href = "index.html";
        } else {
          alert("Datos de registro no pudieron ser procesados.");
          this.user.role = "";
          this.user.name = "";
          this.user.username = "";
          this.user.password = "";
          this.user.user_vehicle = null;
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
