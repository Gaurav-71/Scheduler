<template>
  <table>
    <tr>
      <th>Course</th>
      <th>Course Code</th>
      <th>Course Credits</th>
      <th>Professor</th>
    </tr>
    <tr v-for="(courses,index) in this.sectionObject.subjects" :key="index">
      <td class="course-name">{{courses.detail.Name}}</td>
      <td>{{courses.detail.Code}}</td>
      <td>{{courses.detail.Type}} | {{courses.detail.Credits.Theory}}:{{courses.detail.Credits.Tutorial}}:{{courses.detail.Credits.Lab}}</td>
      <td v-if="courses.detail.Credits.Tutorial > 0 || courses.detail.Credits.Lab > 0" class="data-input">
        <div class="custom-input">
          <input type="text" placeholder="Select Professor" list="allProfessors"/>
          <datalist id="allProfessors"></datalist>
          <img
            src="../../assets/Common/add.svg"
            alt="add professor"
            title="Add a professor"
            @click="addProfessor(index)"
          />
        </div>
        <div class="custom-input" v-if="sectionObject.getProfessors(index) >= 2">
          <input type="text" placeholder="Select Professor" list="allProfessors" />
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
          <input type="text" placeholder="Select Professor" list="allProfessors" />
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
        <div class="custom-input" v-if="sectionObject.getProfessors(index)>= 4">
          <input type="text" placeholder="Select Professor" list="allProfessors" />
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
    },
    position: Number
    
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
    let list = document.getElementById('allProfessors');
    console.log(professorNames);
    professorNames.forEach(function(item){
      var option = document.createElement('option');
      option.value = item;
      list.appendChild(option);
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/table";
</style>