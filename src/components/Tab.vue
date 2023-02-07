<template>
  <div class="tabContainer">
    <div class="tab">Newst</div>
    <div class="tab">Popular</div>
    <div class="tab">Active</div>
  </div>
</template>
<script>

export default {
    props: ["item"]
};
</script>


<style scoped>
.tabContainer {
  display: flex;
  justify-content: center;
  flex-direction: row;
  border-radius: 14px;
  max-width: 500px;
  margin: 30px auto;
  border: 1px solid transparent;
  background-color: #e7eef9;
}

.tab {
  border-radius: 14px;
  margin: 10px;
  padding: 20px 40px 20px 40px;
}

</style>
