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
      <p
        v-if="$store.state.cycle"
      >{{$store.state.cycle}} semester cycle has been selected, you are now ready to map/match professors to their respective classes and subjects.</p>
    </div>
    <div class="btn" @click="route()">Start Mapping</div>
  </div>
</template>

<script>
export default {
  methods: {
    route() {
      this.$router.push("mapping/automated");
    }
  },
  created() {
    this.$store.state.sidebarCounter = 2;
    this.$store.state.progressCounter = 2;    
    localStorage.setItem("currentRoute",this.$route.path);
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/create-cards";
@import "../../scss/mediaQuery";

.cycle {
  margin-top: 2.5rem;
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
    p {
      padding: 0rem 3rem;
      line-height: 25px;
      color: $primary-dark;
    }
  }
}
</style>
