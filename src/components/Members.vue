<template>
    <div class="membersContent">
    <p>Valuable Team</p>
    <h2>Our Active Members</h2>
    <h5>
        when an unknown printer took a galley of type and meeting fari scrambled it.
    </h5>
  </div>
  <div class="tabs">
    <Tab />
  </div>
</template>
<script>

import Tab from "../components/Tab.vue"

export default {
    components: {
        Tab,
    }
}

</script>
<style scoped>
.membersContent {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;
  text-align: center;
}

.membersContent p {
  margin: 5px 10px 10px 10px;
  color: #217bf4;
}

.membersContent h2 {
  margin: 10px;
  font-weight: 700;
  font-size: 36px;
  line-height: 48px;
}

.membersContent h5 {
  margin: 10px auto;
  max-width: 400px;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #656464;
}

.tabs {
  text-align: center;
}

</style>