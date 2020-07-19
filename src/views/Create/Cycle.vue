<template>
  <div class="cycle">
    <div class="card">
      <h1>Semester Cycle</h1>
      <form>
        <h3>Select current semester cycle</h3>
        <input
          type="radio"
          id="odd"
          name="cycle"
          value="Odd"
          v-model="$store.state.cycle"
          style="margin-bottom: 1.1rem;"
        />
        <label for="odd">Odd Cycle (3/5/7)</label>
        <br />
        <input type="radio" id="even" name="cycle" value="Even" v-model="$store.state.cycle" />
        <label for="even">Even Cycle (4/6/8)</label>
      </form>
      <form class="dept-term">
        <input
          type="text"
          class="dept"
          placeholder="Enter Department"
          v-model="$store.state.department"
        />
        <input type="text" class="term" placeholder="Enter Term" v-model="$store.state.term" />
      </form>
    </div>
    <div class="btn" @click="route()">Start Mapping</div>
  </div>
</template>

<script>
export default {
  methods: {
    route() {
      this.$router.push("/timetable/create/automated/mapping");
    }
  },
  created() {
    this.$store.state.sidebarCounter = 2;
    this.$store.state.progressCounter = 2;
    localStorage.setItem("currentRoute", this.$route.path);
    localStorage.setItem("createRouteTracker", this.$route.path);
    this.$store.state.createRouteTracker = localStorage.getItem(
      "createRouteTracker"
    );
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/create-cards";
@import "../../scss/mediaQuery";

.cycle {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .card {
    text-align: left;
    @include ipad-portrait {
      height: 25rem;
    }
    form {
      padding: 1rem 3rem;
      h3 {
        font-weight: lighter;
        color: $primary-dark;
      }
      input {
        margin: 0.5rem;
        cursor: pointer;
      }
    }
    .dept-term {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      text-align: center;
      flex-wrap: wrap;
      input {
        background-color: #eee;
        border: none;
        padding: 12px 15px;
        margin: 0.5rem;
        width: 20rem;
        background-position-y: center;
        background-position-x: 0.8rem;
        background-size: 25px;
        background-repeat: no-repeat;
        text-indent: 34px;
        cursor: text;
      }
      .dept {
        background-image: url("../../assets/Create/department 2.svg");
      }
      .term {
        background-image: url("../../assets/Create/term 2.svg");
      }
    }
    p {
      padding: 0rem 3rem;
      line-height: 25px;
      color: $primary-dark;
    }
  }
}
</style>
