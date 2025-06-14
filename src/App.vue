<template>
  <header>
    <Header />
    <BurgerResponsive />
  </header>

  <main>
    <RouterLink to="/"></RouterLink>
    <RouterView />
  </main>
</template>




<script setup>
import Header from "./components/header.vue"
import BurgerResponsive from "./components/burger.vue"
</script>