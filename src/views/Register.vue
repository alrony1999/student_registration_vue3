<script setup>
import GuestLayout from "../components/GuestLayout.vue";
import router from "../router";
import { useStore } from "vuex";
const store = useStore();
let user = {
  name: null,
  email: null,
  password: null,
};
function submitForm() {
  store
    .dispatch("user/register", user)
    .then(() => {
      alert("done");
      router.push({ name: "login" });
    })
    .catch((response) => {
      console.log(response);
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
          <h1 class="card-title text-center mb-3">Register Form</h1>
          <form class="mt-2" @submit.prevent="submitForm">
            <div class="form-outline mb-4">
              <input
                type="text"
                class="form-control"
                placeholder="Name"
                v-model.trim="user.name"
                required
              />
            </div>
            <div class="form-outline mb-4">
              <input
                type="email"
                class="form-control"
                placeholder="Email"
                v-model.trim="user.email"
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
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  </GuestLayout>
</template>
<style scoped></style>
