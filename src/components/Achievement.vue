<template>
  <div>
    <div class="cardWrapper">
      <div v-for="item in cardItem">
        <Card :item="item" :isAchievement="isAchievement" />
      </div>
      <div class="achievementContent">
        <p>Our Achievement</p>
        <h2>We are Connecting You The Digital Life.</h2>
        <h4>
          The scope the Social Media becomes crucial Is helps the business to
          directly engage with their needs and wants.
        </h4>
        <Buttons class="buttonAchievement" :title="titleAchievement" />
      </div>
    </div>
  </div>
</template>
<script>

import { data } from "../helpers/cardData";
import Card from "../components/Card.vue";
import Buttons from "../components/Button.vue";

export default {
  name: "Achievement",
  components: {
    Card,
    Buttons,
  },
  data() {
    return {
      cardItem: data,
      isAchievement: true,
      titleAchievement: "Discover Me",
    };
  },
  mounted() {
    console.log("card", this.cardItem);
  },
};
</script>
<style scoped>
.cardWrapper {
  display: flex;
  padding: 10px;
  justify-content: space-between;
  flex-direction: row;
}

.achievementContent {
  display: flex;
  width: fit-content;
  flex-direction: column;
  text-align: left;
  margin: 30px 30px 0px 30px;
}

.achievementContent p {
  margin: 5px 10px 10px 10px;
  color: #217bf4;
}

.achievementContent h2 {
  margin: 10px;
  font-weight: 700;
  font-size: 36px;
  line-height: 48px;
}

.achievementContent h4 {
  margin: 10px 10px 30px 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #656464;
}

.buttonAchievement {
  margin: 0px 0px 0px 10px;
}
</style>
