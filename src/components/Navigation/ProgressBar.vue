<template>
  <div class="progress-bar-container">
    <Heading :obj="headingObj" />
    <div class="progress-bar">
      <div class="step" style="text-align: right;">
        <img
          src="../../assets/ProgressBar/automated.svg"
          alt="automated"
          v-bind:class="{'active-img':$store.state.progressCounter>=1}"
          @click="route(1)"
        />
        <p v-bind:class="{'active-p':$store.state.progressCounter==1}">Type</p>
      </div>
      <div class="line" v-bind:class="{'active-line':$store.state.progressCounter>1}"></div>
      <div class="step" style="text-align: center;">
        <img
          src="../../assets/ProgressBar/semester.svg"
          alt="semester"
          v-bind:class="{'active-img':$store.state.progressCounter>=2}"
          @click="route(2)"
        />
        <p v-bind:class="{'active-p':$store.state.progressCounter==2}">Cycle</p>
      </div>
      <div class="line" v-bind:class="{'active-line':$store.state.progressCounter>2}"></div>
      <div class="step" style="text-align: left;">
        <img
          src="../../assets/ProgressBar/mapping.svg"
          alt="mapping"
          v-bind:class="{'active-img':$store.state.progressCounter>=3}"
          @click="route(3)"
        />
        <p v-bind:class="{'active-p':$store.state.progressCounter==3}">Mapping</p>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "../Design/Heading";

export default {
  components: {
    Heading
  },
  data() {
    return {
      headingObj: {
        h1: "Create",
        h4: "Design a new timetable without any hassle",
        src: "create.svg"
      }
    };
  },
  methods: {
    route(page) {
      switch (page) {
        case 1:
          if (this.$store.state.progressCounter != 1) {
            this.$router.push("/timetable/create");
          }
          break;
        case 2:
          if (this.$store.state.progressCounter != 2) {
            this.$router.push("/timetable/create/cycle");
          }
          break;
        case 3:
          if (this.$store.state.progressCounter != 3) {
            this.$router.push("/timetable/create/automated/mapping");
          }
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/colors";
.progress-bar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  .progress-bar {
    width: 100%;
    margin: 1rem 0 2rem 0;
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
        cursor: pointer;
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
}
</style> 