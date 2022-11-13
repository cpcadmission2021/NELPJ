<template>
  <BannerComponent />
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> NELPJ </q-toolbar-title>

        <div>New Earth of Love Peace And Joy</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Menus </q-item-label>

        <!-- <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" /> -->
        <!-- <myRoutes v-for="routes in router" :key="routes.name" v-bind="routes" /> -->
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
  <NELPJFooter />
</template>

<script setup>
import { defineComponent, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
// import EssentialLink from "../components/EssentialLink.vue";
import BannerCompponent from "../components/generals/BannerComponent.vue";
import NELPJFooter from "../components/generals/NELPJFooter.vue";

// import myRoutes from "../router/myRoutes.js";

// const linksList = [
//   {
//     title: "Home",
//     caption: "quasar.dev",
//     icon: "home",
//     component: "../components/visitor/Homepage.vue",
//     // link: "localhost:9001/NELPJ/client/compoonents/visitor/Homepage.vue",
//   },
//   {
//     title: "Testimonials",
//     caption: "github.com/quasarframework",
//     icon: "book",
//     link: "https://github.com/quasarframework",
//   },
//   {
//     title: "Discord Chat Channel",
//     caption: "chat.quasar.dev",
//     icon: "chat",
//     link: "https://chat.quasar.dev",
//   },
//   {
//     title: "Forum",
//     caption: "forum.quasar.dev",
//     icon: "record_voice_over",
//     link: "https://forum.quasar.dev",
//   },
//   {
//     title: "Twitter",
//     caption: "@quasarframework",
//     icon: "rss_feed",
//     link: "https://twitter.quasar.dev",
//   },
//   {
//     title: "Facebook",
//     caption: "@QuasarFramework",
//     icon: "public",
//     link: "https://facebook.quasar.dev",
//   },
//   {
//     title: "Quasar Awesome",
//     caption: "Community Quasar projects",
//     icon: "favorite",
//     link: "https://awesome.quasar.dev",
//   },
// ];

// const name = "MainLayout";
// const components = router;
const leftDrawerOpen = ref(false);
const routes = useRoute();

//       toggleLeftDrawer() {
//         leftDrawerOpen.value = !leftDrawerOpen.value;
//       },
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
