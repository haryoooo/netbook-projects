<template>
  <div>
    <div id="topContent">
      <Navbar />
      <Home />
    </div>
    <Blog />
    <Achievement />
    <Community />
    <Members />
  </div>
</template>

<script>
import Achievement from "./components/Achievement.vue";
import Community from "./components/Community.vue";
import Navbar from "./components/Navbar.vue";
import Blog from "./components/Blog.vue";
import Members from "./components/Members.vue";
import Home from "./views/Home.vue";

export default {
  name: "App",
  components: {
    Achievement,
    Community,
    Members,
    Navbar,
    Home,
    Blog,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

#app {
  font-family: "Inter";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#topContent {
  background-image: url(./assets/base.png);
  margin-bottom: 100px;
}
</style>
