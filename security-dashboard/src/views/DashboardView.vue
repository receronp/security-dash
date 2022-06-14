<template>
  <div class="mt-3">
    <div class="row">
      <div class="col-10">
        <h3>Unidades Activas</h3>
      </div>
      <div class="col-2">
        <button
          @click="
            () => {
              TogglePopup('addVehicleTrigger');
              clearVehicleData();
            }
          "
          type="button"
          class="btn btn-success"
        >
          Agregar Unidad
        </button>
      </div>
    </div>

    <PopupComponent
      v-if="popupTriggers.addVehicleTrigger"
      :TogglePopup="() => TogglePopup('addVehicleTrigger')"
    >
      <h2>Agregar Unidad</h2>
      <div class="row mt-2">
        <div class="col text-start">
          <input
            type="text"
            class="form-control"
            placeholder="Ubicación"
            v-model="vehicle.location"
          />
        </div>
      </div>
      <div class="row mt-2">
        <div class="col text-start">
          <input
            type="text"
            class="form-control"
            placeholder="Descripción"
            v-model="vehicle.description"
          />
        </div>
      </div>
      <div class="row mt-2">
        <div class="col text-start">
          <input
            type="text"
            class="form-control"
            placeholder="Latitud"
            v-model="vehicle.latitude"
          />
        </div>
      </div>
      <div class="row mt-2">
        <div class="col text-start">
          <input
            type="text"
            class="form-control"
            placeholder="Longitud"
            v-model="vehicle.longitude"
          />
        </div>
      </div>
      <div class="row mt-2">
        <div class="col text-start">
          <input
            type="text"
            class="form-control"
            placeholder="Conferencias"
            v-model="vehicle.talks"
          />
        </div>
      </div>
      <div class="row mt-2">
        <div class="col text-start">
          <input
            type="text"
            class="form-control"
            placeholder="Distancia Recorrida"
            v-model="vehicle.commute"
          />
        </div>
      </div>
      <div class="row mt-2 mb-2">
        <div class="col-sm-3"></div>
        <div class="col-sm-6 text-center">
          <button class="btn btn-success" @click="addVehicle()">
            Registrar Unidad
          </button>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </PopupComponent>
    <PopupComponent
      v-if="popupTriggers.updateVehicleTrigger"
      :TogglePopup="() => TogglePopup('updateVehicleTrigger')"
    >
      <h2>Actualizar Unidad</h2>
      <div class="row mt-2">
        <div class="col text-start">
          <input
            type="text"
            class="form-control"
            placeholder="Ubicación"
            v-model="vehicle.location"
          />
        </div>
      </div>
      <div class="row mt-2">
        <div class="col text-start">
          <input
            type="text"
            class="form-control"
            placeholder="Descripción"
            v-model="vehicle.description"
          />
        </div>
      </div>
      <div class="row mt-2">
        <div class="col text-start">
          <input
            type="text"
            class="form-control"
            placeholder="Latitud"
            v-model="vehicle.latitude"
          />
        </div>
      </div>
      <div class="row mt-2">
        <div class="col text-start">
          <input
            type="text"
            class="form-control"
            placeholder="Longitud"
            v-model="vehicle.longitude"
          />
        </div>
      </div>
      <div class="row mt-2">
        <div class="col text-start">
          <input
            type="text"
            class="form-control"
            placeholder="Conferencias"
            v-model="vehicle.talks"
          />
        </div>
      </div>
      <div class="row mt-2">
        <div class="col text-start">
          <input
            type="text"
            class="form-control"
            placeholder="Distancia Recorrida"
            v-model="vehicle.commute"
          />
        </div>
      </div>
      <div class="row mt-2 mb-2">
        <div class="col-sm-3"></div>
        <div class="col-sm-6 text-center">
          <button class="btn btn-success" @click="updateVehicle()">
            Actualizar Unidad
          </button>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </PopupComponent>

    <div class="row">
      <div class="col vehicle-list">
        <div class="cardn">
          <img src="../assets/toDoList.svg" width="50px" height="50px" />
          <br />
          <div id="cases" class="container">
            <p>Escoga una unidad para desplegar los datos.</p>
          </div>
          <p>Casos resueltos</p>
        </div>
      </div>

      <div class="col vehicle-list">
        <div class="cardn">
          <img src="../assets/reloj.svg" width="50px" height="50px" />
          <br />
          <div id="timeAvg" class="container">
            <p>Escoga una unidad para desplegar los datos.</p>
          </div>
          <p>Tiempo promedio de respuesta</p>
        </div>
      </div>
      <div class="col vehicle-list">
        <div class="cardn">
          <img src="../assets/dashboard.svg" width="50px" height="50px" />
          <br />
          <div id="commute" class="container">
            <p>Escoga una unidad para desplegar los datos.</p>
          </div>
          <p>Distancia de traslado durante el día.</p>
        </div>
      </div>

      <div class="col vehicle-list">
        <div class="cardn">
          <img src="../assets/conference.svg" width="50px" height="50px" />
          <div id="talk" class="container">
            <p>Escoga una unidad para desplegar los datos.</p>
          </div>
          <p>Número de capacitaciones mensuales.</p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-4 overflow-auto" style="height: 28rem" v-if="vehicles">
        <div class="row" v-for="(vehicle, index) in vehicles" :key="vehicle.id">
          <div @click="show(index)" class="card">
            <div class="row">
              <div class="col-8">
                <b>Unidad {{ vehicle.id }}</b
                ><br />
                {{ vehicle.location }}<br />
                {{ vehicle.description }}
              </div>
              <div class="col-4">
                <button
                  type="button"
                  class="btn btn-danger btn-sm"
                  @click="() => deleteVehicle(vehicle.id)"
                  style="width: 100%"
                >
                  Eliminar
                </button>
                <br />
                <br />
                <button
                  type="button"
                  class="btn btn-secondary btn-sm"
                  @click="
                    () => {
                      TogglePopup('updateVehicleTrigger');
                      setVehicleData(vehicle);
                    }
                  "
                  style="width: 100%"
                >
                  Actualizar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--AQUI SE CAMBIA LOS MAPAS-->
      <div class="col-8">
        <GMapMap :center="center" :zoom="11" style="height: 28rem">
          <GMapCluster>
            <GMapMarker
              :key="index"
              v-for="(vehicle, index) in vehicles"
              :position="{ lat: vehicle.latitude, lng: vehicle.longitude }"
              :icon="{
                url: 'https://img.icons8.com/external-creatype-filed-outline-colourcreatype/344/external-car-crime-and-law-creatype-filed-outline-colourcreatype.png',
                scaledSize: { width: 44, height: 44 },
                labelOrigin: { x: 16, y: -10 },
              }"
              :clickable="true"
            />
            <GMapMarker
              :key="index"
              v-for="(report, index) in reports"
              :position="{ lat: report.latitude, lng: report.longitude }"
              :icon="{
                url: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-911-emergency-service-flaticons-lineal-color-flat-icons.png',
                scaledSize: { width: 33, height: 33 },
                labelOrigin: { x: 16, y: -10 },
              }"
              :clickable="true"
            />
          </GMapCluster>
        </GMapMap>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { CallApi, urlBase } from "@/utils";
