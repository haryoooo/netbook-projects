<template>
  <div class="communityContent">
    <p>Our Community</p>
    <h2>Community Main Feature.</h2>
    <h5>
      The wise man therefore always holds in these matters to this principle of
      selection.
    </h5>
  </div>
  <div class="communityCardContent">
  <div v-for="item in cardItem">
    <Card :item="item" :isAchievement="isAchievement" />
  </div>
  </div>
</template>
<script>
import { data } from "../helpers/communityData";
import Card from "../components/Card.vue";

export default {
  components: {
    Card,
  },

  data() {
    return {
      cardItem: data,
      isAchievement: false,
    };
  },

  // mounted() {
  //   console.log("data", this.cardItem);
  // },
};
</script>

<style scoped>
.communityContent {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;
  text-align: center;
}

.communityContent p {
  margin: 5px 10px 10px 10px;
  color: #217bf4;
}

.communityContent h2 {
  margin: 10px;
  font-weight: 700;
  font-size: 36px;
  line-height: 48px;
}

.communityContent h5 {
  margin: 10px auto;
  max-width: 400px;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #656464;
}

.communityCardContent {
  padding: 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
