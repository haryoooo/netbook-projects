import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Community from "../components/Community.vue";
import Blog from "../components/Blog.vue";
import Events from "../components/Events.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/community",
    name: "Community",
    component: Community,
  },
  {
    path: "/events",
    name: "Events",
    component: Events,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
