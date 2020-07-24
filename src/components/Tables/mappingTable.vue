<template>
  <div class="mapping-table">
    <transition name="fade" appear>
      <AddProfessor v-if="$store.state.showProfessorModal" />
      <AddCourse v-if="$store.state.showCourseModal" />
    </transition>
    <div class="heading">
      <h1>Professor Mapping</h1>
      <h4>
        Map the subjects of the respective semester to the respective professors
      </h4>
    </div>

    <table>
      <tr>
        <th>Course</th>
        <th>Course Code</th>
        <th>Credits</th>
        <th>No. of Theory Teachers</th>
        <th>Professor</th>
      </tr>
      <tr v-for="(courses, index) in sectionObject.subjects" :key="index">
        <td class="course-name">
            
          {{ courses.detail.Name }}
        </td>
        <td>{{ courses.detail.Code }}</td>
        <td>
          {{ courses.detail.Credits.Theory }}:{{
            courses.detail.Credits.Tutorial
          }}:{{ courses.detail.Credits.Lab }}
        </td>  
        <td class="course-name">
          <input
              style = "width: 3rem;"
              type="number"
              min = "1"
              max = "2"
              v-bind:id="createID(index)"
              v-model="courses.detail.noOfTheoryTeachers"
            />
        </td>
        <td class="data-input">
          <div class="custom-input">
            <input
              type="text"
              placeholder="Select Professor"
              list="allProfessors"
              v-model="courses.detail.Professors[0]"
            />
            <datalist id="allProfessors"></datalist>
            <img
              src="../../assets/Common/add.svg"
              alt="add professor"
              title="Add a professor"
              @click="addProfessor(index)"
            />
          </div>
          <div
            class="custom-input"
            v-if="sectionObject.getProfessors(index) >= 2"
          >
            <input
              type="text"
              placeholder="Select Professor"
              list="allProfessors"
              v-model="courses.detail.Professors[1]"
            />
            <datalist id="allProfessors"></datalist>
            <img
              src="../../assets/Common/delete.svg"
              alt="delete professor"
              title="Remove Professor"
              v-if="sectionObject.getProfessors(index) == 2"
              @click="removeProfessor(index)"
            />
            <div v-else class="block"></div>
          </div>
          <div
            class="custom-input"
            v-if="sectionObject.getProfessors(index) >= 3"
          >
            <input
              type="text"
              placeholder="Select Professor"
              list="allProfessors"
              v-model="courses.detail.Professors[2]"
            />
            <datalist id="allProfessors"></datalist>
            <img
              src="../../assets/Common/delete.svg"
              alt="delete professor"
              title="Remove Professor"
              v-if="sectionObject.getProfessors(index) == 3"
              @click="removeProfessor(index)"
            />
            <div v-else class="block"></div>
          </div>
          <div
            class="custom-input"
            v-if="sectionObject.getProfessors(index) >= 4"
          >
            <input
              type="text"
              placeholder="Select 4"
              list="allProfessors"
              v-model="courses.detail.Professors[3]"
            />
            <datalist id="allProfessors"></datalist>
            <img
              src="../../assets/Common/delete.svg"
              alt="delete professor"
              title="Remove Professor"
              v-if="sectionObject.getProfessors(index) == 4"
              @click="removeProfessor(index)"
            />
            <div v-else class="block"></div>
          </div>
        </td>
      </tr>
    </table>

    <p>
      Can't find a Professor or Course ? Click here to add new
      <span @click="$store.state.showProfessorModal = true">Professor</span> or
      <span @click="$store.state.showCourseModal = true">Course</span>
    </p>
    <br />
    <div class="classroom-container">
      <div class="heading">
        <h1>Classroom</h1>
        <h4>
          Enter the classroom name where you want to accomodate students of
          class {{ $store.state.semester }}{{ $store.state.section }}
        </h4>
      </div>
      <input
        type="text"
        placeholder="Enter classroom"
        class="classroom"
        v-model="sectionObject.roomNumber"
      />
    </div>
    <br />
    <div v-if="$store.state.createType == 1">
      <div class="heading">
        <h1>Labs</h1>
        <h4>Add custom timings for labs</h4>
      </div>
      <table>
        <tr>
          <th>Course</th>
          <th>Course Code</th>
          <th>Time</th>
          <th>Day</th>
          <th>Lab Name</th>
        </tr>
        <tr v-for="(courses, index) in sectionObject.subjects" :key="index">
          <td v-if="courses.detail.Credits.Lab > 0" class="course-name">
            {{ courses.detail.Name }}
          </td>
          <td v-if="courses.detail.Credits.Lab > 0">
            {{ courses.detail.Code }}
          </td>
          <td class="custom-input" v-if="courses.detail.Credits.Lab > 0">
            <input
              type="text"
              placeholder="Select Time"
              list="time"
              v-model="sectionObject.subjects[index].detail.LabSchedule.Time"
            />
            <datalist id="time">
              <option value="9:00 AM"></option>
              <option value="11:05 AM"></option>
              <option value="1:45 PM"></option>
              <option value="2:40 PM"></option>
            </datalist>
          </td>
          <td class="custom-input" v-if="courses.detail.Credits.Lab > 0">
            <input
              type="text"
              placeholder="Select Day"
              list="day"
              v-model="sectionObject.subjects[index].detail.LabSchedule.Day"
            />
            <datalist id="day">
              <option value="Monday"></option>
              <option value="Tuesday"></option>
              <option value="Wednesday"></option>
              <option value="Thursday"></option>
              <option value="Friday"></option>
              <option value="Saturday"></option>
            </datalist>
          </td>
          <td class="custom-input" v-if="courses.detail.Credits.Lab > 0">
            <input
              type="text"
              placeholder="Enter Lab Name"
              v-model="
                sectionObject.subjects[index].detail.LabSchedule.LabNumber
              "
            />
          </td>
        </tr>
      </table>

      <br />
      <div
        class="heading"
        v-if="$store.state.semester == 3 || $store.state.semester == 4"
      >
        <h1>Math Professors</h1>
        <h4>
          Enter the math professors for students of class
          {{ $store.state.semester }}{{ $store.state.section }}
        </h4>
      </div>
      <div
        v-if="$store.state.semester == 3 || $store.state.semester == 4"
        class="math-prof"
      >
        <input
          type="text"
          placeholder="Enter Main Professor name"
          class="classroom"
          v-model="sectionObject.mathClass.Professors[0]"
        />
        <input
          type="text"
          placeholder="Enter Professor name"
          class="classroom"
          v-model="sectionObject.mathClass.Professors[1]"
        />
        <input
          type="text"
          placeholder="Enter Professor name"
          class="classroom"
          v-model="sectionObject.mathClass.Professors[2]"
        />
      </div>
      <br />
      <div
        v-if="$store.state.semester == 3 || $store.state.semester == 4"
        class="heading"
      >
        <h1>Math Classes</h1>
        <h4>Enter the classes provided by the math department</h4>
      </div>
      <table
        v-if="$store.state.semester == 3 || $store.state.semester == 4"
        class="math-dept"
      >
        <tr>
          <th>Class</th>
          <th>Time</th>
          <th>Day</th>
        </tr>
        <tr>
          <td>Tutorial Class (2 hours)</td>
          <td class="custom-input">
            <input
              type="text"
              placeholder="Select Time"
              list="math-time-tutorial"
              v-model="sectionObject.mathClass.TutorialClass.Time"
            />
            <datalist id="math-time-tutorial">
              <option value="9:00 AM"></option>
              <option value="11:05 AM"></option>
              <option value="1:45 PM"></option>
              <option value="2:40 PM"></option>
            </datalist>
          </td>
          <td class="custom-input">
            <input
              type="text"
              placeholder="Select Day"
              list="day"
              v-model="sectionObject.mathClass.TutorialClass.Day"
            />
            <datalist id="day">
              <option value="Monday"></option>
              <option value="Tuesday"></option>
              <option value="Wednesday"></option>
              <option value="Thursday"></option>
              <option value="Friday"></option>
              <option value="Saturday"></option>
            </datalist>
          </td>
        </tr>
        <tr>
          <td>Regular class 1 (1 hour)</td>
          <td class="custom-input">
            <input
              type="text"
              placeholder="Select Time"
              list="math-time-regular1"
              v-model="sectionObject.mathClass.RegularClass1.Time"
            />
            <datalist id="math-time-regular1">
              <option value="9:00 AM"></option>
              <option value="9:55 AM"></option>
              <option value="11:05 AM"></option>
              <option value="12:00 PM"></option>
              <option value="1:45 PM"></option>
              <option value="2:40 PM"></option>
              <option value="3:35 PM"></option>
            </datalist>
          </td>
          <td class="custom-input">
            <input
              type="text"
              placeholder="Select Day"
              list="day"
              v-model="sectionObject.mathClass.RegularClass1.Day"
            />
            <datalist id="day">
              <option value="Monday"></option>
              <option value="Tuesday"></option>
              <option value="Wednesday"></option>
              <option value="Thursday"></option>
              <option value="Friday"></option>
              <option value="Saturday"></option>
            </datalist>
          </td>
        </tr>
        <tr>
          <td>Regular class 2 (1 hour)</td>
          <td class="custom-input">
            <input
              type="text"
              placeholder="Select Time"
              list="math-time-regular2"
              v-model="sectionObject.mathClass.RegularClass2.Time"
            />
            <datalist id="math-time-regular2">
              <option value="9:00 AM"></option>
              <option value="9:55 AM"></option>
              <option value="11:05 AM"></option>
              <option value="12:00 PM"></option>
              <option value="1:45 PM"></option>
              <option value="2:40 PM"></option>
              <option value="3:35 PM"></option>
            </datalist>
          </td>
          <td class="custom-input">
            <input
              type="text"
              placeholder="Select Day"
              list="day"
              v-model="sectionObject.mathClass.RegularClass2.Day"
            />
            <datalist id="day">
              <option value="Monday"></option>
              <option value="Tuesday"></option>
              <option value="Wednesday"></option>
              <option value="Thursday"></option>
              <option value="Friday"></option>
              <option value="Saturday"></option>
            </datalist>
          </td>
        </tr>
        <tr>
          <td>Regular class 3 (1 hour)</td>
          <td class="custom-input">
            <input
              type="text"
              placeholder="Select Time"
              list="math-time-regular3"
              v-model="sectionObject.mathClass.RegularClass3.Time"
            />
            <datalist id="math-time-regular3">
              <option value="9:00 AM"></option>
              <option value="9:55 AM"></option>
              <option value="11:05 AM"></option>
              <option value="12:00 PM"></option>
              <option value="1:45 PM"></option>
              <option value="2:40 PM"></option>
              <option value="3:35 PM"></option>
            </datalist>
          </td>
          <td class="custom-input">
            <input
              type="text"
              placeholder="Select Day"
              list="day"
              v-model="sectionObject.mathClass.RegularClass3.Day"
            />
            <datalist id="day">
              <option value="Monday"></option>
              <option value="Tuesday"></option>
              <option value="Wednesday"></option>
              <option value="Thursday"></option>
              <option value="Friday"></option>
              <option value="Saturday"></option>
            </datalist>
          </td>
        </tr>
      </table>
    </div>
    <br />
    <br />
  </div>
