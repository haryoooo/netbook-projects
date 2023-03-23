<template>
  <div
    id="news"
    class="containerNews"
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
  >
    <div class="headerNews">
      <div>
        <h5>Get Our Application</h5>
      </div>
      <div>
        <h2>You Can Easily Find This App…!</h2>
      </div>
    </div>
    <div>
      <div class="cardNews">
        <div class="containerCard">
          <div class="card" v-for="item in items">
            <CardNews :item="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { data } from "@/helpers/cardNews";
import CardNews from "../components/CardNews.vue";

export default {
  components: {
    CardNews,
  },

  data() {
    return {
      items: data,
    };
  },
};
</script>
<style scoped>
.containerNews {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px 50px;
  margin-top: 100px;
}

.headerNews h5 {
  color: #217bf5;
}

.cardNews {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 100px;
}

.containerCard {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.card {
  width: 400px;
  max-width: 100%;
}

@media screen and (max-width: 1280px) {
  .containerCard {
    display: flex;
    justify-content: space-evenly;
  }
}
</style>
