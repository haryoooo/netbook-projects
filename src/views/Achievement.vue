<template>
  <div id="achievement">
    <div
      class="cardWrapper"
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      <div class="cardContainer" v-for="item in cardItem">
        <Card :item="item" :isAchievement="isAchievement" />
      </div>
      <div class="achievementContent">
        <h5>Our Achievement</h5>
        <h2>We are Connecting You The Digital Life.</h2>
        <h4>
          The scope the Social Media becomes crucial Is helps the business to
          directly engage with their needs and wants.
        </h4>
        <!-- <Buttons class="buttonAchievement" :title="tzitleAchievement" /> -->
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
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
}

.cardContainer {
  width: 30%;
  max-width: 100%;
}

.achievementContent {
  display: flex;
  width: fit-content;
  flex-direction: column;
  width: 30%;
  max-width: 100%;
  text-align: left;
  margin: 30px 0px 10px 0px;
}

.achievementContent h5 {
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
  margin: 0px 0px 20px 10px;
}

/* Responsive */
@media screen and (max-width: 1280px) {
  .cardWrapper {
    display: flex;
    padding: 10px;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap-reverse;
  }

  .achievementContent {
    display: flex;
    width: fit-content;
    flex-direction: column;
    max-width: 100%;
    text-align: left;
    margin: 30px 90px 0px 90px;
  }
}

@media screen and (max-width: 640px) {
  .cardWrapper {
    margin-top: 50px;
    padding: 10px 10px 10px 0px;
  }

  .cardContainer {
    width: 100%;
  }

  .achievementContent {
    margin: 30px 0px 10px 20px;
  }

  .achievementContent h2 {
    line-height: 32px;
    font-size: 28px;
  }

  .achievementContent h4 {
    line-height: 20px;
    font-size: 14px;
  }
}
</style>
