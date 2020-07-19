<template>
  <div class="student-table">
    <div class="print-header">
      <img v-if="!$store.state.isDownloading" src="../../assets/Common/rit.png" alt="rit-logo" />
      <h3>Department of {{$store.state.department}}</h3>
    </div> 
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
      <div>
        <b>Term :</b>
        {{$store.state.term}}
      </div>
    </div>
    <table
      v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;' "
    >
      <tr>
        <th
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        ></th>
        <th
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >9:00 - 9:55</th>
        <th
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >9:55 - 10:50</th>
        <th class="break top"></th>
        <th
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >11:05 - 12:00</th>
        <th
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >12:00 - 12:45</th>
        <th class="break top"></th>
        <th
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >1:45 - 2:40</th>
        <th
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >2:40 - 3:30</th>
        <th
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >3:30 - 4:30</th>
      </tr>
      <tr>
        <th
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >Monday</th>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Monday[0]}}</td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Monday[1]}}</td>
        <td class="break"></td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Monday[2]}}</td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Monday[3]}}</td>
        <td class="break"></td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Monday[4]}}</td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Monday[5]}}</td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Monday[6]}}</td>
      </tr>
      <tr>
        <th
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >Tuesday</th>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Tuesday[0]}}</td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Tuesday[1]}}</td>
        <td class="break"></td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Tuesday[2]}}</td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Tuesday[3]}}</td>
        <td class="break"></td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Tuesday[4]}}</td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Tuesday[5]}}</td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Tuesday[6]}}</td>
      </tr>
      <tr>
        <th
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >Wednesday</th>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Wednesday[0]}}</td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Wednesday[1]}}</td>
        <td class="break">Break</td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Wednesday[2]}}</td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Wednesday[3]}}</td>
        <td class="break">Break</td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Wednesday[4]}}</td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Wednesday[5]}}</td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Wednesday[6]}}</td>
      </tr>
      <tr>
        <th
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >Thursday</th>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Thursday[0]}}</td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Thursday[1]}}</td>
        <td class="break"></td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Thursday[2]}}</td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Thursday[3]}}</td>
        <td class="break"></td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Thursday[4]}}</td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Thursday[5]}}</td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Thursday[6]}}</td>
      </tr>
      <tr>
        <th
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >Friday</th>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Friday[0]}}</td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Friday[1]}}</td>
        <td class="break"></td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Friday[2]}}</td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Friday[3]}}</td>
        <td class="break"></td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Friday[4]}}</td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Friday[5]}}</td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Friday[6]}}</td>
      </tr>
      <tr>
        <th
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >Saturday</th>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Saturday[0]}}</td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Saturday[1]}}</td>
        <td class="break bottom"></td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Saturday[2]}}</td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Saturday[3]}}</td>
        <td class="break bottom"></td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Saturday[4]}}</td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Saturday[5]}}</td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{sectionObject.Saturday[6]}}</td>
      </tr>
    </table>
    <br />
    <br />
    <table></table>
    <table>
      <tr>
        <th
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >Subject Code</th>
        <th
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >Subject Name</th>
        <th
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >Credits</th>
        <th
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >Abbreviation</th>
        <th
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >Staff</th>
      </tr>
      <tr v-for="(subject,index) in sectionObject.subjects" :key="index">
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{subject.detail.Code}}</td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{subject.detail.Name}}</td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{subject.detail.Credits.Theory}}:{{subject.detail.Credits.Tutorial}}:{{subject.detail.Credits.Lab}}</td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{subject.detail.Type}}</td>
        <td
          v-bind:style=" $store.state.isDownloading ? 'border: 1px solid black; border-collapse: collapse;' : 'border: none;'"
        >{{subject.detail.Professors[0]}}</td>
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
  },
  data() {
    return {
      styleObject: {
        border: "1px solid black"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/table";
@import "../../scss/mediaQuery";
.student-table {
  margin-top: 2.5rem;
  .print-header {
    display: none;
  }
  .line {
    width: 100%;
    height: 1px;
    background: gray;
    margin: 3rem 0;
  }
  .printborders {
    border: 1px solid black;
    border-collapse: collapse;
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
      @include ipad-portrait {
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
    .print-header {
      display: block;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      img {
        width: 170px;
      }
      h3 {
        margin: 0;
        font-weight: lighter;
        margin: 2rem 0;
        color: black;
      }
    }
    .details {
      div {
        color: black;
      }
    }
    table {
      color: black;
      tr {
        th {
          color: black;
        }
        .break {
          border: none;
        }
      }
      tr:nth-child(1) {
        background: white;
        th {
          color: black;
        }
      }
    }
    page-break-after: always;
  }
}
</style>