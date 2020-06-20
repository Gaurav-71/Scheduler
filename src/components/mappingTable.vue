<template>
  <table>
    <tr>
      <th>Course</th>
      <th>Course Code</th>
      <th>Course Credits</th>
      <th>Professor</th>
    </tr>
    <tr v-for="(courses,index) in $store.state.tempCourses" :key="index">
      <td class="course-name">{{courses.name}}</td>
      <td>{{courses.code}}</td>
      <td>{{courses.type}} | {{courses.lecture}}:{{courses.tutorial}}:{{courses.practical}}</td>
      <td v-if="courses.tutorial > 0 || courses.practical > 0" class="data-input">
        <div class="custom-input">
          <input type="text" placeholder="Select Professor" list="allProfessors" />
          <datalist id="allProfessors"></datalist>
          <img
            src="../assets/Common/add.svg"
            alt="add professor"
            title="Add a professor"
            @click="addProfessor(index)"
          />
        </div>
        <div class="custom-input" v-if="sectionObject.getProfessors(index) >= 2">
          <input type="text" placeholder="Select Professor" list="allProfessors" />
          <datalist id="allProfessors"></datalist>
          <img
            src="../assets/Common/delete.svg"
            alt="delete professor"
            title="Remove Professor"
            v-if="sectionObject.getProfessors(index) == 2"
            @click="removeProfessor(index)"
          />
          <div v-else class="block"></div>
        </div>
        <div class="custom-input" v-if="sectionObject.getProfessors(index) >= 3">
          <input type="text" placeholder="Select Professor" list="allProfessors" />
          <datalist id="allProfessors"></datalist>
          <img
            src="../assets/Common/delete.svg"
            alt="delete professor"
            title="Remove Professor"
            v-if="sectionObject.getProfessors(index) == 3"
            @click="removeProfessor(index)"
          />
          <div v-else class="block"></div>
        </div>
        <div class="custom-input" v-if="sectionObject.getProfessors(index)>= 4">
          <input type="text" placeholder="Select Professor" list="allProfessors" />
          <datalist id="allProfessors"></datalist>
          <img
            src="../assets/Common/delete.svg"
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
          <input type="text" placeholder="Select Professor" list="allProfessors" />
          <datalist id="allProfessors"></datalist>
          <div class="block"></div>
        </div>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    sectionObject: {
      type: Object
    }
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
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/table";
</style>