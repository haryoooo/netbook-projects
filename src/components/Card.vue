<template>
  <!-- Achievement Data -->
  <div class="cardContainerAchievement" v-if="isAchievement">
    <div class="wrapperHeaderAchievement">
      <div class="headerImgAchievement">
        <img :src="item.headerImg" alt="starIcon" />
      </div>
      <div>
        <h4>{{ item.headerTitle }}</h4>
      </div>
    </div>
    <div class="wrapperHeaderAchievement">
      <div class="headerImgAchievement2">
        <img :src="item.figureImg" alt="peopleIcon" />
      </div>
      <div class="wrapperHeaderAchievement">
        <h4>{{ item.figureTitle }}</h4>
      </div>
    </div>
    <div class="wrapperContentAchievement">
      <h4>
        {{ item.content }}
      </h4>
    </div>
  </div>
  <!-- End of Achievement Data -->

  <!-- Community Data -->
  <div class="cardContainerCommunity" v-if="!isAchievement">
    <div class="cardFigure">
      <span><img class="cardFigureImg" :src="item.thumbnail" /></span>
      <span>
        <h4 style="margin: 20px 0px 10px 0px">{{ item.title }}</h4>

        <div class="cardContentCommunity">
          <h4>{{ item.text }}</h4>
        </div>
      </span>
    </div>
  </div>
  <!-- End of Community Data -->
</template>

<script>
export default {
  props: ["item", "isAchievement"],
};
</script>

<style scoped>
/* Achievement */
.cardContainerAchievement {
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 10px;
  max-width: auto;
  margin: 20px 0px 20px 0px;
}

.wrapperHeaderAchievement h4 {
  margin-left: 10px;
}

.wrapperHeaderAchievement {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: left;
}

.headerImgAchievement {
  margin: 15px 0px 0px 10px;
}

.headerImgAchievement2 {
  margin: 10px 0px 0px 0px;
}

.wrapperContentAchievement {
  display: flex;
  word-wrap: break-word;
  text-align: left;
  margin: 0px 10px 0px 10px;
  font-weight: 400;
  color: grey;
}

/* End Of achievement */

/* community */

.cardContainerCommunity {
  border: 1px solid lightgray;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 10px 50px 10px;
}

.cardContainerCommunity:hover {
  transform: scale(1.03);
}

.cardContentCommunity {
  display: flex;
  justify-content: left;
  text-align: left;
}

.cardContent,
.cardContentCommunity h4 {
  margin: 0px 10px 10px 0px;
  font-weight: 400;
  color: #8c8c8c;
}

.cardFigure {
  display: flex;
  justify-content: left;
  padding: 0px 0px 0px 10px;
  text-align: left;
  width: 350px;
}

/* End of Community */

/* Mobile Version */
@media screen and (max-width: 640px) {
  .cardContainerAchievement {
    margin: 20px;
  }

  .cardContainerCommunity {
    padding: 10px;
    margin: 0px 0px 30px 0px;
  }

  .cardFigure {
    padding: 0px;
    width: fit-content;
  }
}
/* End of Mobile Version */
</style>
