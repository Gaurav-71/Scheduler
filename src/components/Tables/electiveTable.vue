<template>
  <div class="elective-table">
    <div class="heading">
      <h1>Electives Mapping</h1>
      <h4>Map the electives of the respective semester to the respective professors</h4>
    </div> 
    <table v-if="$store.state.cycle == 'Odd'">
      <tr>
        <th>Semester</th>
        <th>Course</th>
        <th>Course Code</th>
        <th>Credits</th>
        <th>Professor</th>
      </tr>
      <tr v-for="(courses,index) in $store.state.oddCycleElectives.sem5.subjects" :key ="index">
        <td>
          {{courses.detail.Semester}}
        </td>
        <td>
          {{courses.detail.Name}}
        </td>
        <td>
          {{courses.detail.Code}}
        </td>
        <td>
          {{courses.detail.Credits.Theory}}:{{courses.detail.Credits.Tutorial}}:{{courses.detail.Credits.Lab}}
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
              @click="addProfessor('sem5', index)"
            />
          </div>
          <div
            class="custom-input"
            v-if="$store.state.oddCycleElectives.sem5.getProfessors(index) >= 2"
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
              v-if="$store.state.oddCycleElectives.sem5.getProfessors(index) == 2"
              @click="removeProfessor('sem5', index)"
            />
            <div v-else class="block"></div>
          </div>
          <div
            class="custom-input"
            v-if="$store.state.oddCycleElectives.sem5.getProfessors(index) >= 3"
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
              v-if="$store.state.oddCycleElectives.sem5.getProfessors(index) == 3"
              @click="removeProfessor('sem5', index)"
            />
          </div>
          <div
            class="custom-input"
            v-if="$store.state.oddCycleElectives.sem5.getProfessors(index) >= 4"
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
              v-if="$store.state.oddCycleElectives.sem5.getProfessors(index) == 4"
              @click="removeProfessor('sem5', index)"
            />
            <div v-else class="block"></div>
          </div>
        </td>

      </tr>
      <tr v-for="(courses,index) in $store.state.oddCycleElectives.sem7.subjects" :key ="courses.id+index*2+100">
        <td>
          {{courses.detail.Semester}}
        </td>
        <td>
          {{courses.detail.Name}}
        </td>
        <td>
          {{courses.detail.Code}}
        </td>
        <td>
          {{courses.detail.Credits.Theory}}:{{courses.detail.Credits.Tutorial}}:{{courses.detail.Credits.Lab}}
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
              @click="addProfessor('sem7', index)"
            />
          </div>
          <div
            class="custom-input"
            v-if="$store.state.oddCycleElectives.sem7.getProfessors(index) >= 2"
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
              v-if="$store.state.oddCycleElectives.sem7.getProfessors(index) == 2"
              @click="removeProfessor('sem7', index)"
            />
            <div v-else class="block"></div>
          </div>
          <div
            class="custom-input"
            v-if="$store.state.oddCycleElectives.sem7.getProfessors(index) >= 3"
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
              v-if="$store.state.oddCycleElectives.sem7.getProfessors(index) == 3"
              @click="removeProfessor('sem7', index)"
            />
          </div>
          <div
            class="custom-input"
            v-if="$store.state.oddCycleElectives.sem7.getProfessors(index) >= 4"
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
              v-if="$store.state.oddCycleElectives.sem7.getProfessors(index) == 4"
              @click="removeProfessor('sem7', index)"
            />
            <div v-else class="block"></div>
          </div>
        </td>

      </tr>
    </table>
    <table v-else>
      <tr>
        <th>Semester</th>
        <th>Course</th>
        <th>Course Code</th>
        <th>Credits</th>
        <th>Professor</th>
      </tr>
      <tr v-for="(courses,index) in $store.state.evenCycleElectives.sem6.subjects" :key ="index">
        <td>
          {{courses.detail.Semester}}
        </td>
        <td>
          {{courses.detail.Name}}
        </td>
        <td>
          {{courses.detail.Code}}
        </td>
        <td>
          {{courses.detail.Credits.Theory}}:{{courses.detail.Credits.Tutorial}}:{{courses.detail.Credits.Lab}}
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
              @click="addProfessor('sem6', index)"
            />
          </div>
          <div
            class="custom-input"
            v-if="$store.state.evenCycleElectives.sem6.getProfessors(index) >= 2"
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
              v-if="$store.state.evenCycleElectives.sem6.getProfessors(index) == 2"
              @click="removeProfessor('sem6', index)"
            />
            <div v-else class="block"></div>
          </div>
          <div
            class="custom-input"
            v-if="$store.state.evenCycleElectives.sem6.getProfessors(index) >= 3"
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
              v-if="$store.state.evenCycleElectives.sem6.getProfessors(index) == 3"
              @click="removeProfessor('sem6', index)"
            />
          </div>
          <div
            class="custom-input"
            v-if="$store.state.evenCycleElectives.sem6.getProfessors(index) >= 4"
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
              v-if="$store.state.evenCycleElectives.sem6.getProfessors(index) == 4"
              @click="removeProfessor('sem6', index)"
            />
            <div v-else class="block"></div>
          </div>
        </td>

      </tr>
    </table>
  </div>
</template>

<script>
export default {
  methods: {
    addProfessor(sem, index) {
      if(sem == 'sem6'){
         if (this.$store.state.evenCycleElectives[sem].getProfessors(index) < 4) {
        this.$store.state.evenCycleElectives[sem].newProfessor.splice(
          index,
          1,
          this.$store.state.evenCycleElectives[sem].incrementNewProfessors(index)
        );
      }
      }
      else{
         if (this.$store.state.oddCycleElectives[sem].getProfessors(index) < 4) {
        this.$store.state.oddCycleElectives[sem].newProfessor.splice(
          index,
          1,
          this.$store.state.oddCycleElectives[sem].incrementNewProfessors(index)
        );
      }
      }
     
    },
    removeProfessor(sem, index) {
      if(sem == 'sem6'){
        if (this.$store.state.evenCycleElectives[sem].getProfessors(index) > 1) {
        this.$store.state.evenCycleElectives[sem].newProfessor.splice(
          index,
          1,
          this.$store.state.evenCycleElectives[sem].decrementNewProfessors(index)
        );
      }
      }
      else{
        if (this.$store.state.oddCycleElectives[sem].getProfessors(index) > 1) {
        this.$store.state.oddCycleElectives[sem].newProfessor.splice(
          index,
          1,
          this.$store.state.oddCycleElectives[sem].decrementNewProfessors(index)
        );
      }
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
  },
}
</script>>

<style lang="scss" scoped>
@import "../../scss/table";
.elective-table {
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
  table {
    tr {
      .course-name {
        text-align: left;
        padding-left: 1.7rem;
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
}
</style>