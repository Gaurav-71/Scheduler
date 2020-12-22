<template>
  <div class="heading-component">
    <div class="heading-container">
      <img :src="getImgUrl(src)" alt="result" />
      <div class="heading">
        <h1>{{ obj.h1 }}</h1>
        <h4>{{ obj.h4 }}</h4>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    obj: {
      h1: String,
      h4: String,
      src: String,
    },
  },
  data() {
    return {
      src: this.obj.src,
    };
  },
  methods: {
    getImgUrl(src) {
      return require("../../assets/Heading/" + src);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/colors";
.heading-component {
  display: block;
  width: 97%;
  .heading-container {
    height: 100%;
    width: 100%;
    padding: 0.7rem 0 1rem 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
      width: 60px;
      margin-right: 0.5rem;
    }
    .heading {
      h1,
      h4 {
        margin: 0.5rem;
        padding: 0;
        font-weight: lighter;
      }
      h1 {
        color: $primary;
      }
      h4 {
        color: black;
      }
    }
  }
  .line {
    width: 100%;
    height: 1px;
    background: gray;
    margin: 0 0 1rem 0;
  }
  @media print {
    display: none;
  }
}
</style>