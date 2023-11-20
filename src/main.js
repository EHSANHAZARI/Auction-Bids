import { createApp } from "vue";
import App from "./App.vue";
import { createWebHistory, createRouter } from "vue-router"; // Import createWebHistory and createRouter
import MainPage from "./components/MainPage.vue";
import AuctionDetailPage from "./components/AuctionDetailPage.vue";
import NotFoundPage from "./components/NotFoundPage.vue";
// **** Setting Up Vue Router inside main.js file **** //

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    // Define your routes here
    {
      path: "/",
      component: MainPage,
    },
    {
      path: "/auction-details",
      component: AuctionDetailPage,
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFoundPage,
    },
  ],
});

// Adding Router to your Vue app using .use method
const app = createApp(App);
app.use(router); // Adding history mode configuration to your app

// To display matching page for a given route, use router-view component

app.mount("#app");
