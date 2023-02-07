<template>
  <div>
    <button :class="isSecondary ? 'btnSecondary' : 'btnPrimary'">
      <h4>{{ title }}</h4>
    </button>
  </div>
</template>
<script>
export default {
  props: ["title", "isSecondary"],
};
</script>
<style scoped>
.btnPrimary {
  cursor: pointer;
  font-weight: 600;
  border: 1px solid transparent;
  background-color: #217bf4;
  color: white;
  border-radius: 14px;
  font-size: 14px;
  padding: 0px 20px 0px 20px;
}

.btnSecondary {
  cursor: pointer;
  border: 1px solid #217bf4;
  border-radius: 14px;
  padding: 0px 20px 0px 20px;
  font-size: 14px;
  background-color: transparent;
  color: #217bf4;
}
</style>
