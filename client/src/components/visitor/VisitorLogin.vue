<template>
  <div>
    <input v-model="username" placeholder="username" />
    <input v-model="password" placeholder="password" />
    <button @click="userOnlogin">Login</button>
  </div>
</template>

<script setup>
//ref for reactivity
import { ref } from "vue";
import { api } from "../../boot/axios.js";

//variable declaration
const username = ref(null);
const password = ref(null);

//onclick function
const userOnlogin = () => {
  //getting values from form storing it to js variable
  const data = {
    username: username.value,
    password: password.value,
  };

  //communitcating with the server
  console.log(data);
  api
    .post("/status", data)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>
<style></style>
