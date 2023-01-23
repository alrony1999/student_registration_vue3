<script setup>
import Navbar from "./AdminNavbar.vue";
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
