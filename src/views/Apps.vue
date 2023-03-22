<template>
  <div
    id="apps"
    class="containerApps"
    data-aos="fade-right"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
  >
    <div class="wrapperAppsLeft">
      <div>
        <h5>Get Our Application</h5>
      </div>
      <div>
        <h2>You Can Easily Find This App…!</h2>
      </div>
      <div>
        <h4>
          I say chap that’s suing lavatory chip shop gosh off his smashing boot
          are you taking the piss posh loo brilliant.
        </h4>
      </div>
      <div class="wrapperImg">
        <div>
          <img
            style="margin-right: 10px"
            class="imgApps"
            src="../assets/Apps/appstore.png"
            alt="appstore"
          />
        </div>
        <div>
          <img
            class="imgApps"
            src="../assets/Apps/playstore.png"
            alt="playstore"
          />
        </div>
      </div>
    </div>
    <div v-if="screenWidth > 1024" class="wrapperAppsRight">
      <div class="containerApps">
        <img src="../assets/Apps/screen.png" alt="phone" />
      </div>
    </div>
    <!-- {{ screenWidth }} -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      screenWidth: 0,
    };
  },
  mounted() {
    this.updateScreenWidth();
    this.onScreenResize();
  },
  methods: {
    onScreenResize() {
      window.addEventListener("resize", () => {
        this.updateScreenWidth();
      });
    },
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    },
  },
};
</script>
<style scoped>
.containerApps {
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color: #e5f0fd;
  margin-top: 50px;
}

.wrapperAppsLeft {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  padding: 100px;
  width: 50%;
}

.imgApps {
  width: 150px;
  height: 50px;
}

.wrapperAppsLeft h2 {
  color: #0a093d;
  font-weight: 700;
  padding: 0%;
  margin: 0%;
}

.wrapperAppsLeft h5 {
  color: #217bf4;
}

.wrapperAppsLeft h4 {
  color: #656464;
}

.wrapperImg {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 20px;
}

.wrapperAppsRight {
  display: flex;
}

.containerApps {
  padding-bottom: 0px;
}

.containerApps img {
  height: auto;
  max-width: 100%;
  padding-bottom: 0px;
}

/* Tablet Version */
@media screen and (max-width: 1024px) {
  .wrapperAppsLeft {
    width: 100%;
  }
}

/* Mobile Version */
@media screen and (max-width: 640px) {
  .containerApps {
    display: flex;
    justify-content: left;
    flex-direction: row;
    padding: 0px;
    background-color: #e5f0fd;
    margin-top: 50px;
    padding: 30px 0px 30px 0px;
  }

  .wrapperAppsLeft {
    padding: 20px 30px 20px 30px;
    max-width: 100%;
  }

  .wrapperImg {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    margin-top: 0px;
  }

  .imgApps {
    width: 100px;
    height: 50px;
  }
}
/* End of Mobile Version */
</style>
