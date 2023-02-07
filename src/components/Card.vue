<template>
  <!-- Achievement Data -->
  <div class="cardContainerAchievement" v-if="isAchievement">
    <div class="cardHeader">
      <span><img class="cardImg" :src="item.headerImg" /></span>
      <span
        ><h4>{{ item.headerTitle }}</h4></span
      >
    </div>
    <div class="cardFigure">
      <span><img class="cardFigureImg" :src="item.figureImg" /></span>
      <span
        ><h4>{{ item.figureTitle }}</h4></span
      >
    </div>
    <div class="cardContent">
      <h4>{{ item.content }}</h4>
    </div>
    <div class="cardButton">
      <span
        ><h4>{{ item.buttonTitle }}</h4></span
      >
      <span><img class="cardImg" :src="item.buttonImg" /></span>
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
  // created() {
  //   console.log("test data", this.item); //undefined;
  // },
  props: ["item", "isAchievement"],
  // computed: {
  //   datas: function () {
  //     return this.item;
  //   },
  // },
};
</script>

<style scoped>
.cardContainerAchievement {
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 30px;
  margin: 30px;
}

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

.cardHeader,
.cardContent,
.cardButton {
  display: flex;
  justify-content: left;
  padding: 0px 0px 0px 20px;
  text-align: left;
  width: 350px;
}

.cardContentCommunity {
  display: flex;
  justify-content: left;
  text-align: left;
}

.cardHeader h4 {
  margin-left: 10px;
}

.cardContent,
.cardContentCommunity h4 {
  margin: 0px 10px 10px 0px;
  font-weight: 400;
  font-size: 16px;
  color: #8c8c8c;
}

.cardFigure {
  display: flex;
  justify-content: left;
  padding: 0px 0px 0px 10px;
  text-align: left;
  width: 350px;
}

.cardImg {
  margin: 15px auto;
}

.cardFigureImg {
  margin: 10px auto;
}

.cardButton .cardImg {
  margin: 15px auto;
  padding: 12px 0px 0px 7px;
}
</style>
