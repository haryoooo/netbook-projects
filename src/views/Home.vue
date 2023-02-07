<template>
  <div id="container">
    <div class="leftContentWrapper">
      <div class="netbookButton">
        <h4>Netbook Community</h4>
      </div>

      <div>
        <h1>Your Solutions For Community!</h1>
      </div>
      <div class="descContent">
        <h4>
          More than 2 billion people in over countries use socibook to stay in
          touch with friends & family.
        </h4>
      </div>
      <div class="buttonWrapper">
        <Buttons :title="buttonTitle.title1" />
        <Buttons :title="buttonTitle.title2" isSecondary="true" />
      </div>
    </div>

    <div class="rightContentWrapper">
      <img src="../assets/person.png" />
    </div>
  </div>
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
      titleMessage: "Welcome to Your Vue.js App",
      flagMessage: false,
      buttonTitle: {
        title1: "About More",
        title2: "Invite Friend",
      },
    };
  },
  // methods: {
  //   toggleShow() {
  //     this.showMessage = !this.showMessage;
  //   },
  // },
};
</script>

<style scoped>
#container {
  max-height: 750px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 0px 100px 0px 100px;
}

.leftContentWrapper {
  display: flex;
  text-align: left;
  flex-direction: column;
  /* gap: 30px; */
  margin: 50px 0px 0px 0px;
}

.netbookButton {
  color: #217bf4;
  width: 177px;
  border-radius: 8px;
  border: 1px solid transparent;
  background-color: #dcebff;
}

.buttonWrapper {
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px 20px 0px 0px;
}

.descContent h4 {
  color: #656464;
  font-weight: 400;
}

.netbookButton h4 {
  text-align: center;
  font-weight: 500;
  margin: 12px 20px 12px 20px;
  font-size: 12px;
}

.leftContentWrapper h1 {
  font-weight: 700;
  font-size: 56px;
}
</style>
