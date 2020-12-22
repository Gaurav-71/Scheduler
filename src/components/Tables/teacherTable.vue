<template>
  <div class="student-table">
    <div class="print-header">
      <img
        v-if="!$store.state.isDownloading"
        src="../../assets/Common/rit.png"
        alt="rit-logo"
      />
      <h3>Department of {{ $store.state.department }}</h3>
    </div>
    <div class="details">
      <div><b>Faculty Name :</b>{{ " " + teacherObject.detail.Name }}</div>
    </div>
    <table
      v-bind:style="
        $store.state.isDownloading
          ? 'border: 1px solid black; border-collapse: collapse;'
          : 'border: none;'
      "
    >
      <tr>
        <th
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        ></th>
        <th
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          9:00 - 9:55
        </th>
        <th
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          9:55 - 10:50
        </th>
        <th class="break top"></th>
        <th
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          11:05 - 12:00
        </th>
        <th
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          12:00 - 12:45
        </th>
        <th class="break top"></th>
        <th
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          1:45 - 2:40
        </th>
        <th
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          2:40 - 3:30
        </th>
        <th
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          3:30 - 4:30
        </th>
      </tr>
      <tr>
        <th
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          Monday
        </th>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Monday[0] }}
        </td>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Monday[1] }}
        </td>
        <td class="break"></td>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Monday[2] }}
        </td>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Monday[3] }}
        </td>
        <td class="break"></td>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Monday[4] }}
        </td>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Monday[5] }}
        </td>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Monday[6] }}
        </td>
      </tr>
      <tr>
        <th
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          Tuesday
        </th>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Tuesday[0] }}
        </td>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Tuesday[1] }}
        </td>
        <td class="break"></td>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Tuesday[2] }}
        </td>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Tuesday[3] }}
        </td>
        <td class="break"></td>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Tuesday[4] }}
        </td>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Tuesday[5] }}
        </td>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Tuesday[6] }}
        </td>
      </tr>
      <tr>
        <th
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          Wednesday
        </th>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Wednesday[0] }}
        </td>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Wednesday[1] }}
        </td>
        <td class="break">Break</td>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Wednesday[2] }}
        </td>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Wednesday[3] }}
        </td>
        <td class="break">Break</td>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Wednesday[4] }}
        </td>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Wednesday[5] }}
        </td>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Wednesday[6] }}
        </td>
      </tr>
      <tr>
        <th
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          Thursday
        </th>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Thursday[0] }}
        </td>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Thursday[1] }}
        </td>
        <td class="break"></td>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Thursday[2] }}
        </td>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Thursday[3] }}
        </td>
        <td class="break"></td>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Thursday[4] }}
        </td>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Thursday[5] }}
        </td>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Thursday[6] }}
        </td>
      </tr>
      <tr>
        <th
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          Friday
        </th>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Friday[0] }}
        </td>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Friday[1] }}
        </td>
        <td class="break"></td>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Friday[2] }}
        </td>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Friday[3] }}
        </td>
        <td class="break"></td>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Friday[4] }}
        </td>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Friday[5] }}
        </td>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Friday[6] }}
        </td>
      </tr>
      <tr>
        <th
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          Saturday
        </th>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Saturday[0] }}
        </td>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Saturday[1] }}
        </td>
        <td class="break bottom"></td>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Saturday[2] }}
        </td>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Saturday[3] }}
        </td>
        <td class="break bottom"></td>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Saturday[4] }}
        </td>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Saturday[5] }}
        </td>
        <td
          v-bind:style="
            $store.state.isDownloading
              ? 'border: 1px solid black; border-collapse: collapse;'
              : 'border: none;'
          "
        >
          {{ teacherObject.detail.Saturday[6] }}
        </td>
      </tr>
    </table>
    <br />
    <br />
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    teacherObject: {
      type: Object,
    },
    hideline: Boolean,
  },
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