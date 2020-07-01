<template>
  <div class="home">Dashboard</div>
</template>

<script>
export default {
  created() {
    this.$store.state.sidebarCounter = 1;
    localStorage.setItem("currentRoute", this.$route.path);
  }
};
</script>

<style lang="scss" scoped>
.home {
  margin-top: 5.7rem;
  margin-left: 5rem;
}
</style>