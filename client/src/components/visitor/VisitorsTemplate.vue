<template>
  <VHeaderMenu />
  <GeneralFooter />
</template>
<script setup>
import VHeaderMenu from "./VHeaderMenu.vue";
import GeneralFooter from "../generals/NelpjFooter.vue";
import { onBeforeMount, ref } from "vue";

const validate = () => {
  console.log("test arrow func");
};

setTimeout(function () {
  console.log("test");
}, 1000);

setTimeout(validate, 1000);

//side drawer
const leftDrawerOpen = ref(false);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
<style></style>
