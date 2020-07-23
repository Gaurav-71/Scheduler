<template>
  <div class="elective-table">
    <div class="heading">
      <h1>Electives Mapping</h1>
      <h4>Map the electives of the respective semester to the respective professors</h4>
    </div>

    <table>
      <tr>
        <th>Course</th>
        <th>Course Code</th>
        <th>Credits</th>
        <th>Professor</th>
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