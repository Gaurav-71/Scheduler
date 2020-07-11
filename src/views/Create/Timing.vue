<template>
  <div class="timing">
  </div>
</template>

<script>
export default {
  methods: {
    changeSemester(sem) {
      this.$store.state.semester = sem;
    },
    route(){
      alert("Dheeraj and divya automate this shiz lezgooo !!!");
    }
  },
  created() {
    this.$store.state.sidebarCounter = 2;
    this.$store.state.progressCounter = 3;
    localStorage.setItem("currentRoute", this.$route.path);
    localStorage.setItem("createRouteTracker", this.$route.path);
    this.$store.state.createRouteTracker = localStorage.getItem(
      "createRouteTracker"
    );
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/create-cards";
@import "../../scss/table";
@import "../../scss/pills";

.timing {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .container {
    width: 85%;
    border-radius: 0.8rem;
    .data-input {
      padding: 0;
    }
    .instructions {
      padding: 1rem 1.5rem;
      text-align: left;
      font-size: 1.2rem;
      ul {
        li {
          margin: 1rem 0;
        }
      }
    }
  }
}
</style>