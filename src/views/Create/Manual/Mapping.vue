<template>
  <div class="mapping">
    <div class="container">
      <table>
        <tr>
          <th>Course</th>
          <th>Course Code</th>
          <th>Course Type</th>
          <th>Professor</th>
        </tr>
        <tr v-for="(courses,index) in $store.state.tempCourses" :key="index">
          <td class="course-name">{{courses.name}}</td>
          <td>{{courses.code}}</td>
          <td>{{courses.type}}</td>
          <td v-if="courses.type == 'Theory'" class="data-input">
            <input type="text" placeholder="Select Professor" list="semesters" />
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
          </td>
          <td v-else class="data-input">
            <input type="text" placeholder="Select Professor 1" list="semesters" />
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
            <br />
            <input type="text" placeholder="Select Professor 2" list="semesters" />
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
            <br />
            <input type="text" placeholder="Select Professor 3" list="semesters" />
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
          </td>
        </tr>
      </table>
    </div>
    <div class="btn" @click="route()">next</div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.state.progressCounter = 3;
    this.$store.state.progressSteps[2] = "Mapping";
  }
};
</script>

<style lang="scss" scoped>
@import "../../../scss/table";
@import "../../../scss/create-cards";

.mapping {
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
  }
}
</style>