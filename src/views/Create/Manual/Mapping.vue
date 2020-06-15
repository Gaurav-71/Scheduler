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
          <td class="data-input">
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
              <option value="First Semester"></option>
              <option value="Second Semester"></option>
              <option value="Third Semester"></option>
              <option value="Fourth Semester"></option>
              <option value="Fifth Semester"></option>
              <option value="Sixth Semester"></option>
              <option value="Seventh Semester"></option>
              <option value="Eight Semester"></option>
              <option value="First Semester"></option>
              <option value="Second Semester"></option>
              <option value="Third Semester"></option>
              <option value="Fourth Semester"></option>
              <option value="Fifth Semester"></option>
              <option value="Sixth Semester"></option>
              <option value="Seventh Semester"></option>
              <option value="Eight Semester"></option>
              <option value="First Semester"></option>
              <option value="Second Semester"></option>
              <option value="Third Semester"></option>
              <option value="Fourth Semester"></option>
              <option value="Fifth Semester"></option>
              <option value="Sixth Semester"></option>
              <option value="Seventh Semester"></option>
              <option value="Eight Semester"></option>
              <option value="First Semester"></option>
              <option value="Second Semester"></option>
              <option value="Third Semester"></option>
              <option value="Fourth Semester"></option>
              <option value="Fifth Semester"></option>
              <option value="Sixth Semester"></option>
              <option value="Seventh Semester"></option>
              <option value="Eight Semester"></option>
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
  </div>
</template>

<script>
export default {
  created() {
    this.$store.state.progressCounter = 3;
    this.$store.state.isAutomated = true;
    this.$store.state.isManual = false;
  }
};
</script>

<style lang="scss" scoped>
@import "../../../scss/colors";
@import "../../../scss/mediaQuery";

.mapping {
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    width: 85%;
    border-radius: 0.8rem;    
    table {
      border-collapse: collapse;
      width: 100%;
      border-radius: 0.8rem;
      overflow: hidden;
      background: white;
      box-shadow: 0 0px 20px rgba(0, 0, 0, 0.25);     
      margin-bottom: 2rem; 
      tr {
        td,
        th {
          text-align: center;
          padding: 0.8rem;
          font-size: small;
          font-weight: lighter;
          input {
            width: calc(100% - 5px);
            height: 30px;
            margin: 0;
            border: none;
            background: none;
            outline: none;
            text-align: center;
          }
          ::-webkit-input-placeholder {
            text-align: center;
            color: darkslategrey;
          }
          :-moz-placeholder {
            text-align: center;
            color: darkslategrey;
          }
        }
        th {
          font-size: large;
          font-weight: bold;
          color: $primary;
          padding: 1.3rem;
        }
        .data-input {
          padding: 0;
        }
      }
      tr:nth-child(odd) {
        //background-color: #dddddd;
        background: rgba($color: $primary-dark, $alpha: 0.2);
      }
      tr:nth-child(1) {
        background: $gradient;
        border-top-left-radius: 0.8rem;
        border-top-right-radius: 0.8rem;
        th {
          color: white;
        }
      }
    }
  }
}
</style>