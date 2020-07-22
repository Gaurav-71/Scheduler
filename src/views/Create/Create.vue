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
  data() {
    return {
      unsubscribeProfessor: null,
      unsubscribeCourse: null
    };
  },
  created() {    
    this.$store.state.sidebarCounter = 2;
    localStorage.setItem("currentRoute", this.$route.path);
    this.$store.state.createRouteTracker = localStorage.getItem(
      "createRouteTracker"
    );
  },
  mounted() {
    this.$store
      .dispatch("loadProfessorList")
      .then(response => {
        this.unsubscribeProfessor = response;
      })
      .catch(err => {
        alert(err);
      });
    this.$store
      .dispatch("loadCourseList")
      .then(response => {
        this.unsubscribeCourse = response;
      })
      .catch(err => {
        alert(err);
      });
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/mediaQuery";
.create {
  margin: 4.5rem 0 3rem 5rem;
  min-height: calc(100vh - 4.5rem);
  @media print {
    margin: 0;
    padding: 0;
  }
}
</style>