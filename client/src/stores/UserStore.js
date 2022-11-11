import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    // name: "",
    role: 0,
    loginStatus: false,
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    //     increment() {
    //       this.counter++;
    //     },
    //     decrement() {
    //       this.counter--;
    //     },
  },
});
