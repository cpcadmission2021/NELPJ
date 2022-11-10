<template>
  <div>
    <!-- <input v-model="username" placeholder="username" />
    <input v-model="password" placeholder="password" /> -->
    <q-input
      v-model="username"
      :loading="LoadUsername"
      :disable="LoadUsername"
      label="username"
    />
    <q-input
      v-model="password"
      :loading="LoadPassword"
      :disable="LoadPassword"
      label="password"
    />
    <q-btn @click="userOnlogin" :loading="LoadLogin" :disable="LoadLogin">Login</q-btn>
  </div>
</template>

<script setup>
//ref for reactivity
import { ref } from "vue";
import { api } from "../../boot/axios.js";
import { useRouter, useRoute } from "vue-router";

const routes = useRoute();
const router = useRouter();

//variable declaration
const username = ref(null);
const password = ref(null);

const LoadUsername = ref(false);
const LoadPassword = ref(false);
const LoadLogin = ref(false);

//onclick function
const userOnlogin = () => {
  //getting values from form storing it to js variable
  LoadUsername.value = true;
  LoadPassword.value = true;
  LoadLogin.value = true;
  const data = {
    username: username.value,
    password: password.value,
  };

  //communitcating with the server
  console.log(data);
  // api
  //   .post("/login", data)
  //   .then((response) => {
  //     console.log(response.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // api.get("/member", data).then((response) => {
  //   console.log(response.data);
  //   router.push("/member");
  // });

  // api
  //   .post("/login", data)
  //   .then((response) => {
  //     console.log(response.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  api.get("/VisitorLogin", data).then((response) => {
    if (response == 1) {
      router.push("/admin");
    } else {
      router.push("/VisitorLogin");
    }
    // console.log(response.data);
    router.push("/member");
  });
};
</script>
<style></style>
