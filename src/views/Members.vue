<template>
  <div
    id="members"
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
  >
    <div class="membersContent">
      <h5>Valuable Team</h5>
      <h1>Our Active Members</h1>
      <h4>
        when an unknown printer took a galley of type and meeting fari scrambled
        it.
      </h4>
    </div>
    <div class="tabs">
      <div>
        <div class="tabContainer">
          <div
            class="tabs-regular"
            :class="{
              tabs: true,
              'tab-active': isTabActive === 'All' || isTabActive === '',
            }"
            @click="selectTabs('All')"
          >
            All
          </div>
          <div
            class="tabs-regular"
            :class="{ tabs: true, 'tab-active': isTabActive === 'Popular' }"
            @click="selectTabs('Popular')"
          >
            Popular
          </div>
          <div
            class="tabs-regular"
            :class="{ tabs: true, 'tab-active': isTabActive === 'Active' }"
            @click="selectTabs('Active')"
          >
            Active
          </div>
        </div>
      </div>
    </div>
    <div class="cardContainer">
      <div v-for="item in cardItem">
        <div class="cardWrapper">
          <CardMembers :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { data } from "@/helpers/cardMembers";
import CardMembers from "../components/CardMembers.vue";

export default {
  components: {
    CardMembers,
  },

  data() {
    return {
      cardItem: data,
      isTabActive: "",
    };
  },
  methods: {
    selectTabs(e) {
      if (e) {
        this.isTabActive = e;
      }
      this.filterData();
    },

    filterData() {
      if (this.isTabActive !== "" && this.isTabActive !== "All") {
        const filterData = data.filter((el) => {
          return el[`is${this.isTabActive}`] === true;
        });
        this.cardItem = filterData;
      } else {
        this.cardItem = data;
      }
    },
  },
};
</script>
<style scoped>
.membersContent {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;
  text-align: center;
}

.membersContent h5 {
  margin: 5px 10px 10px 10px;
  color: #217bf4;
}

.membersContent h1 {
  margin: 10px;
  font-weight: 700;
  line-height: 48px;
}

.membersContent h4 {
  margin: 10px auto;
  max-width: 400px;
  font-weight: 400;
  line-height: 28px;
  color: #656464;
}

.tabs {
  text-align: center;
}

.tabContainer {
  display: flex;
  justify-content: center;
  flex-direction: row;
  border-radius: 14px;
  max-width: 500px;
  margin: 30px auto;
  border: 1px solid transparent;
  background-color: #f2f7fe;
}

.tabs-regular {
  cursor: pointer;
  width: 100%;
  border-radius: 14px;
  margin: 10px;
  padding: 20px;
}

.tab-active {
  background-color: #217bf4;
  color: white;
}

.cardContainer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 100px;
}

/* Mobile Version */
@media screen and (max-width: 640px) {
  .membersContent {
    margin: 0px 20px 0px 20px;
  }
  .membersContent p {
    margin: 5px 10px 10px 10px;
  }

  .membersContent h1 {
    margin: 10px;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
  }

  .membersContent h5 {
    margin: 10px auto;
    max-width: 400px;
    font-size: 14px;
    line-height: 20px;
  }

  .tabContainer {
    display: flex;
    justify-content: center;
    flex-direction: row;
    border-radius: 14px;
    width: fit-content;
    margin: 30px auto;
    border: 1px solid transparent;
    background-color: #f2f7fe;
  }

  .tabs-regular {
    cursor: pointer;
    width: 100%;
    border-radius: 14px;
    margin: 10px;
    padding: 20px;
  }
}
/* End of Mobile Version */
</style>
