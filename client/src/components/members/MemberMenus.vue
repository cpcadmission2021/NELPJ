<template>
  <!-- <BannerComponent /> -->
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="row">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" v-for="link in links" :key="link.name">
              <RouterLink class="nav-link" :to="link.to">
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
// import BannerComponent from '../BannerComponent.vue'

//imports your routes from folder router/routes.
import { useRoute, useRouter } from "vue-router";

//declaring imported items
const route = useRoute();
const router = useRouter();

//stores properties of routes like path and name to array
const links = [];

console.clear();
//checks if you get your routes
console.log(router.getRoutes());

const routes = router.getRoutes();

routes.forEach((r) => {
  if (r.meta.MembersOnly) {
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

console.log(links);

// console.log(router.getRoutes());
</script>
<style scoped>
nav li.a.router-link-active,
nav li .router-link-exact-active {
  color: darkgreen;
  font-weight: bolder;
}
</style>
