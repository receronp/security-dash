<template>
  <div class="mt-3">
    <body class="text-center">
      <img src= "../assets/Dash.png" alt width="200" height="200"/>
    <h1 class="h3 mb-3 font-weight-normal">Salir</h1>
    </body>
  </div>
</template>

<script>
export default {
  name: "LogoutView",
  mounted() {
    sessionStorage.removeItem("sessionData");
    window.location.href = "index.html";
  },
};
</script>
