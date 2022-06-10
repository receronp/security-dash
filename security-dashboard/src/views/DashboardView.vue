<template>
	<div>
		<h3>Unidades Activas</h3>
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
		
		<div class="statsContainer">
			<img src="../assets/toDoList.svg" width="50px" height="50px" />
				VAR_CASOS<br />
			<div class="container">
				<p>Promedio de casos diarios</p>
			</div>
		</div>

		<div class="statsContainer">
			<img src="../assets/reloj.svg" width="50px" height="50px" />
					VAR_CASOS<br />
			<div class="container">
				<p>Tiempo promedio de respuesta</p>
			</div>
		</div>

		<div class="statsContainer">
			<img src="../assets/graph.svg" width="50px" height="50px" />
				VAR_CASOS<br />
			<div class="container">
				<p>Mejora mensual tiempo promedio respuesta</p>
			</div>
		</div>

		<div class="stats2Container">
			<div class="container">
				<img src="../assets/dashboard.svg" width="50px" height="50px" />
				VAR_CASOS<br />
				<p>Promedio de casos diarios</p>
				<img src="../assets/conference.svg" width="50px" height="50px" />
				VAR_CASOS<br />
				<p>Promedio de casos diarios</p>
			</div>
		</div>				

	</div>
</template>

<script>

export default {
	props: ['userName', 'userType'],
};
</script>
