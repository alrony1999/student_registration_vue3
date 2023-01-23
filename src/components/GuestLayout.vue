<script setup>
import Navbar from "./Navbar.vue";
</script>
<template>
  <header>
    <Navbar />
  </header>
  <main>
    <div class="container">
      <slot></slot>
    </div>
  </main>
</template>
<style scoped></style>
