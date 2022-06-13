<template>
  <div class="mt-3">
    <h1>Logout</h1>
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
