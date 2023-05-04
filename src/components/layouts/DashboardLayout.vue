<template>
    <Navbar />
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
    <Footer />
  </template>
  
  <script setup>
  import Navbar from './navbar.vue'
  import Footer from './footer.vue'
  </script>
  <style scoped></style>