<template>
  <div class="create">
    <ProgressBar />
    <router-view />
  </div>
</template>

<script>
import ProgressBar from "../../components/Navigation/ProgressBar.vue";

export default {
  components: {
    ProgressBar
  },
  created() {
    this.$store.state.sidebarCounter = 2;
    localStorage.setItem("currentRoute", this.$route.path);
    this.$store.state.createRouteTracker = localStorage.getItem(
      "createRouteTracker"
    );
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/mediaQuery";
.create {
  margin-top: 6rem;
  margin-left: 5rem;
  min-height: calc(100vh - 6rem);
}
</style>