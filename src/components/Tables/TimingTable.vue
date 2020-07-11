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
          <input type="text" placeholder="Select Time" list="time" />
          <datalist id="time">
            <option value="9:00 AM"></option>
            <option value="11:05 AM"></option>
            <option value="1:45 PM"></option>
            <option value="2:40 AM"></option>
          </datalist>
        </td>
        <td class="custom-input" v-if="courses.detail.Credits.Lab > 0">
          <input type="text" placeholder="Select Day" list="day" />
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

    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/table";
</style>
