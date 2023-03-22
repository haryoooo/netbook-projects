<template>
  <div class="containerCards">
    <div class="imgSection">
      <img :src="item.picture" alt="newsPicture" style="border-radius: 10px" />
    </div>
    <div class="headerSection">
      <div style="align-self: center; margin-right: 15px">
        <img src="../assets/News/line.png" />
      </div>
      <div>
        <h4>{{ item.header }}</h4>
      </div>
    </div>
    <div>
      <h5>
        {{ item.content }}
      </h5>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item"],
};
</script>
<style scoped>
.containerCards {
  border: 1px solid transparent;
  padding: 10px;
  margin: 10px 50px 50px 50px;
}

.containerCards:hover {
  transform: scale(1.1);
}

.imgSection {
  display: flex;
  justify-content: center;
}

.imgSection img {
  max-width: 100%;
  width: 100%;
}

.headerSection {
  display: flex;
  justify-content: flex-start;
  text-align: center;
}

.containerCards div {
  text-align: left;
}

.containerCards h5 {
  color: gray;
  word-wrap: break-word;
}
</style>
