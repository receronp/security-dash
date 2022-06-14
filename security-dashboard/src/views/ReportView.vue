<template>
  <div class="mt-3">
    <div class="row">
      <div class="col-10">
        <h3>Reportes Activos</h3>
      </div>
      <div class="col-2">
        <button
          @click="
            () => {
              TogglePopup('addReportTrigger');
              clearReportData();
            }
          "
          v-if="role == 'admin'"
          type="button"
          class="btn btn-success"
        >
          Agregar Reporte
        </button>
      </div>
    </div>

    <PopupComponent
      v-if="popupTriggers.addReportTrigger"
      :TogglePopup="() => TogglePopup('addReportTrigger')"
    >
      <h2>Agregar Reporte</h2>
      <div class="row mt-2">
        <div class="col text-start">
          <input
            type="text"
            class="form-control"
            placeholder="Tema"
            v-model="report.name"
          />
        </div>
      </div>
      <div class="row mt-2">
        <div class="col text-start">
          <input
            type="text"
            class="form-control"
            placeholder="Ubicación"
            v-model="report.location"
          />
        </div>
      </div>
      <div class="row mt-2">
        <div class="col text-start">
          <input
            type="text"
            class="form-control"
            placeholder="Descripción"
            v-model="report.description"
          />
        </div>
      </div>
      <div class="row mt-2">
        <div class="col text-start">
          <input
            type="text"
            class="form-control"
            placeholder="Latitud"
            v-model="report.latitude"
          />
        </div>
      </div>
      <div class="row mt-2">
        <div class="col text-start">
          <input
            type="text"
            class="form-control"
            placeholder="Longitud"
            v-model="report.longitude"
          />
        </div>
      </div>
      <div class="row mt-2">
        <div class="col text-start">
          <input
            type="text"
            class="form-control"
            placeholder="Categoría"
            v-model="report.category"
          />
        </div>
      </div>
      <div class="row mt-2">
        <div class="col text-start">
          <input
            type="text"
            class="form-control"
            placeholder="Unidad Asignada"
            v-model="report.report_vehicle"
          />
        </div>
      </div>
      <div class="row mt-2 mb-2">
        <div class="col-sm-3"></div>
        <div class="col-sm-6 text-center">
          <button class="btn btn-success" @click="addReport()">
            Registrar Reporte
          </button>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </PopupComponent>
    <PopupComponent
      v-if="popupTriggers.updateReportTrigger"
      :TogglePopup="() => TogglePopup('updateReportTrigger')"
    >
      <h2>Actualizar Reporte</h2>
      <div class="row mt-2">
        <div class="col text-start">
          <input
            type="text"
            class="form-control"
            placeholder="Tema"
            v-model="report.name"
          />
        </div>
      </div>
      <div class="row mt-2">
        <div class="col text-start">
          <input
            type="text"
            class="form-control"
            placeholder="Ubicación"
            v-model="report.location"
          />
        </div>
      </div>
      <div class="row mt-2">
        <div class="col text-start">
          <input
            type="text"
            class="form-control"
            placeholder="Descripción"
            v-model="report.description"
          />
        </div>
      </div>
      <div class="row mt-2">
        <div class="col text-start">
          <input
            type="text"
            class="form-control"
            placeholder="Latitud"
            v-model="report.latitude"
          />
        </div>
      </div>
      <div class="row mt-2">
        <div class="col text-start">
          <input
            type="text"
            class="form-control"
            placeholder="Longitud"
            v-model="report.longitude"
          />
        </div>
      </div>
      <div class="row mt-2">
        <div class="col text-start">
          <input
            type="text"
            class="form-control"
            placeholder="Categoría"
            v-model="report.category"
          />
        </div>
      </div>
      <div class="row mt-2">
        <div class="col text-start">
          <input
            type="text"
            class="form-control"
            placeholder="Unidad Asignada"
            v-model="report.report_vehicle"
          />
        </div>
      </div>
      <div class="row mt-2 mb-2">
        <div class="col-sm-3"></div>
        <div class="col-sm-6 text-center">
          <button class="btn btn-success" @click="updateReport()">
            Actualizar Reporte
          </button>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </PopupComponent>
    <PopupComponent
      v-if="popupTriggers.deleteReportTrigger"
      :TogglePopup="() => TogglePopup('deleteReportTrigger')"
    >
      <h2>Agregar Caso</h2>
      <div class="row mt-2">
        <div class="col-4"></div>
        <div class="col-4 text-center">
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              checked
              v-model="case_data.success"
            />
            <label class="form-check-label" for="flexSwitchCheckChecked"
              >Exitoso</label
            >
          </div>
        </div>
        <div class="col-4"></div>
      </div>
      <div class="row mt-2">
        <div class="col text-start">
          <input
            type="text"
            class="form-control"
            placeholder="Tiempo de respuesta (hrs)"
            v-model="case_data.response_time"
          />
        </div>
      </div>
      <div class="row mt-2 mb-2">
        <div class="col-sm-3"></div>
        <div class="col-sm-6 text-center">
          <button class="btn btn-success" @click="addCase()">
            Agregar Caso
          </button>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </PopupComponent>

    <div class="row mt-2">
      <div class="col-4 overflow-auto" style="height: 32rem" v-if="reports">
        <div class="row" v-for="(report, index) in reports" :key="report.id">
          <div @click="show(index)" class="card">
            <div class="row">
              <div class="col-8">
                <b>Reporte {{ report.id }}</b
                ><br />
                {{ report.location }}<br />
                {{ report.description }}
              </div>
              <div class="col-4">
                <button
                  type="button"
                  class="btn btn-danger btn-sm"
                  v-if="role == 'admin' && report.report_vehicle"
                  @click="() => deleteReport(report)"
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
                      TogglePopup('updateReportTrigger');
                      setReportData(report);
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
        <GMapMap :center="center" :zoom="11" style="height: 32rem">
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
  props: ["username", "role", "user_vehicle"],
  components: { PopupComponent },
  data() {
    return {
      report: {
        id: null,
        name: null,
        location: null,
        description: null,
        latitude: null,
        longitude: null,
        category: null,
        report_vehicle: null,
      },
      case_data: {
        case_vehicle: null,
        success: false,
        date: null,
        response_time: null,
      },
      reports: null,
      vehicles: null,
      center: { lat: 25.706583, lng: -100.304304 },
    };
  },
  setup() {
    const popupTriggers = ref({
      addReportTrigger: false,
      updateReportTrigger: false,
      deleteReportTrigger: false,
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
    setCaseData(vehicle) {
      this.case_data.case_vehicle = vehicle;
      const [withoutT] = new Date().toISOString().split("T");
      this.case_data.date = withoutT;
    },
    setReportData(data) {
      this.report = data;
    },
    clearReportData() {
      this.report = {
        id: null,
        name: null,
        location: null,
        description: null,
        latitude: null,
        longitude: null,
        category: null,
        report_vehicle: null,
      };
    },
    async show(index) {
      this.center = {
        lat: this.reports[index].latitude,
        lng: this.reports[index].longitude,
      };
    },
    async addCase() {
      const result = await CallApi(urlBase + "/case", "POST", this.case_data);
      if (result !== null) {
        alert("Reporte agregada a base de datos.");
      } else {
        alert(
          "No se pudo agregar el reporte, verifique los datos e intente de nuevo."
        );
      }
      window.location.href = "reports";
    },
    async addReport() {
      const result = await CallApi(urlBase + "/report", "POST", this.report);
      if (result !== null) {
        alert("Reporte agregada a base de datos.");
      } else {
        alert(
          "No se pudo agregar el reporte, verifique los datos e intente de nuevo."
        );
      }
      window.location.href = "reports";
    },
    async updateReport() {
      const result = await CallApi(urlBase + "/report", "PUT", this.report);
      if (result !== null) {
        alert("Reporte actualizado en base de datos.");
      } else {
        alert(
          "No se pudo actualizar el reporte, verifique los datos e intente de nuevo."
        );
      }
      window.location.href = "reports";
    },
    async deleteReport(report) {
      const result = await CallApi(
        urlBase + "/report/" + report.id,
        "DELETE",
        null
      );
      if (result !== null) {
        console.log(result);
        alert("Reporte eliminado de base de datos.");
        this.setCaseData(report.report_vehicle);
        this.TogglePopup("deleteReportTrigger");
      } else {
        alert(
          "No se pudo eliminar el reporte, verifique los datos e intente de nuevo."
        );
      }
    },
  },

  async mounted() {
    if (this.username == "") {
      window.location.href = "index.html";
    } else {
      if (this.role == "admin") {
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
      } else {
        if (this.user_vehicle) {
          result = await CallApi(
            urlBase + "/vehicle/" + this.user_vehicle,
            "GET",
            null
          );
          if (result.length > 0) {
            this.vehicles = result;
          } else {
            alert("No se encontraron unidades");
          }

          result = await CallApi(
            urlBase + "/report/vehicle/" + this.user_vehicle,
            "GET",
            null
          );
          if (result.length > 0) {
            this.reports = result;
          } else {
            alert("No se encontraron reportes");
          }
        } else {
          result = await CallApi(
            urlBase + "/report/unassigned/list",
            "GET",
            null
          );
          if (result.length > 0) {
            this.reports = result;
          } else {
            alert("No se encontraron reportes");
          }
        }
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
.report-list {
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
