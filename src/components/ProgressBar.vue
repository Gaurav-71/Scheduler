<template>
  <div class="progress-bar">
    <div class="step" style="text-align: right;">
      <img
        src="../assets/ProgressBar/automated.svg"
        alt="automated"
        v-bind:class="{'active-img':$store.state.progressCounter>=1}"
      />
      <p v-bind:class="{'active-p':$store.state.progressCounter==1}">Type</p>
    </div>
    <div class="line" v-bind:class="{'active-line':$store.state.progressCounter>1}"></div>
    <div class="step" style="text-align: center;">
      <img
        src="../assets/ProgressBar/semester.svg"
        alt="semester"
        v-bind:class="{'active-img':$store.state.progressCounter>=2}"
      />
      <p v-bind:class="{'active-p':$store.state.progressCounter==2}">Cycle</p>
    </div>
    <div class="line" v-bind:class="{'active-line':$store.state.progressCounter>2}"></div>
    <div class="step" style="text-align: left;">
      <img
        src="../assets/ProgressBar/mapping.svg"
        alt="mapping"
        v-bind:class="{'active-img':$store.state.progressCounter>=3}"
      />
      <p v-bind:class="{'active-p':$store.state.progressCounter==3}">Mapping</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../scss/colors";
.progress-bar {
  width: 100%;
  margin: 1.5rem 0;
  display: flex;
  justify-content: center;
  align-items: top;

  .step {
    img,
    .active-img {
      width: 3.3rem;
      height: 3.3rem;
      border-radius: 50%;
      background-color: lightgray;
      transition: background-image 1s;
    }
    p {
      margin: 0;
      text-align: center;
      color: black;
      font-weight: lighter;
    }
    .active-p {
      color: $primary;
      font-weight: bold;
    }
  }
  .line,
  .active-line {
    width: 8rem;
    height: 3px;
    border: 1px solid $gradient-progress-bar;
    background: lightgray;
    margin-top: 1.6rem;
    transition: background-image 1s;
  }
  .active-img {
    transition: background-image 1s;
    background-image: $gradient;
  }
  .active-line {
    transition: background-image 1s;
    background-image: $gradient;
  }
}
</style>