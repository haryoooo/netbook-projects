<template>
  <div class="contentWrapper">
    <h4>Search...</h4>
    <div class="btnWrapper">
      <Buttons :title="buttonTitle" />
    </div>
  </div>
</template>
<script>
import Buttons from "./Button.vue";

export default {
  name: "NavbarContent",
  components: {
    Buttons,
  },

  data() {
    return {
      buttonTitle: "Log In",
    };
  },
};
</script>
<style scoped>
h4 {
  margin-right: 20px;
  width: fit-content;
}

.contentWrapper {
  display: flex;
  justify-content: space-between;
}

.btnWrapper {
  margin: 10px 0px 10px 0px;
}

.btnLogin {
  width: 100px;
  cursor: pointer;
  font-family: "Inter";
  font-weight: 600;
  border: 1px solid transparent;
  background-color: #217bf4;
  color: white;
  border-radius: 14px;
  font-size: 14px;
  padding: 10px;
}
</style>
