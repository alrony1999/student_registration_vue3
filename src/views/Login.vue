<script setup>
import GuestLayout from "../components/GuestLayout.vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import router from "../router";
const store = useStore();
let errorMsg = ref("");
let user = {
  email: null,
  password: null,
};

function login() {
  store
    .dispatch("user/login", user)
    .then(() => {
      router.push({ name: "adminDashboard" });
    })
    .catch((error) => {
      console.log(error);
    });
}
</script>
<template>
  <GuestLayout>
    <div class="d-flex justify-content-center">
      <div
        class="card mt-5 border-0 shadow p-3 mb-5 bg-body rounded"
        style="width: 20rem"
      >
        <div class="card-body">
          <h1 class="card-title text-center mb-3">Login Form</h1>

          <form class="mt-2" @submit.prevent="login">
            <div class="form-outline mb-4">
              <input
                type="email"
                class="form-control"
                placeholder="Email"
                v-model.trim="user.email"
                autocomplete="on"
                required
              />
            </div>
            <div class="form-outline mb-4">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                v-model.trim="user.password"
                required
              />
            </div>

            <button type="submit" class="btn btn-primary btn-block mb-4">
              Sign in
            </button>
            <div class="text-center">
              <p>
                Not a member?
                <router-link to="/register">Register</router-link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </GuestLayout>
</template>
<style scoped></style>
