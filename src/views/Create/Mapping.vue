<template>
  <div class="mapping">
    <div class="container">
      <div class="pills-container">
        <div class="pills" v-if="$store.state.cycle == 'Odd'">
          <div
            class="pill"
            @click="changeSemester(3)"
            v-bind:class="{ active: $store.state.semester == 3 }"
          >
            Third
          </div>
          <div
            class="pill"
            @click="changeSemester(5)"
            v-bind:class="{ active: $store.state.semester == 5 }"
          >
            Fifth
          </div>
          <div
            class="pill"
            @click="changeSemester(7)"
            v-bind:class="{ active: $store.state.semester == 7 }"
          >
            Seventh
          </div>
        </div>
        <div class="pills" v-else>
          <div
            class="pill"
            @click="changeSemester(4)"
            v-bind:class="{ active: $store.state.semester == 4 }"
          >
            Fourth
          </div>
          <div
            class="pill"
            @click="changeSemester(6)"
            v-bind:class="{ active: $store.state.semester == 6 }"
          >
            Sixth
          </div>
          <div
            class="pill"
            @click="changeSemester(8)"
            v-bind:class="{ active: $store.state.semester == 8 }"
          >
            Eight
          </div>
        </div>
        <div
            class="pill"
            @click="changeSction('A')"
            v-bind:class="{ active: $store.state.section == 'A' }"
          >
            A
          </div>
          <div
            class="pill"
            @click="changeSction('B')"
            v-bind:class="{ active: $store.state.section == 'B' }"
          >
            B
          </div>
          <div
            v-if="$store.state.semester<7"
            class="pill"
            @click="changeSction('C')"
            v-bind:class="{ active: $store.state.section == 'C' }"
          >
            C
          </div>
        <input type="text" placeholder="Classroom no." class="classroom" />
      </div>
      <mappingTable
        v-if="$store.state.semester == 3 && $store.state.section == 'A'"
        :sectionObject="$store.state.allOddCycleClasses.sec3A"
        :position="0"
        @changeOddMapping="changeOddMapping"
      />
      <mappingTable
        v-else-if="$store.state.semester == 3 && $store.state.section == 'B'"
        :sectionObject="$store.state.allOddCycleClasses.sec3B"
        :position="1"
        @changeOddMapping="changeOddMapping"
      />
      <mappingTable
        v-else-if="$store.state.semester == 3 && $store.state.section == 'C'"
        :sectionObject="$store.state.allOddCycleClasses.sec3C"
        :position="2"
        @changeOddMapping="changeOddMapping"
      />
      <mappingTable
        v-else-if="$store.state.semester == 4 && $store.state.section == 'A'"
        :sectionObject="$store.state.allEvenCycleClasses.sec4A"
        :position="0"
        @changeEvenMapping="changeEvenMapping"
      />
      <mappingTable
        v-else-if="$store.state.semester == 4 && $store.state.section == 'B'"
        :sectionObject="$store.state.allEvenCycleClasses.sec4B"
        :position="1"
        @changeEvenMapping="changeEvenMapping"
      />
      <mappingTable
        v-else-if="$store.state.semester == 4 && $store.state.section == 'C'"
        :sectionObject="$store.state.allEvenCycleClasses.sec4C"
        :position="2"
        @changeEvenMapping="changeEvenMapping"
      />
      <mappingTable
        v-else-if="$store.state.semester == 5 && $store.state.section == 'A'"
        :sectionObject="$store.state.allOddCycleClasses.sec5A"
        :position="3"
        @changeOddMapping="changeOddMapping"
      />
      <mappingTable
        v-else-if="$store.state.semester == 5 && $store.state.section == 'B'"
        :sectionObject="$store.state.allOddCycleClasses.sec5B"
        :position="4"
        @changeOddMapping="changeOddMapping"
      />
      <mappingTable
        v-else-if="$store.state.semester == 5 && $store.state.section == 'C'"
        :sectionObject="$store.state.allOddCycleClasses.sec5C"
        :position="5"
        @changeOddMapping="changeOddMapping"
      />
      <mappingTable
        v-else-if="$store.state.semester == 6 && $store.state.section == 'A'"
        :sectionObject="$store.state.allEvenCycleClasses.sec6A"
        :position="3"
        @changeEvenMapping="changeEvenMapping"
      />
      <mappingTable
        v-else-if="$store.state.semester == 6 && $store.state.section == 'B'"
        :sectionObject="$store.state.allEvenCycleClasses.sec6B"
        :position="4"
        @changeEvenMapping="changeEvenMapping"
      />
      <mappingTable
        v-else-if="$store.state.semester == 6 && $store.state.section == 'C'"
        :sectionObject="$store.state.allEvenCycleClasses.sec6C"
        :position="5"
        @changeEvenMapping="changeEvenMapping"
      />
      <mappingTable
        v-else-if="$store.state.semester == 7 && $store.state.section == 'A'"
        :sectionObject="$store.state.allOddCycleClasses.sec7A"
        :position="6"
        @changeOddMapping="changeOddMapping"
      />
      <mappingTable
        v-else-if="$store.state.semester == 7 && $store.state.section == 'B'"
        :sectionObject="$store.state.allOddCycleClasses.sec7B"
        :position="7"
        @changeOddMapping="changeOddMapping"
      />
      <mappingTable
        v-else-if="$store.state.semester == 8 && $store.state.section == 'A'"
        :sectionObject="$store.state.allEvenCycleClasses.sec8a"
        :position="6"
        @changeEvenMapping="changeEvenMapping"
      />
      <mappingTable
        v-else-if="$store.state.semester == 8 && $store.state.section == 'B'"
        :sectionObject="$store.state.allEvenCycleClasses.sec8b"
        :position="7"
        @changeEvenMapping="changeEvenMapping"
      />
      <br />
      <br />
      <TimingTable
        v-if="$store.state.semester == 3 && $store.state.section == 'A'"
        :timingObject="$store.state.allOddCycleClasses.sec3A"
        :position="0"
        @changeOddTiming="changeOddTiming"
      />
      <TimingTable
        v-else-if="$store.state.semester == 3 && $store.state.section == 'B'"
        :timingObject="$store.state.allOddCycleClasses.sec3B"
        :position="1"
        @changeOddTiming="changeOddTiming"
      />
      <TimingTable
        v-else-if="$store.state.semester == 3 && $store.state.section == 'C'"
        :timingObject="$store.state.allOddCycleClasses.sec3C"
        :position="2"
        @changeOddTiming="changeOddTiming"
      />
      <TimingTable
        v-else-if="$store.state.semester == 4 && $store.state.section == 'A'"
        :timingObject="$store.state.allEvenCycleClasses.sec4A"
        :position="0"
        @changeEvenTiming="changeEvenTiming"
      />
      <TimingTable
        v-else-if="$store.state.semester == 4 && $store.state.section == 'B'"
        :timingObject="$store.state.allEvenCycleClasses.sec4B"
        :position="1"
        @changeEvenTiming="changeEvenTiming"
      />
      <TimingTable
        v-else-if="$store.state.semester == 4 && $store.state.section == 'C'"
        :timingObject="$store.state.allEvenCycleClasses.sec4C"
        :position="2"
        @changeEvenTiming="changeEvenTiming"
      />
      <TimingTable
        v-else-if="$store.state.semester == 5 && $store.state.section == 'A'"
        :timingObject="$store.state.allOddCycleClasses.sec5A"
        :position="3"
        @changeOddTiming="changeOddTiming"
      />
      <TimingTable
        v-else-if="$store.state.semester == 5 && $store.state.section == 'B'"
        :timingObject="$store.state.allOddCycleClasses.sec5B"
        :position="4"
        @changeOddTiming="changeOddTiming"
      />
      <TimingTable
        v-else-if="$store.state.semester == 5 && $store.state.section == 'C'"
        :timingObject="$store.state.allOddCycleClasses.sec5C"
        :position="5"
        @changeOddTiming="changeOddTiming"
      />
      <TimingTable
        v-else-if="$store.state.semester == 6 && $store.state.section == 'A'"
        :timingObject="$store.state.allEvenCycleClasses.sec6A"
        :position="3"
        @changeEvenTiming="changeEvenTiming"
      />
      <TimingTable
        v-else-if="$store.state.semester == 6 && $store.state.section == 'B'"
        :timingObject="$store.state.allEvenCycleClasses.sec6B"
        :position="4"
        @changeEvenTiming="changeEvenTiming"
      />
      <TimingTable
        v-else-if="$store.state.semester == 6 && $store.state.section == 'C'"
        :timingObject="$store.state.allEvenCycleClasses.sec6C"
        :position="5"
        @changeEvenTiming="changeEvenTiming"
      />
      <TimingTable
        v-else-if="$store.state.semester == 7 && $store.state.section == 'A'"
        :timingObject="$store.state.allOddCycleClasses.sec7A"
        :position="6"
        @changeOddTiming="changeOddTiming"
      />
      <TimingTable
        v-else-if="$store.state.semester == 7 && $store.state.section == 'B'"
        :timingObject="$store.state.allOddCycleClasses.sec7B"
        :position="7"
        @changeOddTiming="changeOddTiming"
      />
      <TimingTable
        v-else-if="$store.state.semester == 8 && $store.state.section == 'A'"
        :timingObject="$store.state.allEvenCycleClasses.sec8A"
        :position="6"
        @changeEvenTiming="changeEvenTiming"
      />
      <TimingTable
        v-else-if="$store.state.semester == 8 && $store.state.section == 'B'"
        :timingObject="$store.state.allEvenCycleClasses.sec8B"
        :position="7"
        @changeEvenTiming="changeEvenTiming"
      />
      <div v-else>
        <table>
          <tr>
            <th>
              <h1 style="margin:0;font-weight:lighter;">
                Mapping : Courses & Professors
              </h1>
            </th>
          </tr>
          <tr>
            <td class="instructions">
              <ul>
                <li>
                  This section lets you map the subjects of the respective
                  semester to the respective professors and lets you add custom
                  timings for labs and tutorials.
                </li>
                <li>
                  Please select the semester and section from the status bar
                  above to proceed.
                </li>
                <li>
                  <b>Note :</b> Please fill all the details to move to the next
                  step
                </li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="btn" @click="route()">next</div>
  </div>
