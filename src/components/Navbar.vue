<template>
  <div class="mainContainer">
    <div class="containerNavbar">
      <div class="navbarWrapper">
        <img src="../assets/logo.png" />
        <router-link class="navbarLinkText" to="/">Home</router-link>
        <router-link class="navbarLinkText" to="/community">
          Community
        </router-link>
        <router-link class="navbarLinkText" to="/blog">Blog</router-link>
        <router-link class="navbarLinkText" to="/events">Events</router-link>
      </div>
      <div class="navbarContent">
        <NavbarContent />
      </div>
    </div>
  </div>
  <!-- <router-view /> -->
</template>

<script>
import NavbarContent from "./NavbarContent.vue";

export default {
  name: "Navbar",
  components: {
    NavbarContent,
  },
};
</script>

<style scoped>
.mainContainer {
  border-bottom: 0.5px solid grey;
}

.containerNavbar {
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 0px 100px 0px 100px;
}

img {
  margin: 0px 20px 0px 0px;
}

.navbarWrapper {
  display: flex;
  justify-content: space-between;
  margin: 20px 20px 20px 0px;
  padding: 20px 20px 20px 0px;
  list-style: none;
}

.navbarLinkText {
  font-family: "Inter";
  font-weight: 500;
  font-size: 16px;
  margin: 10px 0px 0px 20px;
  color: black;
  text-decoration: none;
}

.navbarContent {
  margin-top: 30px;
}
</style>
