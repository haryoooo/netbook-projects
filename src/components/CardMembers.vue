<template>
  <div class="cardWrapper">
    <div class="cardProfile">
      <img :src="item.profile" alt="picture" />
    </div>
    <div class="cardProfileName">
      {{ item.name }}
    </div>
    <div class="cardProfileUsername">
      {{ item.username }}
    </div>
  </div>
</template>
<script>
export default {
  props: ["item"],
};
</script>

<style scoped>
.cardWrapper {
  border: 1px solid transparent;
  border-radius: 14px;
  padding: 10px;
  margin: 10px 20px;
}

.cardProfile {
  border: 50%;
}

.cardWrapper:hover {
  transform: scale(1.1);
}

.cardProfile img {
  width: 150px;
  height: 150px;
}

.cardProfileName {
  margin: 10px;
}
</style>
