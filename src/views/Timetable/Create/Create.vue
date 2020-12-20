<template>
  <div class="create">
    <ProgressBar />
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceInUp"
      appear
    >
      <div class="create-wrapper">
        <transition
          name="custom-classes-transition-2"
          enter-active-class="animated fadeInLeft"
          leave-active-class="animated fadeOutRight"
          mode="out-in"
          :duration="{ leave: 450 }"
          appear
        >
          <router-view />
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import ProgressBar from "../../../components/Navigation/ProgressBar.vue";

export default {
  components: {
    ProgressBar,
  },
  data() {
    return {
      unsubscribeProfessor: null,
      unsubscribeCourse: null,
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
      .then((response) => {
        this.unsubscribeProfessor = response;
      })
      .catch((err) => {
        alert(err);
      });
    this.$store
      .dispatch("loadCourseList")
      .then((response) => {
        this.unsubscribeCourse = response;
      })
      .catch((err) => {
        alert(err);
      });
  },
};
</script>

<style lang="scss" scoped>
@import "../../../scss/mediaQuery";
.create {
  margin: 4.5rem 0 5rem 5rem;
  min-height: calc(100vh - 4.5rem);
  overflow-x: hidden;
  @media print {
    margin: 0;
    padding: 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>