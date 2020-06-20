<template>
  <div class="mapping">
    <div class="container">
      <div class="pills-container">
        <div class="pills" v-if="$store.state.cycle == 'Odd'">
          <div
            class="pill"
            @click="changeSemester(3)"
            v-bind:class="{'active':$store.state.semester == '3'}"
          >Third</div>
          <div
            class="pill"
            @click="changeSemester(5)"
            v-bind:class="{'active':$store.state.semester == 5}"
          >Fifth</div>
          <div
            class="pill"
            @click="changeSemester(7)"
            v-bind:class="{'active':$store.state.semester == 7}"
          >Seventh</div>
        </div>
        <div class="pills" v-else>
          <div
            class="pill"
            @click="changeSemester(4)"
            v-bind:class="{'active':$store.state.semester == 4}"
          >Fourth</div>
          <div
            class="pill"
            @click="changeSemester(6)"
            v-bind:class="{'active':$store.state.semester == 6}"
          >Sixth</div>
          <div
            class="pill"
            @click="changeSemester(8)"
            v-bind:class="{'active':$store.state.semester == 8}"
          >Eight</div>
        </div>
        <input
          type="text"
          placeholder="Section"
          list="section"
          class="section"
          v-model="$store.state.section"
        />
        <datalist name="section" id="section">
          <option value="A"></option>
          <option value="B"></option>
          <option value="C"></option>
        </datalist>
        <input type="text" placeholder="Classroom no." class="classroom" />
      </div>
      <mappingTable
        v-if="$store.state.semester == 3 && $store.state.section == 'A'"
        :sectionObject="$store.state.sec3a"
      />
      <mappingTable
        v-if="$store.state.semester == 3 && $store.state.section == 'B'"
        :sectionObject="$store.state.sec3b"
      />
      <mappingTable
        v-if="$store.state.semester == 3 && $store.state.section == 'C'"
        :sectionObject="$store.state.sec3c"
      />
      <mappingTable
        v-if="$store.state.semester == 4 && $store.state.section == 'A'"
        :sectionObject="$store.state.sec4a"
      />
      <mappingTable
        v-if="$store.state.semester == 4 && $store.state.section == 'B'"
        :sectionObject="$store.state.sec4b"
      />
      <mappingTable
        v-if="$store.state.semester == 4 && $store.state.section == 'C'"
        :sectionObject="$store.state.sec4c"
      />
      <mappingTable
        v-if="$store.state.semester == 5 && $store.state.section == 'A'"
        :sectionObject="$store.state.sec5a"
      />
      <mappingTable
        v-if="$store.state.semester == 5 && $store.state.section == 'B'"
        :sectionObject="$store.state.sec5b"
      />
      <mappingTable
        v-if="$store.state.semester == 5 && $store.state.section == 'C'"
        :sectionObject="$store.state.sec5c"
      />
      <mappingTable
        v-if="$store.state.semester == 6 && $store.state.section == 'A'"
        :sectionObject="$store.state.sec6a"
      />
      <mappingTable
        v-if="$store.state.semester == 6 && $store.state.section == 'B'"
        :sectionObject="$store.state.sec6b"
      />
      <mappingTable
        v-if="$store.state.semester == 6 && $store.state.section == 'C'"
        :sectionObject="$store.state.sec6c"
      />
      <mappingTable
        v-if="$store.state.semester == 7 && $store.state.section == 'A'"
        :sectionObject="$store.state.sec7a"
      />
      <mappingTable
        v-if="$store.state.semester == 7 && $store.state.section == 'B'"
        :sectionObject="$store.state.sec7b"
      />
      <mappingTable
        v-if="$store.state.semester == 8 && $store.state.section == 'A'"
        :sectionObject="$store.state.sec8a"
      />
      <mappingTable
        v-if="$store.state.semester == 8 && $store.state.section == 'B'"
        :sectionObject="$store.state.sec8b"
      />
    </div>
    <div class="btn" @click="route()">next</div>
  </div>
</template>

<script>
import mappingTable from "../../../components/mappingTable";

export default {
  components: {
    mappingTable
  },
  methods: {
    changeSemester(sem) {
      this.$store.state.semester = sem;
    }
  },
  created() {
    this.$store.state.progressCounter = 3;
    this.$store.state.progressSteps[1] = "Cycle";
    this.$store.state.progressSteps[2] = "Mapping";
  }
};
</script>

<style lang="scss" scoped>
@import "../../../scss/mediaQuery";
@import "../../../scss/create-cards";

.mapping {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .container {
    width: 85%;
    border-radius: 0.8rem;
    .pills-container {
      display: flex;
      width: 100%;
      height: 4rem;
      flex-wrap: wrap;
      margin-bottom: 1rem;
      @include ipad-portrait {
        justify-content: space-between;
        height: 6rem;
      }
      .pills {
        border-radius: 0.8rem;
        background: rgba($color: $primary-dark, $alpha: 0.2);
        width: 35%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        @include ipad-portrait {
          width: 58%;
          flex-wrap: wrap;
        }
        .pill {
          width: 4.8rem;
          padding: 0.65rem 1rem;
          margin: 0 0.5rem;
          border-radius: 0.5rem;
          text-align: center;
          cursor: pointer;
          @include ipad-portrait {
            margin: 0.5rem;
            padding: 0.4rem 1rem;
            border-radius: 0.8rem;
          }
        }
        .pill:hover {
          background: rgba(21, 127, 135, 0.2);
        }
        .active {
          background: rgb(21, 127, 135);
          color: white;
          box-shadow: 10px 10px 20px rgba(grey, 0.25);
        }
        .active:hover {
          background: rgb(21, 127, 135);
        }
      }
      input {
        border-radius: 0.8rem;
        background: rgba($color: $primary-dark, $alpha: 0.2);
        border: none;
        outline: none;
      }
      input::-webkit-calendar-picker-indicator {
        opacity: 100;
      }
      .section {
        width: 8%;
        text-indent: 15px;
        margin-left: auto;
        @include ipad-portrait {
          margin-left: 0.75rem;
          width: 15%;
        }
      }
      .classroom {
        width: 10%;
        text-indent: 5px;
        margin-left: 0.75rem;
        @include ipad-portrait {
          width: 18%;
          // text-indent: 0px;
        }
      }
    }
    .data-input {
      padding: 0;
    }
  }
}
</style>