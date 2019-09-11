<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <img src="~/assets/nav-logo.png" />
  </div>
  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <NuxtLink class="navbar-item" to="/instructions">
       Instructions
     </NuxtLink>
     <NuxtLink class="navbar-item" to="/users">
      Users Page
    </NuxtLink>
    </div>
  </div>
</nav>
</template>

<script>
  export default {
    components: {
    }
  }
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 75px;
  border-bottom: solid #c0c3cf 2px;
}
.navbar-brand{
  width: 75px;
}

</style>
