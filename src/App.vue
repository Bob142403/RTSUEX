<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <nav-bar></nav-bar>
  <div class="container ml-auto mr-auto">
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
