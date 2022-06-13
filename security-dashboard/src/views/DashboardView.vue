<template>
  <div>
    <h3>Unidades Activas</h3>

    <div class="row">
      <div class="column3">
        <div class="cardn">
          <img src="../assets/toDoList.svg" width="50px" height="50px" />
          VAR_CASOS
          <p>Promedio de casos diarios</p>
        </div>
      </div>

      <div class="column3">
        <div class="cardn">
          <img src="../assets/reloj.svg" width="50px" height="50px" />
          VAR_CASOS
          <p>Tiempo promedio de respuesta</p>
        </div>
      </div>

      <div class="column3">
        <div class="cardn">
          <img src="../assets/graph.svg" width="50px" height="50px" />
          VAR_CASOS
          <p>Mejora en tiempo de respuesta</p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="column2" v-if="vehicles">
        <div class="row" v-for="(vehicle, index) in vehicles" :key="vehicle.id">
          <div @click="show(index)" class="card">
            <b>Unidad {{ vehicle.id }}</b
            ><br />
            {{ vehicle.location }}<br />
            {{ vehicle.description }}
          </div>
        </div>
      </div>
      <!--AQUI SE CAMBIA LOS MAPAS-->
      <div class="column2">
        <GMapMap
          :center="center"
          :zoom="11"
          style="width: 640px; height: 460px"
        >
          <GMapCluster>
            <GMapMarker
              :key="index"
              v-for="(vehicle, index) in vehicles"
              :position="{ lat: vehicle.latitude, lng: vehicle.longitude }"
              :clickable="true"
              :draggable="true"
            />
          </GMapCluster>
        </GMapMap>
      </div>
    </div>
    <div class="row">
      <div class="column2">
        <div class="cardn">
          <img src="../assets/dashboard.svg" width="50px" height="50px" />
          <br />
          <div id="commute" class="container">
            <p>Escoga una unidad para desplegar los datos.</p>
          </div>
          <p>Distancia de traslado durante el día.</p>
        </div>
      </div>

      <div class="column2">
        <div class="cardn">
          <img src="../assets/conference.svg" width="50px" height="50px" />
          <div id="talk" class="container">
            <p>Escoga una unidad para desplegar los datos.</p>
          </div>
          <p>Participaciones en capacitaciones mensuales.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CallApi, urlBase } from "@/utils";

export default {
  data() {
    return {
      vehicles: null,
      markers: null,
      seen: 0,
      center: { lat: 25.706583, lng: -100.304304 },
    };
  },

  methods: {
    show(id) {
      console.log(this.vehicles[id]);
      const element = document.getElementById("commute");
      element.innerHTML = "<p>" + String(this.vehicles[id].commute) + " km</p>";
      const element2 = document.getElementById("talk");
      element2.innerHTML = "<p>" + String(this.vehicles[id].talks) + "</p>";
      this.seen = 1;
      this.center = {
        lat: this.vehicles[id].latitude,
        lng: this.vehicles[id].longitude,
      };
    },
  },

  async mounted() {
    const result = await CallApi(urlBase + "/vehicle", "GET", null);
    if (result.length > 0) {
      sessionStorage.setItem("vehicleData", JSON.stringify(result));
      this.vehicles = result;
    } else {
      alert("No se encontraron vehiculos");
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

/* Float four columns side by side */
.column3 {
  float: left;
  width: 33%;
  padding: 10px 10px;
}

.column2 {
  float: left;
  width: 40%;
  padding: 10px 10px;
  justify-content: center;
  align-content: center;
}

/* Remove extra left and right margins, due to padding */
.row {
  margin: 0 -5px;
  padding: 5px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
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

.container {
  padding: 2px 16px;
}
</style>
