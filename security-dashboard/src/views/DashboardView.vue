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

		<div class ="row">
			<div class="column2">
				<div class="row">	
					<div v-on:click="show1" class="card">	
						<b>Unidad {{vehicles.id1}}</b><br />
						{{vehicles.location1}}<br />
						{{vehicles.description1}}
					</div>
				</div>

				<div class="row">	
					<div v-on:click="show2" class="card">	
						<b>Unidad {{vehicles.id2}}</b><br />
						{{vehicles.location2}}<br />
						{{vehicles.description2}}
					</div>
				</div>
				<div class="row">	
					<div v-on:click="show3" class="card">	
						<b>Unidad {{vehicles.id3}}</b><br />
						{{vehicles.location3}}<br />
						{{vehicles.description3}}
					</div>
				</div>
			</div>
			<!--AQUI SE CAMBIA LOS MAPAS-->
			<div class="column2">
				<div id="change">
					<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d230075.82653108437!2d-100.30430391225585!3d25.706583021651895!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1654902816413!5m2!1ses-419!2smx" width="640" height="460" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="column2">
				<div class="cardn">
					<img src="../assets/dashboard.svg" width="50px" height="50px" />
					<br/>
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
export default {

  	data() {
		return {
			urlBase: "http://52.14.206.240:5000",
			vehicles: {
				id1: "",
				id2: "",
				id3: "",
				location1: "",
				location2: "",
				location3: "",
				description1: "",
				description2: "",
				description3: "",
				talk1: "",
				talk2: "",
				talk3: "",
				commute1: "",
				commute2: "",
				commute3: "",
			},
			seen: 0,
		};
  },

	methods: {
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
			document.getElementById('change').innerHTML = "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28770.790376317666!2d-100.38886185612505!3d25.659729939235387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bdf2b92bb515%3A0xe35729efb465f2b1!2sDel%20Valle%2C%2066220%20San%20Pedro%20Garza%20Garc%C3%ADa%2C%20N.L.!5e0!3m2!1ses-419!2smx!4v1655089538247!5m2!1ses-419!2smx' width='650' height='460' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>";
			const element = document.getElementById("commute");
			element.innerHTML = "<p>"+String(this.vehicles.commute1)+" km</p>";
			const element2 = document.getElementById("talk");
			element2.innerHTML = "<p>"+String(this.vehicles.talk1)+"</p>";
			this.seen = 1;
		},

		show2(){
			document.getElementById('change').innerHTML = "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7194.825532780457!2d-100.28332257733926!3d25.624422708460273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bf70f8e81e1f%3A0xf9786ba6532f8041!2sLas%20Brisas%2C%2064780%20Monterrey%2C%20N.L.!5e0!3m2!1ses-419!2smx!4v1655089701046!5m2!1ses-419!2smx' width='650' height='460' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>";
			const element = document.getElementById("commute");
			element.innerHTML = "<p>"+String(this.vehicles.commute2)+" km</p>";
			const element2 = document.getElementById("talk");
			element2.innerHTML = "<p>"+String(this.vehicles.talk2)+"</p>";
			this.seen = 1;
		},

		show3(){
			document.getElementById('change').innerHTML = "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7190.686876038726!2d-100.26019007733339!3d25.69305065277062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662eab23819bc63%3A0xba8787a24b4ef726!2sLinda%20Vista%2C%2067130%20Guadalupe%2C%20N.L.!5e0!3m2!1ses-419!2smx!4v1655089767064!5m2!1ses-419!2smx' width='650' height='460' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>";
			const element = document.getElementById("commute");
			element.innerHTML = "<p>"+String(this.vehicles.commute3)+" km</p>";
			const element2 = document.getElementById("talk");
			element2.innerHTML = "<p>"+String(this.vehicles.talk3)+"</p>";
			this.seen = 1;

		}
	},
  
	async mounted() {
		var data = null;
		const result = await this.CallApi(this.urlBase + "/vehicle", "GET", data);
		if (result.length > 0) {
			sessionStorage.setItem("vehicleData", JSON.stringify(result[0]));
			this.vehicles.id1 = result[0].id;
			this.vehicles.id2 = result[1].id;
			this.vehicles.id3 = result[2].id;

			this.vehicles.location1 = result[0].location;
			this.vehicles.location2 = result[1].location;
			this.vehicles.location3 = result[2].location;

			this.vehicles.description1 = result[0].description;
			this.vehicles.description2 = result[1].description;
			this.vehicles.description3 = result[2].description;

			this.vehicles.talk1 = result[0].talks;
			this.vehicles.talk2 = result[1].talks;
			this.vehicles.talk3 = result[2].talks;

			this.vehicles.commute1 = result[0].commute;
			this.vehicles.commute2 = result[1].commute;
			this.vehicles.commute3 = result[2].commute;



		} else {
			alert("No se encontraron vehiculos");
		}

		sessionStorage.removeItem("vehicleData");
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
