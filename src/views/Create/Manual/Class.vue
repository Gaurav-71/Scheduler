<template>
  <div class="class">
    <div class="card">
      <h1>Semester & Section</h1>
      <img src="../../../assets/Semester/source/semester.svg" alt="semester" />
      <p>Select the semester, section and room of the class you want to schedule a new Timetable</p>
      <form action="#">
        <input list="semesters" name="semester" placeholder="Select Semester" />
        <datalist id="semesters">
          <option value="First Semester"></option>
          <option value="Second Semester"></option>
          <option value="Third Semester"></option>
          <option value="Fourth Semester"></option>
          <option value="Fifth Semester"></option>
          <option value="Sixth Semester"></option>
          <option value="Seventh Semester"></option>
          <option value="Eight Semester"></option>
        </datalist>
        <input list="sections" name="section" placeholder="Select Section" />
        <datalist id="sections">
          <option value="A"></option>
          <option value="B"></option>
          <option value="C"></option>
        </datalist>
        <input type="text" placeholder="Enter classroom no." />
      </form>
    </div>
    <div class="btn" @click="route()">start mapping</div>
  </div>
</template>

<script>
export default {
  methods: {
    route() {
      this.$router.push("mapping/manual");
    }
  },
  created() {
    this.$store.state.progressCounter = 2;
    this.$store.state.progressSteps[1] = "Class";
  }
};
</script>

<style lang="scss" scoped>
@import "../../../scss/create-cards";
@import "../../../scss/mediaQuery";
.class {
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .card {
    text-align: center;
    @include ipad-portrait {
      height: 31rem;
    }
    img {
      width: 80px;
      height: 80px;
      margin: 1rem;
    }
    form {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      input {
        background-color: #eee;
        border: none;
        padding: 12px 15px;
        margin: 1rem 1rem;
      }
    }
  }
}
</style>