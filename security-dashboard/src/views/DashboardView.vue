<template>
	<div>
		<h3>Unidades Activas</h3>

		<div class="row">
			<div class="column3">
				<div class="card">
					<img src="../assets/toDoList.svg" width="50px" height="50px" />
						VAR_CASOS
					<p>Promedio de casos diarios</p>
				</div>
			</div>

			<div class="column3">
				<div class="card">
					<img src="../assets/reloj.svg" width="50px" height="50px" />
							VAR_CASOS
					<p>Tiempo promedio de respuesta</p>
				</div>
			</div>

			<div class="column3">		
				<div class="card">
					<img src="../assets/graph.svg" width="50px" height="50px" />
						VAR_CASOS
					<p>Mejora en tiempo de respuesta</p>
				</div>
			</div>
		</div>

		<div class="unidadesActivasContainer">
			<div class="container">
				<ul>
					<li>
						Unidad VARIABLE_NUMERO_UNIDAD<br />
						VARIABLE_LOCACION_UNIDAD<br />
						VARIABLE_DESCRIPCION_UNIDAD<br />
						VARIABLE_CALIFICACION_UNIDAD && VARIALBE_NUMERO_REVIEWS<br />
					</li>
					<li>
						Unidad VARIABLE_NUMERO_UNIDAD<br />
						VARIABLE_LOCACION_UNIDAD<br />
						VARIABLE_DESCRIPCION_UNIDAD<br />
						VARIABLE_CALIFICACION_UNIDAD && VARIALBE_NUMERO_REVIEWS<br />
					</li>
					<li>
						Unidad VARIABLE_NUMERO_UNIDAD<br />
						VARIABLE_LOCACION_UNIDAD<br />
						VARIABLE_DESCRIPCION_UNIDAD<br />
						VARIABLE_CALIFICACION_UNIDAD && VARIALBE_NUMERO_REVIEWS<br />
					</li>
					<li>
						Unidad VARIABLE_NUMERO_UNIDAD<br />
						VARIABLE_LOCACION_UNIDAD<br />
						VARIABLE_DESCRIPCION_UNIDAD<br />
						VARIABLE_CALIFICACION_UNIDAD && VARIALBE_NUMERO_REVIEWS<br />
					</li>
				</ul>
			</div>
		</div>
	
		<div class="row">
			<div class="column2">
				<div class="card">
					<img src="../assets/dashboard.svg" width="50px" height="50px" />
						VAR_CASOS	
					<div class="container">
						<p>Promedio de casos diarios</p>
					</div>
				</div>
			</div>

			<div class="column2">
				<div class="card">
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
  padding: 0 10px;
}

.column2{
  float: left;
  width: 40%;
  padding: 0 10px;
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
}
.container {
  padding: 2px 16px;
}
</style>
