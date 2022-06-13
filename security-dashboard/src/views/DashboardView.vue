<template>
	<div>
		<h3>Unidades Activas</h3>
<<<<<<< Updated upstream
		<div class="unidadesActivasContainer">
			<div class="container">
				<ul>
					<li>
=======

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

		<div class ="row">
			<div class="column2">
				<div class="row">	
					<div v-on:click="show1" class="card">	
>>>>>>> Stashed changes
						Unidad VARIABLE_NUMERO_UNIDAD<br />
						VARIABLE_LOCACION_UNIDAD<br />
						VARIABLE_DESCRIPCION_UNIDAD<br />
						VARIABLE_CALIFICACION_UNIDAD && VARIALBE_NUMERO_REVIEWS<br />
<<<<<<< Updated upstream
					</li>
					<li>
=======
					</div>
				</div>

				<div class="row">	
					<div v-on:click="show2" class="card">	
>>>>>>> Stashed changes
						Unidad VARIABLE_NUMERO_UNIDAD<br />
						VARIABLE_LOCACION_UNIDAD<br />
						VARIABLE_DESCRIPCION_UNIDAD<br />
						VARIABLE_CALIFICACION_UNIDAD && VARIALBE_NUMERO_REVIEWS<br />
<<<<<<< Updated upstream
					</li>
					<li>
=======
					</div>
				</div>
				<div class="row">	
					<div v-on:click="login" class="card">	
>>>>>>> Stashed changes
						Unidad VARIABLE_NUMERO_UNIDAD<br />
						VARIABLE_LOCACION_UNIDAD<br />
						VARIABLE_DESCRIPCION_UNIDAD<br />
						VARIABLE_CALIFICACION_UNIDAD && VARIALBE_NUMERO_REVIEWS<br />
<<<<<<< Updated upstream
					</li>
					<li>
						Unidad VARIABLE_NUMERO_UNIDAD<br />
						VARIABLE_LOCACION_UNIDAD<br />
						VARIABLE_DESCRIPCION_UNIDAD<br />
						VARIABLE_CALIFICACION_UNIDAD && VARIALBE_NUMERO_REVIEWS<br />
					</li>
				</ul>
=======
					</div>
				</div>
			</div>
			<!--AQUI SE CAMBIA LOS MAPAS-->
			<div class="column2">
				<div id="change">
					<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d230075.82653108437!2d-100.30430391225585!3d25.706583021651895!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1654902816413!5m2!1ses-419!2smx" width="640" height="460" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
				</div>
>>>>>>> Stashed changes
			</div>
		</div>

		<div class="statsContainer">
			<div class="container">
				<img src="../assets/toDoList.svg" width="50px" height="50px" />
				VAR_CASOS<br />
				<p>Promedio de casos diarios</p>
				<img src="../assets/reloj.svg" width="50px" height="50px" />
				VAR_CASOS<br />
				<p>Tiempo promedio de respuesta</p>
				<img src="../assets/graph.svg" width="50px" height="50px" />
				VAR_CASOS<br />
				<p>Mejora mensual tiempo promedio respuesta</p>
			</div>
		</div>
		<div id="graph">
			<PlanetChart />
		</div>
	</div>
</template>

<script>
<<<<<<< Updated upstream
import PlanetChart from '../components/PlanetChart.vue';

export default {
	name: 'graph',
	components: {
		PlanetChart,
	},
	props: ['userName', 'userType'],
};
</script>
=======
export default {

name: "LoginView",
  data() {
    return {
    	urlBase: "http://52.14.206.240:5000",
		vehicle: {
			id: ""
		}
    };
  },

  methods: {
    async login() {
	var data = {
		id : this.vehicle.id
	};
      const result = await this.CallApi(this.urlBase + "/vehicle", "GET", data);
      if (result.length > 0) {
        sessionStorage.setItem("sessionData", JSON.stringify(result[0]));
      } else {
        alert("No se encontraron vehiculos");
      }
    },
    async CallApi(url, method, data) {
      const header =
        data == null
          ? {
              method: method,
              headers: { "Content-Type": "application/json" },
            }
          : {
              method: method,
              body: JSON.stringify(data),
              headers: { "Content-Type": "application/json" },
            };

      try {
        const response = await fetch(url, header);
        return await response.json();
      } catch (error) {
        alert("Hubo un error favor de contactar al admnistrador.");
      }
    },

		show1(){
			document.getElementById('change').innerHTML = "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.9204046771642!2d-100.25112318561165!3d25.67393311849506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662c00409b89a13%3A0xaaeb21f443782a10!2sC.%207%2C%20La%20Quinta%2C%20Guadalupe%2C%20N.L.!5e0!3m2!1ses-419!2smx!4v1654917065391!5m2!1ses-419!2smx' width='650' height='460' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>";
		},

		show2(){
			document.getElementById('change').innerHTML = "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.6902298335317!2d-100.28629038561216!3d25.64840461954179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bfbe722dd423%3A0x76ab2148a077ff3b!2sEsparta%203000%2C%20Valle%20Primavera%2C%2064833%20Monterrey%2C%20N.L.!5e0!3m2!1ses-419!2smx!4v1654917648935!5m2!1ses-419!2smx' width='650' height='460' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>";
		},

		show3(){
			document.getElementById('change').innerHTML = "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.604306937225!2d-100.33717928561211!3d25.651255119425027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662be133c7c1df7%3A0xab85d8fcb4d1f64a!2sFashion%20Drive!5e0!3m2!1ses-419!2smx!4v1654917771348!5m2!1ses-419!2smx' width='650' height='460' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>";
		}
  },
  
	mounted() {
		sessionStorage.removeItem("sessionData");
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

.column2{
  float: left;
  width: 40%;
  padding: 10px 10px;
  justify-content: center;
  align-content: center;
}

/* Remove extra left and right margins, due to padding */
.row {
	margin: 0 -5px;
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
  text-align: center;
  background-color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  transition: 0.3s;
}
.cardn {
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 8px;	
  padding: 16px;
  text-align: center;
  background-color: #ffffff;
  font-family: 'Montserrat', sans-serif;
}


.card:hover {
  box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 16px;
  padding: 16px;
  text-align: center;
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
>>>>>>> Stashed changes
