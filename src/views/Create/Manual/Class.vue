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
        <input type="text" placeholder="Enter classroom no.">
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
    this.$store.state.isManual = true;
    this.$store.state.isAutomated = false;
  }
};
</script>

<style lang="scss" scoped>
@import "../../../scss/colors";
@import "../../../scss/mediaQuery";
.class {
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .card {
    text-align: left;
    width: 65%;
    height: 22rem;
    background: white;
    border-radius: 1rem;
    overflow: hidden;
    text-align: center;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    @include ipad-portrait {
      height: 31rem;
    }
    h1 {
      background-image: $gradient;
      color: white;
      padding: 1.5rem;
      margin: 0;
      font-weight: lighter;
      text-align: center;
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
  .btn {
    margin: 0.7rem;
    margin-top: 2rem;
    border-radius: 20px;
    border: 1px solid $primary-light;
    background-image: $gradient;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    cursor: pointer;
  }
  .btn:active {
    transform: scale(0.95);
  }
  .btn:focus {
    outline: none;
  }
}
</style>