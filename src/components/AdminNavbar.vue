<script setup>
import { RouterLink } from "vue-router";
import { useStore } from "vuex";
import router from "../router";
const store = useStore();
const logout = () => {
  if (!window.confirm("Yes")) {
    return;
  }
  store
    .dispatch("user/logout")
    .then(() => {
      router.push({ name: "login" });
    })
    .catch((error) => {
      console.log(error.message);
    });
};
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Navbar</router-link>
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0 ml-5">
        <li class="nav-item">
          <a href="" class="nav-link" type="" @click.prevent="logout()"
            >Logout</a
          >
        </li>
        <li class="nav-item"><h1 class="nav-link">Admin</h1></li>
      </ul>
    </div>
  </nav>
</template>
<style scoped></style>
