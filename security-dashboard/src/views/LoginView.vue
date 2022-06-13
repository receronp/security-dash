<template>
	<div>
		<h1>Login</h1>
		<div class="row">
			<div class="col-sm-3"></div>
			<div class="col-sm-2">
				<label class="form-label text-end">User:</label>
			</div>
			<div class="col-sm-4 text-start">
				<input
					type="text"
					class="form-control"
					placeholder="User Name"
					v-model="user.userName"
				/>
			</div>
			<div class="col-sm-3"></div>
		</div>
		<br />
		<div class="row">
			<div class="col-sm-3"></div>
			<div class="col-sm-2">
				<label class="form-label text-end">Password:</label>
			</div>
			<div class="col-sm-4 text-start">
				<input
					type="password"
					class="form-control"
					placeholder="password"
					v-model="user.password"
					@keyup.enter="login()"
				/>
			</div>
			<div class="col-sm-3"></div>
		</div>
		<br />
		<div class="row">
			<div class="col-sm-3"></div>
			<div class="col-sm-6 text-center">
				<button class="btn btn-primary" @click="login()">Login</button>
			</div>
			<div class="col-sm-3"></div>
		</div>
	</div>
</template>

<script>
export default {
<<<<<<< Updated upstream
	name: 'LoginView',
	data() {
		return {
			urlBase: 'http://52.14.206.240:5000',
			user: {
				userName: '',
				password: '',
			},
		};
	},
	methods: {
		async login() {
			var data = {
				userName: this.user.userName,
				password: this.user.password,
			};
=======
  name: "LoginView",
  data() {
    return {
      urlBase: "http://52.14.206.240:5000",
      user: {
        userName: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      var data = {
        userName: this.user.userName,
        password: this.user.password,
      };
>>>>>>> Stashed changes

			const result = await this.CallApi(this.urlBase + '/user', 'POST', data);
			if (result.length > 0) {
				sessionStorage.setItem('sessionData', JSON.stringify(result[0]));
				window.location.href = 'index.html';
			} else {
				alert('Usuario o contraseña invalidos');
				this.user.userName = '';
				this.user.password = '';
			}
		},
		async CallApi(url, method, data) {
			const header =
				data == null
					? {
							method: method,
							headers: { 'Content-Type': 'application/json' },
					  }
					: {
							method: method,
							body: JSON.stringify(data),
							headers: { 'Content-Type': 'application/json' },
					  };

			try {
				const response = await fetch(url, header);
				return await response.json();
			} catch (error) {
				alert('Hubo un error favor de contactar al admnistrador.');
			}
		},
	},
	mounted() {
		sessionStorage.removeItem('sessionData');
	},
};
</script>
