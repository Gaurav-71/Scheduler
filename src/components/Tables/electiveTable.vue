<template>
  <div class="elective-table">
    <div class="heading">
      <h1>Electives Mapping</h1>
      <h4>Map the electives of the respective semester to the respective professors</h4>
    </div> 
    <table>
      <tr>
        <th>Semester</th>
        <th>Course</th>
        <th>Course Code</th>
        <th>Credits</th>
        <th>Professor</th>
      </tr>
      <tr v-for="(courses,index) in $store.state.oddCycleElectives" :key ="index">
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

      </tr>
    </table>
  </div>
</template>


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