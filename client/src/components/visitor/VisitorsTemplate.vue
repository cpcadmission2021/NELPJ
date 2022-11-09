<template>
  <BannerComponent />
  <VisitorMenus />
  <RouterView />
  <NELPJFooter />
</template>
<script setup>
import BannerComponent from "../generals/BannerComponent.vue";
import VisitorMenus from "./VisitorMenus.vue";
import NELPJFooter from "../generals/NELPJFooter.vue";

const validate = () => {
  console.log("test arrow func");
};

setTimeout(function () {
  console.log("test");
}, 1000);

setTimeout(validate, 1000);
</script>
<style></style>
