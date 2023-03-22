<template>
  <div class="ProviderApp">
    <div id="topContent">
      <Navbar />
      <Home />
    </div>
    <Blog />
    <Achievement />
    <Community />
    <Members />
    <Apps />
    <News />
    <Footer />
  </div>
</template>

<script>
import Achievement from "./views/Achievement.vue";
import Community from "./views/Community.vue";
import Navbar from "./components/Navbar.vue";
import Blog from "./views/Blog.vue";
import Members from "./views/Members.vue";
import Apps from "./views/Apps.vue";
import News from "./views/News.vue";
import Footer from "./components/Footer.vue";
import Home from "./views/Home.vue";

export default {
  name: "App",
  components: {
    Achievement,
    Community,
    Members,
    Navbar,
    Apps,
    News,
    Footer,
    Home,
    Blog,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

body {
  padding: 0px;
  margin: 0px;
}

h4 {
  font-size: 18px;
}

h5 {
  font-size: 16px;
}

#app {
  font-family: "Inter";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0px;
  margin: 0px;
  overflow: hidden;
}

#topContent {
  padding: 0%;
  margin: 0%;
  background-image: url(./assets/base.png);
  background-size: cover;
  margin-bottom: 100px;
}

@media screen and (max-width: 640px) {
  p {
    font-size: 12px !important;
  }

  h1 {
    font-size: 30px !important;
  }

  h2 {
    font-size: 28px !important;
  }

  h3 {
    font-size: 24px !important;
  }

  h4 {
    font-size: 16px !important;
  }

  h5 {
    font-size: 14px !important;
  }
}
</style>
