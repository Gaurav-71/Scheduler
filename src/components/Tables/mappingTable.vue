<template>
  <div class="mapping-table">
    <div class="heading">
      <h1>Professor Mapping</h1>
      <h4>Map the subjects of the respective semester to the respective professors</h4>
    </div>
    <table>
      <tr>
        <th>Course</th>
        <th>Course Code</th>
        <th>Course Credits</th>
        <th>Professor</th>
      </tr>
      <tr v-for="(courses, index) in sectionObject.subjects" :key="index">
        <td class="course-name">{{ courses.detail.Name }}</td>
        <td>{{ courses.detail.Code }}</td>
        <td>
          {{ courses.detail.Abbreviation }} | {{ courses.detail.Credits.Theory }}:{{
          courses.detail.Credits.Tutorial
          }}:{{ courses.detail.Credits.Lab }}
        </td>
        <td
          v-if="courses.detail.Credits.Tutorial > 0 || courses.detail.Credits.Lab > 0"
          class="data-input"
        >
          <div class="custom-input">
            <input
              type="text"
              placeholder="Select Main Professor"
              list="allProfessors"
              v-model="sectionObject.subjects[index].detail.Professors[0]"
            />
            <datalist id="allProfessors"></datalist>
            <img
              src="../../assets/Common/add.svg"
              alt="add professor"
              title="Add a professor"
              @click="addProfessor(index)"
            />
          </div>
          <div class="custom-input" v-if="sectionObject.getProfessors(index) >= 2">
            <input
              type="text"
              placeholder="Select Professor"
              list="allProfessors"
              v-model="sectionObject.subjects[index].detail.Professors[1]"
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
          <div class="custom-input" v-if="sectionObject.getProfessors(index) >= 3">
            <input
              type="text"
              placeholder="Select Professor"
              list="allProfessors"
              v-model="sectionObject.subjects[index].detail.Professors[2]"
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
          <div class="custom-input" v-if="sectionObject.getProfessors(index) >= 4">
            <input
              type="text"
              placeholder="Select Professor"
              list="allProfessors"
              v-model="sectionObject.subjects[index].detail.Professors[3]"
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
        <td v-else class="data-input">
          <div class="custom-input">
            <input
              type="text"
              placeholder="Select Professor"
              list="allProfessors"
              v-model="sectionObject.subjects[index].detail.Professors[0]"
            />
            <datalist id="allProfessors"></datalist>
            <div class="block"></div>
          </div>
        </td>
      </tr>
    </table>
    <br />
    <div class="classroom-container">
      <div class="heading">
        <h1>Classroom</h1>
        <h4>Enter the classroom name where you want to accomodate students of class {{$store.state.semester}}{{$store.state.section}}</h4>
      </div>
      <input
        type="text"
        placeholder="Enter classroom"
        class="classroom"
        v-model="sectionObject.roomNumber"
      />
    </div>
    <br />
    <div class="heading">
      <h1>Lab & Tutorials</h1>
      <h4>Add custom timings for labs and tutorials</h4>
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
        <td v-if="courses.detail.Credits.Lab > 0" class="course-name">{{ courses.detail.Name }}</td>
        <td v-if="courses.detail.Credits.Lab > 0">{{ courses.detail.Code }}</td>
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
            v-model="sectionObject.subjects[index].detail.LabSchedule.LabNumber"
          />
        </td>
      </tr>
    </table>
    <br />
  </div>
</template>

<script>
export default {
  props: {
    sectionObject: {
      type: Object
    }
  },
  data() {
    return {};
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
    }
  },
  mounted() {
    let professorNames = this.$store.getters.getProfessorName;
    let list = document.getElementById("allProfessors");

    professorNames.forEach(function(item) {
      var option = document.createElement("option");
      option.value = item;
      list.appendChild(option);
    });
  }
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
    h1{
      color: $primary;
    }
    h4{
      color: black;
    }
  }
  table{
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
        .course-name{
          padding-left: 1rem;
        }
      }      
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
