import { createApp } from "vue";
import App from "./App.vue";
// Configuring Router for my application
import { createApp } from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

// **** Setting Up Vue Router inside main.js file **** //

const router = VueRouter.createWebHistory(process.env.BASE_URL); // process.env.BASE_URL Its a variable containing the base url of your application

// Adding Router to your Vue app using .use method
const app = createApp(App);
app.use(router); // Adding history mode configuration to your app

// To display matching page for given route use router-view component

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>;

app.mount("#app");
