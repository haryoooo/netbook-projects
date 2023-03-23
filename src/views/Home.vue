<template>
  <div
    id="home"
    data-aos="fade-right"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
  >
    <div class="leftContentWrapper">
      <div class="netbookButton">
        <h5>Netbook Community</h5>
      </div>
      <div>
        <h1>Your Solutions For Community!</h1>
      </div>
      <div class="descContent">
        <h4>
          More than 2 billion people in over countries use socibook to stay in
          touch with friends & family. The scope the Social Media becomes
          crucial is helps the business to directly engage with their needs and
          wants.
        </h4>
      </div>
      <!-- <div class="buttonWrapper">
        <Buttons :title="buttonTitle.title1" />
        <Buttons :title="buttonTitle.title2" isSecondary="true" />
      </div> -->
    </div>

    <div class="rightContentWrapper" v-if="screenWidth > 1024">
      <img src="../assets/person.png" />
    </div>
  </div>
</template>
<script>
import Buttons from "../components/Button.vue";

export default {
  name: "Home",
  components: {
    Buttons,
  },
  data() {
    return {
      screenWidth: 0,
      flagMessage: false,
      // buttonTitle: {
      //   title1: "About More",
      //   title2: "Invite Friend",
      // },
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
#home {
  max-height: 750px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 0px 100px 0px 100px;
}

.leftContentWrapper {
  display: flex;
  justify-content: space-around;
  text-align: left;
  flex-direction: column;
  margin: 50px 0px 0px 0px;
}

.netbookButton {
  color: #217bf4;
  width: fit-content;
  border-radius: 8px;
  border: 1px solid transparent;
  margin-bottom: 30px;
  background-color: #dcebff;
}

.descContent {
  width: 80%;
  margin-bottom: 50px;
}

.descContent h4 {
  color: #656464;
  font-weight: 400;
}

.netbookButton h5 {
  text-align: center;
  margin: 12px 20px 12px 20px;
}

.leftContentWrapper h2 {
  font-weight: 700;
  font-size: 56px;
}

.rightContentWrapper {
  display: flex;
  width: auto;
}

.rightContentWrapper img {
  width: 1200px;
  height: 450px;
  max-height: auto;
  max-width: 100%;
}

@media screen and (max-width: 640px) {
  #home {
    max-height: 750px;
    display: flex;
    flex-direction: row;
    margin: 0px 20px 0px 30px;
    padding-top: 30px;
  }

  .descContent {
    width: 100%;
    word-break: break-all;
  }
}
</style>
<!-- 
:style="[
screenWidth < 648
  ? { 'font-size': '32px' }
  : { 'font-size': '48px' },
]" -->

<!-- <div v-if="showMessage">
    <HelloWorld>
      <h1>{{ titleMessage }}</h1>
      <template v-slot:links>
        <div>
          <a href="#">Test Link</a>
        </div>
      </template>
    </HelloWorld>
  </div> -->
<!-- <button @click="toggleShow">See Message</button> -->
