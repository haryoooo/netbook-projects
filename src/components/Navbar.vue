<template>
  <!-- Web Version -->
  <div class="mainContainer" v-if="screenWidths > 648">
    <div class="containerNavbar">
      <div class="navbarWrapper">
        <img src="../assets/logo.png" />
        <span class="navbarLinkText" @click="scrollInto('home')">Home</span>
        <span class="navbarLinkText" @click="scrollInto('community')">
          Community
        </span>
        <span class="navbarLinkText" @click="scrollInto('blog')">Blog</span>
        <span class="navbarLinkText" @click="scrollInto('members')"
          >Members</span
        >
      </div>
    </div>
  </div>
  <!-- End Of Web Version -->

  <!-- Mobile Version -->
  <div id="sidemenu" v-if="screenWidths < 648">
    <div>
      <img src="../assets/logo.png" />
    </div>
    <div>
      <button
        class="sidemenu__btn"
        @click="navOpen = !navOpen"
        v-bind:class="{ active: navOpen }"
      >
        <span class="top"></span>
        <span class="mid"></span>
        <span class="bottom"></span>
      </button>
      <transition name="translateX">
        <nav v-show="navOpen">
          <div class="sidemenu__wrapper">
            <ul class="sidemenu__list">
              <li @click="scrollInto('home')" class="sidemenu__item">
                <span>Home</span>
              </li>
              <li @click="scrollInto('community')" class="sidemenu__item">
                <span>Community</span>
              </li>
              <li @click="scrollInto('blog')" class="sidemenu__item">
                <span>Blog</span>
              </li>
              <li @click="scrollInto('members')" class="sidemenu__item">
                <span>Members</span>
              </li>
            </ul>
          </div>
        </nav>
      </transition>
    </div>
  </div>
  <!-- End Of Mobile Version -->
</template>

<script>
import NavbarContent from "./NavbarContent.vue";

export default {
  name: "Navbar",
  components: {
    NavbarContent,
  },
  data() {
    return {
      el: "#sidemenu",
      navOpen: false,
      screenWidths: 0,
    };
  },
  mounted() {
    // console.log("document", document.getElementById("achievement"));
    this.updateScreenWidth();
    this.onScreenResize();
  },
  methods: {
    scrollInto(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
      });
      this.navOpen = !this.navOpen;
    },

    onScreenResize() {
      window.addEventListener("resize", () => {
        this.updateScreenWidth();
      });
    },
    updateScreenWidth() {
      this.screenWidths = window.innerWidth;
    },
  },
};
</script>

<style scoped>
/* Web Version */
.mainContainer {
  border-bottom: 0.5px solid transparent;
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
  cursor: pointer;
  font-size: 16px;
  margin: 10px 0px 0px 20px;
  color: black;
  text-decoration: none;
}

.header {
  border-bottom: 1px solid #e2e8f0;
}

/* End of Web Version */

/* Mobile Version */
@media only screen and (max-width: 640px) {
  #sidemenu {
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 2;
    background-color: white;
    width: 100%;
  }

  #sidemenu div:nth-child(1) {
    margin: 10px 0px 0px 30px;
  }

  #sidemenu nav {
    width: 200px;
    background: black;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
  }
  #sidemenu .sidemenu__btn {
    display: block;
    width: 50px;
    height: 50px;
    background: white;
    border: none;
    position: relative;
    z-index: 100;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    outline: none;
  }
  #sidemenu .sidemenu__btn span {
    display: block;
    width: 20px;
    height: 2px;
    margin: auto;
    background: black;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all 0.4s ease;
  }
  #sidemenu .sidemenu__btn span.top {
    transform: translateY(-8px);
  }
  #sidemenu .sidemenu__btn span.bottom {
    transform: translateY(8px);
  }
  #sidemenu .sidemenu__btn.active .top {
    transform: rotate(-45deg);
  }
  #sidemenu .sidemenu__btn.active .mid {
    transform: translateX(-20px) rotate(360deg);
    opacity: 0;
  }
  #sidemenu .sidemenu__btn.active .bottom {
    transform: rotate(45deg);
  }
  #sidemenu .sidemenu__wrapper {
    /* padding-top: 50px; */
  }
  #sidemenu .sidemenu__list {
    padding-top: 50px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  button {
    align-self: flex-end;
  }
  #sidemenu .sidemenu__item span {
    text-decoration: none;
    line-height: 1.6em;
    font-size: 1.1em;
    padding: 0.5em;
    display: block;
    color: white;
    transition: 0.4s ease;
  }
  #sidemenu .sidemenu__item span:hover {
    /* background: lightgrey;
    color: dimgrey; */
    cursor: pointer;
  }
  .translateX-enter {
    transform: translateX(-200px);
    opacity: 0;
  }

  .translateX-enter-active,
  .translateX-leave-active {
    transform-origin: top right 0;
    transition: 0.2s ease;
  }

  .translateX-leave-to {
    transform: translateX(-200px);
    opacity: 0;
  }
}
/* End Of Mobile Version */
</style>
