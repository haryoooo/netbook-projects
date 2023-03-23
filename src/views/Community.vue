<template>
  <div
    id="community"
    data-aos="fade-in"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
  >
    <div class="communityContent">
      <h5>Our Community</h5>
      <h1>Community Main Feature.</h1>
      <h4>
        The wise man therefore always holds in these matters to this principle
        of selection.
      </h4>
    </div>
    <div class="communityCardContent">
      <div v-for="item in cardItem">
        <Card :item="item" :isAchievement="isAchievement" />
      </div>
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

.communityContent h5 {
  margin: 5px 10px 10px 10px;
  color: #217bf4;
}

.communityContent h1 {
  margin: 10px;
  font-weight: 700;
  line-height: 48px;
}

.communityContent h4 {
  margin: 10px auto;
  max-width: 400px;
  font-weight: 400;
  line-height: 28px;
  color: #656464;
}

.communityCardContent {
  padding: 50px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
}

/* Mobile Version */
@media screen and (max-width: 640px) {
  .communityContent h1 {
    margin: 10px;
    font-weight: 700;
    line-height: 32px;
  }

  .communityContent h5 {
    padding: 0px 20px 0px 20px;
    line-height: 20px;
  }
  /* End of Mobile Version */
}
</style>
