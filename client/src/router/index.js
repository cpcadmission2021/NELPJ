import { route } from "quasar/wrappers";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes";

// import { useRouter, useRoute } from "vue-router";
import { useUserStore } from "../stores/UserStore.js";

// const router = useRouter();

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    history: createHistory(process.env.VUE_ROUTER_BASE),
  });
  // const isAuthenticated = true;

  Router.beforeEach((to, from, next) => {
    const UserStore = useUserStore();
    // UserStore.loginStatus = false;
    // UserStore.role = 0;

    if (UserStore.loginStatus) {
      switch (to.meta.permission) {
        case "admin":
          if (UserStore.role != 1) next({ path: "/member" });
          else next();
          break;

        case "member":
          if (UserStore.role != 0) next({ path: "/admin" });
          else next();
          break;

        default:
          next({ path: "/admin" });
          break;
      }
    } else {
      if (to.matched.some((record) => record.meta.requiresAuth))
        next({ path: "/VisitorLogin" });
      else next();
    }
  });

  return Router;
});