</template>

<script>
import mappingTable from "../../components/Tables/mappingTable";
import TimingTable from "../../components/Tables/TimingTable";
export default {
  components: {
    mappingTable,
    TimingTable,
  },
  data() {
    return {
      allOddSemSectionsFilledTiming: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      allOddSemSectionsFilledMapping: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      allEvenSemSectionsFilledTiming: [
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      allEvenSemSectionsFilledMapping: [
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    };
  },
  methods: {
    changeSemester(sem) {
      this.$store.state.semester = sem;
    },
    route() {
      

      this.$router.push("/timetable/create/automated/mapping/timing");
    },
    changeEvenTiming(payload) {
      this.allEvenSemSectionsFilledTiming[payload.index] = payload.trueValue;
    },
    changeOddTiming(payload) {
      this.allOddSemSectionsFilledTiming[payload.index] = payload.trueValue;
    },
    changeEvenMapping(payload) {
      console.log(payload);
      this.allEvenSemSectionsFilledMappping[payload.index] = payload.trueValue;
    },
    changeOddMapping(payload) {
      console.log(payload);
      this.allOddSemSectionsFilledMappping[payload.index] = payload.trueValue;
    },
  },
  created() {
    this.$store.state.sidebarCounter = 2;
    this.$store.state.progressCounter = 3;
    localStorage.setItem("currentRoute", this.$route.path);
    localStorage.setItem("createRouteTracker", this.$route.path);
    this.$store.state.createRouteTracker = localStorage.getItem(
      "createRouteTracker"
    );
  },
  mounted() {
    this.$store
      .dispatch("assignSectionDetails")
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/create-cards";
@import "../../scss/table";
@import "../../scss/pills";

.mapping {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .container {
    width: 85%;
    border-radius: 0.8rem;
    .data-input {
      padding: 0;
    }
    .instructions {
      padding: 1rem 1.5rem;
      text-align: left;
      font-size: 1.2rem;
      ul {
        li {
          margin: 1rem 0;
        }
      }
    }
  }
}
</style>
