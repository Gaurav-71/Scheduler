<template>
  <div class="soon"><Soon page="Home" /></div>
</template>

<script>
/* eslint-disable */
import Soon from "../components/Design/Soon";
export default {
  components: {
    Soon,
  },
  created() {
    localStorage.setItem("currentRoute", this.$route.path);
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_soon.scss";
@import "../scss/_colors.scss";
</style>




<!--
<template>
  <div class="home">Dashboard</div>
</template>

<script>
/* eslint-disable */
export default {
  created() {
    localStorage.setItem("currentRoute", this.$route.path);
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin-top: 5.7rem;
  margin-left: 5rem;
  min-height: calc(100vh - 5.7rem);
}
</style>--->