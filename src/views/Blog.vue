<template>
  <div
    id="blog"
    class="mainContainer"
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
  >
    <div class="leftContentWrapper">
      <div class="leftMainContent">
        <h5>Whats NetsBoks?</h5>
        <h1>Why Join to Netbook Social Network?</h1>
        <h4>
          Recent surveys have indicated that small businesses recognise the need
          they have to connect with consumer.
        </h4>
        <div class="leftFooterContent">
          <span><img src="../assets/Blog/Groups.png" /></span>
          <span><img src="../assets/Blog/Messages.png" /></span>
          <span><img src="../assets/Blog/Share.png" /></span>
        </div>
      </div>
    </div>
    <div class="rightContentWrapper" v-if="screenWidth > 1024">
      <div class="leftContent">
        <div>
          <img src="../assets/Blog/community.png" />
        </div>
        <div class="insideRightContent">
          <img src="../assets/Blog/laptop.png" />
          <img src="../assets/Blog/cable.png" />
        </div>
      </div>
    </div>
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
.mainContainer {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  margin: 100px;
}

.leftContent {
  display: flex;
  margin-left: 100px;
  max-width: auto;
}

.leftContentWrapper {
  text-align: left;
  width: 50%;
}

.leftMainContent h5 {
  color: #217bf4;
}

.leftMainContent h1 {
  font-weight: 700;
}

.leftMainContent h4 {
  color: #656464;
  font-weight: 400;
}

.leftFooterContent {
  display: flex;
  flex-direction: column;
}

.leftFooterContent span {
  padding: 5px;
}

.leftContent img {
  margin: 50px auto;
  border-radius: 20px;
}

.insideRightContent img {
  margin: 10px;
}

.rightContentWrapper img {
  width: 220px;
  max-width: auto;
}

@media screen and (max-width: 1344px) {
  .leftContentWrapper {
    width: 100%;
  }

  .rightContentWrapper {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
  }
}

@media screen and (max-width: 640px) {
  .mainContainer {
    display: flex;
    justify-content: left;
    margin: 0px 20px 0px 30px;
  }

  .leftContentWrapper {
    width: 100%;
  }
  .leftFooterContent {
    width: 50%;
  }

  .rightContentWrapper {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
}
</style>
