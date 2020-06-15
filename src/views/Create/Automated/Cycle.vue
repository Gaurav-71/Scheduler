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
    this.$store.state.progressCounter = 2;
    this.$store.state.isAutomated = true;
    this.$store.state.isManual = false;
  }
};
</script>

<style lang="scss" scoped>
@import "../../../scss/colors";
@import "../../../scss/mediaQuery";

.cycle {
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .card {
    text-align: left;
    width: 65%;
    height: 22rem;
    background: white;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    @include ipad-portrait {
      height: 25rem;
    }
    h1 {
      background-image: $gradient;
      color: white;
      padding: 1.5rem;
      margin: 0;
      font-weight: lighter;
      text-align: center;
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
  .btn {
    margin: 0.7rem;
    margin-top: 2rem;
    border-radius: 20px;
    border: 1px solid $primary-light;
    background-image: $gradient;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    cursor: pointer;
  }
  .btn:active {
    transform: scale(0.95);
  }
  .btn:focus {
    outline: none;
  }
}
</style>
