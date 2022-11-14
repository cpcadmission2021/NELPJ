<template>
  <q-btn @click="logout()" color="positive" class="text-white" label="Logout" />
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const routes = router.getRoutes();
function logout() {
  router.push("/");
}
</script>

<style></style>
