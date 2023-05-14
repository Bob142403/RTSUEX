<template>
  <nav-bar></nav-bar>
  <div class="container ml-auto mr-auto pb-3">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
</script>
