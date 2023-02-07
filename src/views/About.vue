<template>
  <div>About Page</div>
  <div v-for="item in items" :key="item.id">
    <h4>{{ item.title }}</h4>
  </div>
</template>
<script>
import { url } from "../helpers/urlConfig";

export default {
  name: "About",
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    fetch(`${url}/photos`)
      .then((res) => res.json())
      .then((value) => value.slice(0, 50))
      .then((data) => (this.items = data))
      // {
      //   const sliceValue = value.slice(0, 50);

      //   console.log(sliceValue);
      //   this.items.concat(sliceValue);
      // })
      .catch((err) => alert(err));
  },
};
</script>
<style scoped>
  div {
    width: 100%;
  }
</style>
