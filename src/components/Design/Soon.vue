<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated bounceInUp"
    appear
  >
    <div class="custom-heading elevation-2">
      <div class="custom-flex">
        <img src="../../assets/coming-soon.svg" alt="heading-img" />
        <div class="custom-text">
          <h1>{{ page }} page under development, coming soon !</h1>
        </div>
      </div>
    </div></transition
  >
</template>

<script>
export default {
  props: {
    page: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/_colors.scss";
.custom-heading {
  padding: 1rem;
  background: white;
  width: 100%;
  margin-bottom: 1.5rem;
  border-radius: 0.8rem;
  box-shadow: 0px 0px 3px black;
  .custom-flex {
    display: flex;
    align-items: center;
    padding: 0 1rem;
    img {
      width: 60px;
      height: 60px;
    }
    .custom-text {
      padding-left: 0.5rem;
      h1,
      h4 {
        padding: 0 0 0 0.5rem;
        margin: 0;
        color: $primary;
      }
      h4 {
        margin-top: 0.3rem;
        color: black;
      }
    }
  }
}
</style>