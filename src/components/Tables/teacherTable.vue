<template>
  <div class="student-table">
    <div class="print-header">
      <img src="../../assets/Common/rit.png" alt="rit-logo" />
      <h3>Department of {{$store.state.department}}</h3>
    </div>
    <div class="details">
      <div>
        <b>Faculty Name :</b> Srinidhi H
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
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th>Tuesday</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th>Wednesday</th>
        <td></td>
        <td></td>
        <td>Break</td>
        <td></td>
        <td></td>
        <td>Break</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th>Thursday</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th>Friday</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th>Saturday</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  props: {
    teacherObject: {
      type: Object
    },
    hideline: Boolean
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/table";
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
    .details {
      div {
        color: black;
      }
    }
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
    table {
      color: black;
      tr {
        th {
          color: black;
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