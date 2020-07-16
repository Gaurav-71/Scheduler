<template>
  <div class="student-table">
    <div class="details">
      <div>
        <b>Semester :</b> IV
      </div>
      <div>
        <b>Section :</b> A
      </div>
      <div>
        <b>Room No. :</b> LHC-303
      </div>
    </div>
    <table>
      <tr>
        <th></th>
        <th>9:00 - 9:55</th>
        <th>9:55 - 10:50</th>
        <th></th>
        <th>11:05 - 12:00</th>
        <th>12:00 - 12:45</th>
        <th></th>
        <th>1:45 - 2:40</th>
        <th>2:40 - 3:30</th>
        <th>3:30 - 4:30</th>
      </tr>
      <tr>
        <th>Monday</th>
        <td>{{sectionObject.Monday[0]}}</td>
        <td>{{sectionObject.Monday[1]}}</td>
        <td></td>
        <td>{{sectionObject.Monday[2]}}</td>
        <td>{{sectionObject.Monday[3]}}</td>
        <td></td>
        <td>{{sectionObject.Monday[4]}}</td>
        <td>{{sectionObject.Monday[5]}}</td>
        <td>{{sectionObject.Monday[6]}}</td>
      </tr>
      <tr>
        <th>Tuesday</th>
        <td>{{sectionObject.Tuesday[0]}}</td>
        <td>{{sectionObject.Tuesday[1]}}</td>
        <td></td>
        <td>{{sectionObject.Tuesday[2]}}</td>
        <td>{{sectionObject.Tuesday[3]}}</td>
        <td></td>
        <td>{{sectionObject.Tuesday[4]}}</td>
        <td>{{sectionObject.Tuesday[5]}}</td>
        <td>{{sectionObject.Tuesday[6]}}</td>
      </tr>
      <tr>
        <th>Wednesday</th>
        <td>{{sectionObject.Wednesday[0]}}</td>
        <td>{{sectionObject.Wednesday[1]}}</td>
        <td></td>
        <td>{{sectionObject.Wednesday[2]}}</td>
        <td>{{sectionObject.Wednesday[3]}}</td>
        <td></td>
        <td>{{sectionObject.Wednesday[4]}}</td>
        <td>{{sectionObject.Wednesday[5]}}</td>
        <td>{{sectionObject.Wednesday[6]}}</td>
      </tr>
      <tr>
        <th>Thursday</th>
        <td>{{sectionObject.Thursday[0]}}</td>
        <td>{{sectionObject.Thursday[1]}}</td>
        <td></td>
        <td>{{sectionObject.Thursday[2]}}</td>
        <td>{{sectionObject.Thursday[3]}}</td>
        <td></td>
        <td>{{sectionObject.Thursday[4]}}</td>
        <td>{{sectionObject.Thursday[5]}}</td>
        <td>{{sectionObject.Thursday[6]}}</td>
      </tr>
      <tr>
        <th>Friday</th>
        <td>{{sectionObject.Friday[0]}}</td>
        <td>{{sectionObject.Friday[1]}}</td>
        <td></td>
        <td>{{sectionObject.Friday[2]}}</td>
        <td>{{sectionObject.Friday[3]}}</td>
        <td></td>
        <td>{{sectionObject.Friday[4]}}</td>
        <td>{{sectionObject.Friday[5]}}</td>
        <td>{{sectionObject.Friday[6]}}</td>
      </tr>
      <tr>
        <th>Saturday</th>
        <td>{{sectionObject.Saturday[0]}}</td>
        <td>{{sectionObject.Saturday[1]}}</td>
        <td></td>
        <td>{{sectionObject.Saturday[2]}}</td>
        <td>{{sectionObject.Saturday[3]}}</td>
        <td></td>
        <td>{{sectionObject.Saturday[4]}}</td>
        <td>{{sectionObject.Saturday[5]}}</td>
        <td>{{sectionObject.Saturday[6]}}</td>
      </tr>
    </table>
    <br />
    <br />
    <table>
    </table>
    <table>
      <tr>
        <th>Subject Code</th>
        <th>Subject Name</th>
        <th>Credits</th>
        <th>Abbreviation</th>
        <th>Staff</th>
      </tr>
      <tr v-for="(subject,index) in sectionObject.subjects" :key="index">
        <td>{{subject.detail.Code}}</td>
        <td>{{subject.detail.Name}}</td>
        <td>{{subject.detail.Credits.Theory}}:{{subject.detail.Credits.Tutorial}}:{{subject.detail.Credits.Lab}}</td>
        <td>{{subject.detail.Type}}</td>
        <td>{{subject.detail.Professors[0]}}</td>
      </tr>
      
    </table>
    <div class="line" v-if="!hideline"></div>
  </div>
</template>

<script>
export default {
  props: {
    sectionObject: {
      type: Object
    },
    hideline: Boolean
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/table";
@import "../../scss/mediaQuery";
.student-table {
  margin-top: 2.5rem;
  .line {
    width: 100%;
    height: 1px;
    background: gray;
    margin: 3rem 0;
  }
  .details {
    margin-bottom: 1rem;
    width: 100%;
    background-image: $gradient;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 0.8rem;
    div {
      padding: 1.2rem;
      color: white;
      font-size: large;
      @include ipad-portrait{
        padding: 1rem;
        font-size: small;
      }
    }    
  }
  table {
    tr {
      td,
      th {
        font-size: smaller;
        font-weight: lighter;
      }
      th {
        font-size: smaller;
        font-weight: bold;
        color: black;
        padding: 1.3rem;
      }
    }
    tr:nth-child(1) {
      background: rgb(21, 127, 135);
      th {
        color: white;
      }
    }
    @include ipad-portrait {
      tr {
        td,
        th {
          text-align: center;
          padding: 0.5rem;
          font-size: x-small;
          font-weight: lighter;
        }
        th {
          font-size: x-small;
          font-weight: bold;
          color: $primary;
          padding: 0.5rem;
        }
      }
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
    }
  }

  @media print {
    margin: 0;
    .details {
      div {
        color: black;
      }
    }
    table {
      tr:nth-child(1) {
        background: rgb(21, 127, 135);
        th {
          color: black;
        }
      }
    }
  }
}
</style>