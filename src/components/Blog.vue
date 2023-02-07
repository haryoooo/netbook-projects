<template>
  <div class="mainContainer">
    <div class="leftContentWrapper">
      <div class="leftMainContent">
        <p>Whats NetsBoks?</p>
        <h2>Why Join to Netbook Social Network?</h2>
        <h4>
          Recent surveys have indicated that small businesses recognise the need
          they have to connect with consumer.
        </h4>
        <div class="leftFooterContent">
          <span><img src="../assets/Blog/Groups.png" /></span>
          <span><img src="../assets/Blog/Messages.png" /></span>
          <span><img src="../assets/Blog/Share.png" /></span>
        </div>
      </div>
    </div>
    <div class="rightContentWrapper">
      <div class="leftContent">
        <img src="../assets/Blog/community.png" />
      </div>
      <div class="rightContent">
        <img src="../assets/Blog/laptop.png" />
        <img src="../assets/Blog/cable.png" />
      </div>
    </div>
  </div>
</template>
<script>
// export default {

// }
</script>
<style scoped>
.mainContainer {
  display: flex;
  justify-content: space-between;
  margin: 100px 100px 100px 100px;
}

.leftContentWrapper {
  text-align: left;
  width: 30%;
}

.leftMainContent p {
  color: #217BF4;
  font-weight: 500;
}

.leftMainContent h2 {
  font-size: 36px;
  font-weight: 700;
}

.leftMainContent h4 {
  font-size: 16px;
  color: #656464;
  font-weight: 400;
}

.leftFooterContent {
  display: flex;
  flex-direction: column;
}

.leftFooterContent span {
  padding: 5px;
}

.rightContentWrapper {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 50%;
}

.leftContent img {
  margin: 50px auto;
  border-radius: 20px;
}

.rightContent img {
  margin: 10px;
}

</style>
