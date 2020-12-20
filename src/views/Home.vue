<template>
  <div class="home">Dashboard</div>
</template>

<script>
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
</style>