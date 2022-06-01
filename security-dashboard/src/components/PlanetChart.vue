<template>
	<div>
		<canvas id="planet-chart"></canvas>
	</div>
</template>

<script>
import Chart from 'chart.js';

export default {
	name: 'PlanetChart',
	extends: VueChartJs.Pie,

	data() {
		return {
			etiquetas: [],
			stock: [],
			bgColors: [
				'#ea80fc',
				'#e040fb',
				'#d500f9',
				'#aa00ff',
				'#f8bbd0',
				'#f06292',
				'#ec407a',
				'#d81b60',
				'#1de9b6',
				'#00bfa5',
				'#e65100',
			],
		};
	},
	mounted() {
		this.mostrar();
		this.renderChart(
			{
				labels: this.etiquetas,
				datasets: [
					{
						label: 'Data One',
						backgroundColor: this.bgColors,
						data: this.stock,
					},
				],
			},
			{ responsive: true, maintainAspectRatio: false }
		);
	},
};
</script>
