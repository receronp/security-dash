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
					<div class="card">	
						Unidad VARIABLE_NUMERO_UNIDAD<br />
						VARIABLE_LOCACION_UNIDAD<br />
						VARIABLE_DESCRIPCION_UNIDAD<br />
						VARIABLE_CALIFICACION_UNIDAD && VARIALBE_NUMERO_REVIEWS<br />
					</div>
				</div>

				<div class="row">	
					<div class="card">	
						Unidad VARIABLE_NUMERO_UNIDAD<br />
						VARIABLE_LOCACION_UNIDAD<br />
						VARIABLE_DESCRIPCION_UNIDAD<br />
						VARIABLE_CALIFICACION_UNIDAD && VARIALBE_NUMERO_REVIEWS<br />
					</div>
				</div>
				<div class="row">	
					<div class="card">	
						Unidad VARIABLE_NUMERO_UNIDAD<br />
						VARIABLE_LOCACION_UNIDAD<br />
						VARIABLE_DESCRIPCION_UNIDAD<br />
						VARIABLE_CALIFICACION_UNIDAD && VARIALBE_NUMERO_REVIEWS<br />
					</div>
				</div>
			</div>
			<div class="column2">
				grafiquisima
			</div>
		</div>

		<div class="row">
			<div class="column2">
				<div class="cardn">
					<img src="../assets/dashboard.svg" width="50px" height="50px" />
						VAR_CASOS	
					<div class="container">
						<p>Promedio de casos diarios</p>
					</div>
				</div>
			</div>

			<div class="column2">
				<div class="cardn">
					<img src="../assets/conference.svg" width="50px" height="50px" />
						VAR_CASOS
					<div class="container">
						<p>Promedio de casos diarios</p>
					</div>
				</div>	
			</div>
		</div>			

	</div>
</template>

<script>

export default {
	props: ['userName', 'userType'],
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