import PopupComponent from "@/components/PopupComponent.vue";

export default {
  props: ["role"],
  components: { PopupComponent },
  data() {
    return {
      vehicle: {
        id: "",
        location: "",
        description: "",
        latitude: "",
        longitude: "",
        talks: "",
        commute: "",
      },
      reports: null,
      vehicles: null,
      center: { lat: 25.706583, lng: -100.304304 },
    };
  },
  setup() {
    const popupTriggers = ref({
      addVehicleTrigger: false,
      updateVehicleTrigger: false,
    });

    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };

    return {
      PopupComponent,
      popupTriggers,
      TogglePopup,
    };
  },
  methods: {
    setVehicleData(data) {
      this.vehicle = data;
    },
    clearVehicleData() {
      this.vehicle = {
        id: "",
        location: "",
        description: "",
        latitude: "",
        longitude: "",
        talks: "",
        commute: "",
      };
    },
    async show(index) {
      var element;
      element = document.getElementById("commute");
      element.innerHTML =
        "<p>" + String(this.vehicles[index].commute) + " km</p>";
      element = document.getElementById("talk");
      element.innerHTML = "<p>" + String(this.vehicles[index].talks) + "</p>";

      const cases = await CallApi(
        urlBase + "/case/count/" + this.vehicles[index].id,
        "GET",
        null
      );

      if (cases.length > 0 && cases[0].cases !== null) {
        element = document.getElementById("cases");
        element.innerHTML = "<p>" + String(cases[0].cases) + " casos</p>";
      }

      const timeAvg = await CallApi(
        urlBase + "/case/avg_time/" + this.vehicles[index].id,
        "GET",
        null
      );

      element = document.getElementById("timeAvg");
      if (timeAvg.length > 0 && timeAvg[0].avg_time !== null) {
        element.innerHTML =
          "<p>" + String(timeAvg[0].avg_time.toFixed(2)) + " horas</p>";
      } else {
        element.innerHTML = "<p>N/A</p>";
      }

      this.center = {
        lat: this.vehicles[index].latitude,
        lng: this.vehicles[index].longitude,
      };
    },
    async addVehicle() {
      const result = await CallApi(urlBase + "/vehicle", "POST", this.vehicle);
      if (result !== null > 0) {
        alert("Unidad agregada a base de datos.");
      } else {
        alert(
          "No se pudo agregar la unidad, verifique los datos e intente de nuevo."
        );
      }
      window.location.href = "dashboard";
    },
    async updateVehicle() {
      const result = await CallApi(urlBase + "/vehicle", "PUT", this.vehicle);
      if (result !== null > 0) {
        alert("Unidad actualizada en base de datos.");
      } else {
        alert(
          "No se pudo actualizar la unidad, verifique los datos e intente de nuevo."
        );
      }
      window.location.href = "dashboard";
    },
    async deleteVehicle(id) {
      const result = await CallApi(urlBase + "/vehicle/" + id, "DELETE", null);
      if (result !== null > 0) {
        console.log(result);
        alert("Unidad eliminada de base de datos.");
      } else {
        alert(
          "No se pudo eliminar la unidad, verifique los datos e intente de nuevo."
        );
      }
      window.location.href = "dashboard";
    },
  },

  async mounted() {
    if (this.role !== "admin") {
      window.location.href = "index.html";
    } else {
      var result = await CallApi(urlBase + "/vehicle", "GET", null);
      if (result.length > 0) {
        this.vehicles = result;
      } else {
        alert("No se encontraron unidades");
      }

      result = await CallApi(urlBase + "/report", "GET", null);
      if (result.length > 0) {
        this.reports = result;
      } else {
        alert("No se encontraron reportes");
      }
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

/* Float four columns side by side */
.vehicle-list {
  padding: 10px 10px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the counter cards */
.card {
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 8px;
  padding: 16px;
  text-align: left;
  background-color: #ffffff;
  font-family: "Montserrat", sans-serif;
  transition: 0.3s;
}
.cardn {
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 8px;
  padding: 16px;
  text-align: center;
  background-color: #ffffff;
  font-family: "Montserrat", sans-serif;
}

.card:hover {
  box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 16px;
  padding: 16px;
  text-align: left;
  background-color: #edf4ff;
}

.card:onclick {
  box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 16px;
  padding: 16px;
  text-align: center;
  background-color: #cddffd;
}
</style>
