<template>
  <nav class="row">
    <div class="col-2">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class=""></span>
      </button>
      <div class="">
        <div class="" id="navbarSupportedContent">
          <ul class="">
            <li class="" v-for="link in links" :key="link.name">
              <RouterLink class="nav-link" :to="link.to">
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  {{ counterStore.counter }}
</template>
<script setup>
// import BannerComponent from '../BannerComponent.vue'

//imports your routes from folder router/routes.
import { useRoute, useRouter } from "vue-router";
import { useCounterStore } from "../../stores/example-store.js";
//declaring imported items
const route = useRoute();
const router = useRouter();
const counterStore = useCounterStore();
//s
const links = [];

const routes = router.getRoutes();

routes.forEach((r) => {
  if (r.meta.visitorOnly) {
    r.children.forEach((child) => {
      if (child.path == "") {
        links.push({
          to: "/",
          name: child.name,
        });
      } else {
        links.push({
          to: child.path,
          name: child.name,
        });
      }
    });
  }
});
</script>
<style scoped>
li {
  list-style-type: none;
  font-weight: bolder;
  margin: 10px;
  color: black;
  float: left;
}
nav li.a.router-link-active,
nav li .router-link-exact-active {
  color: darkgreen;
  font-weight: bolder;
}
</style>