</template>

<script>
import AddProfessor from "../Modals/AddProfessor";
import AddCourse from "../Modals/AddCourse";

export default {
  props: {
    sectionObject: {
      type: Object,
    },
  },
  components: {
    AddProfessor,
    AddCourse,
  },
  methods: {
    addProfessor(index) {
      if (this.sectionObject.getProfessors(index) < 4) {
        this.sectionObject.newProfessor.splice(
          index,
          1,
          this.sectionObject.incrementNewProfessors(index)
        );
      }
    },
    removeProfessor(index) {
      if (this.sectionObject.getProfessors(index) > 1) {
        this.sectionObject.newProfessor.splice(
          index,
          1,
          this.sectionObject.decrementNewProfessors(index)
        );
      }
    },
    createID(index) {return "checkbox" + this.sectionObject.Semester + this.sectionObject.Section + index;
    },
  },
  mounted() {
    let professorNames = this.$store.getters.getProfessorName;
    let list = document.getElementById("allProfessors");

    professorNames.forEach(function(item) {
      var option = document.createElement("option");
      option.value = item;
      list.appendChild(option);
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/table";
.mapping-table {
  .heading {
    padding: 0.7rem 0 1rem 0;
    h1,
    h4 {
      margin: 0.5rem;
      padding: 0;
      font-weight: lighter;
    }
    h1 {
      color: $primary;
    }
    h4 {
      color: black;
    }
  }
  p {
    text-align: left;
    margin: 2rem 0 0rem 0.5rem;
    span {
      color: $primary-light;
      font-weight: bold;
      cursor: pointer;
    }
    span:hover {
      color: $primary-dark;
    }
  }
  table {
    tr:nth-child(odd) {
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
    tr {
      .course-name {
        text-align: left;
        padding-left: 1.7rem;
        .switch {
          position: relative;
          display: inline-block;
          width: 35px;
          height: 18px;
          margin: 0 0.5rem;
        }

        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          -webkit-transition: 0.4s;
          transition: 0.4s;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 10px;
          width: 10px;
          left: 4px;
          bottom: 4px;
          background-color: white;
          -webkit-transition: 0.4s;
          transition: 0.4s;
        }

        input:checked + .slider {
          background-color: $primary;
        }

        input:focus + .slider {
          box-shadow: 0 0 1px $primary;
        }

        input:checked + .slider:before {
          -webkit-transform: translateX(26px);
          -ms-transform: translateX(26px);
          transform: translateX(18px);
        }

        /* Rounded sliders */
        .slider.round {
          border-radius: 34px;
        }

        .slider.round:before {
          border-radius: 50%;
        }
      }
    }
    @include ipad-portrait {
      tr {
        td,
        th {
          text-align: left;
          padding: 0.5rem;
          font-size: small;
          font-weight: lighter;
        }
        th {
          text-align: center;
          font-size: medium;
          font-weight: lighter;
          padding: 1rem;
        }
        .course-name {
          padding-left: 1rem;
        }
      }
    }
  }
  .math-dept {
    input {
      width: 75%;
    }
  }
  .classroom {
    width: calc(20% - 5px);
    height: 50%;
    padding: 0.8rem 2rem 0.8rem 0.2rem;
    border: 0.5px solid black;
    border-radius: 0.3rem;
    outline: none;
    text-align: left;
    text-indent: 10px;
    margin: 0 0.5rem;
  }
  .math-prof {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  ::-webkit-input-placeholder {
    color: darkslategrey;
  }
  :-moz-placeholder {
    color: darkslategrey;
  }
  .classroom-container {
    margin-top: 0.7rem;
  }
}
</style>
