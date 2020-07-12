<template>
  <table>
    <tr>
      <th>Course</th>
      <th>Course Code</th>
      <th>Time</th>
      <th>Day</th>
      <th>Lab Name</th>
    </tr>
    <tr v-for="(courses, index) in timingObject.subjects"  :key="index" >
        <td v-if="courses.detail.Credits.Lab > 0" class="course-name">{{ courses.detail.Name }}</td>
        <td v-if="courses.detail.Credits.Lab > 0" >{{ courses.detail.Code }}</td>
        <td class="custom-input" v-if="courses.detail.Credits.Lab > 0">
          <input type="text" placeholder="Select Time" list="time" v-on:change="makeTrue((index)*3)"/>
          <datalist id="time">
            <option value="9:00 AM"></option>
            <option value="11:05 AM"></option>
            <option value="1:45 PM"></option>
            <option value="2:40 AM"></option>
          </datalist>
        </td>
        <td class="custom-input" v-if="courses.detail.Credits.Lab > 0">
          <input type="text" placeholder="Select Day" list="day" v-on:change="makeTrue((index)*3 + 1)"/>
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
            list="allProfessors"
            v-on:change="makeTrue((index)*3 + 2)"
          />
        </td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    timingObject: {
      type: Object,
    },
    position: Number
  },
  data() {
    return {
      labs: []
    }
  },
  mounted() {
    
    for(var i = 0; i< this.timingObject.subjects.length; i++){
      if(this.timingObject.subjects[i].detail.Credits.Lab > 0){
        this.labs.push(false);
        this.labs.push(false);
        this.labs.push(false);
      }
    }
  },
  methods: {
    makeTrue(x) {
      this.labs[x] = true;
    }
  },
  beforeDestroy(){
    console.log(this.labs);
    if(false in this.labs){
      if(this.state.cycle == "Odd"){
        this.$emit("changeOddTiming", {index: this.position, trueValue: false});
      }
      else{
        this.$emit("changeEvenTiming", {index: this.position, trueValue: false});
      }
    }
    else{
      if(this.state.cycle == "Odd"){
        this.$emit("changeOddTiming", {index: this.position, trueValue: true});
      }
      else{
        this.$emit("changeEvenTiming", {index: this.position, trueValue: true});
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/table";
</style>
