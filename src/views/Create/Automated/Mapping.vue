<template>
  <div class="mapping">
    <div class="container">
      <div class="pills-container">
        <div class="pills" v-if="$store.state.cycle == 'Odd'">
          <div class="pill active">Third</div>
          <div class="pill">Fifth</div>
          <div class="pill">Seventh</div>
        </div>
        <div class="pills" v-else>
          <div class="pill active">Fourth</div>
          <div class="pill">Sixth</div>
          <div class="pill">Eight</div>
        </div>
        <input type="text" placeholder="Section" list="section" class="section" />
        <datalist name="section" id="section">
          <option value="A"></option>
          <option value="B"></option>
          <option value="C"></option>
        </datalist>
        <input type="text" placeholder="Classroom no." class="classroom" />
      </div>
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
@import "../../../scss/table";

.mapping {
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    width: 85%;
    border-radius: 0.8rem;
    .pills-container {
      display: flex;
      width: 100%;
      height: 4rem;
      flex-wrap: wrap;
      margin-bottom: 1rem;
      @include ipad-portrait {
        justify-content: space-between;
        height: 6rem;
      }
      .pills {
        border-radius: 0.8rem;
        background: rgba($color: $primary-dark, $alpha: 0.2);
        width: 35%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        @include ipad-portrait {
          width: 58%;
          flex-wrap: wrap;
        }
        .pill {
          width: 4.8rem;
          padding: 0.65rem 1rem;
          margin: 0 0.5rem;
          border-radius: 0.5rem;
          text-align: center;
          cursor: pointer;
          @include ipad-portrait {
            margin: 0.5rem;
            padding: 0.4rem 1rem;
            border-radius: 0.8rem;
          }
        }
        .pill:hover {
          background: rgba(21, 127, 135, 0.2);
        }
        .active {
          background: rgb(21, 127, 135);
          color: white;
          box-shadow: 10px 10px 20px rgba(grey, 0.25);
        }
        .active:hover {
          background: rgb(21, 127, 135);
        }
      }
      input {
        border-radius: 0.8rem;
        background: rgba($color: $primary-dark, $alpha: 0.2);
        border: none;
        outline: none;
      }
      .section {
        width: 8%;
        text-indent: 15px;
        margin-left: auto;
        @include ipad-portrait {
          margin-left: 0.75rem;
          width: 15%;
        }
      }
      .classroom {
        width: 10%;
        text-indent: 5px;
        margin-left: 0.75rem;
        @include ipad-portrait {
          width: 18%;
          // text-indent: 0px;
        }
      }
    }
    .data-input {
      padding: 0;
    }
  }
}
</style>