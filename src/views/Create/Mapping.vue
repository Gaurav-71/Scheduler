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
        v-else-if="$store.state.semester == 3 && $store.state.section == 'B'"
        :sectionObject="$store.state.sec3b"
      />
      <mappingTable
        v-else-if="$store.state.semester == 3 && $store.state.section == 'C'"
        :sectionObject="$store.state.sec3c"
      />
      <mappingTable
        v-else-if="$store.state.semester == 4 && $store.state.section == 'A'"
        :sectionObject="$store.state.sec4a"
      />
      <mappingTable
        v-else-if="$store.state.semester == 4 && $store.state.section == 'B'"
        :sectionObject="$store.state.sec4b"
      />
      <mappingTable
        v-else-if="$store.state.semester == 4 && $store.state.section == 'C'"
        :sectionObject="$store.state.sec4c"
      />
      <mappingTable
        v-else-if="$store.state.semester == 5 && $store.state.section == 'A'"
        :sectionObject="$store.state.sec5a"
      />
      <mappingTable
        v-else-if="$store.state.semester == 5 && $store.state.section == 'B'"
        :sectionObject="$store.state.sec5b"
      />
      <mappingTable
        v-else-if="$store.state.semester == 5 && $store.state.section == 'C'"
        :sectionObject="$store.state.sec5c"
      />
      <mappingTable
        v-else-if="$store.state.semester == 6 && $store.state.section == 'A'"
        :sectionObject="$store.state.sec6a"
      />
      <mappingTable
        v-else-if="$store.state.semester == 6 && $store.state.section == 'B'"
        :sectionObject="$store.state.sec6b"
      />
      <mappingTable
        v-else-if="$store.state.semester == 6 && $store.state.section == 'C'"
        :sectionObject="$store.state.sec6c"
      />
      <mappingTable
        v-else-if="$store.state.semester == 7 && $store.state.section == 'A'"
        :sectionObject="$store.state.sec7a"
      />
      <mappingTable
        v-else-if="$store.state.semester == 7 && $store.state.section == 'B'"
        :sectionObject="$store.state.sec7b"
      />
      <mappingTable
        v-else-if="$store.state.semester == 8 && $store.state.section == 'A'"
        :sectionObject="$store.state.sec8a"
      />
      <mappingTable
        v-else-if="$store.state.semester == 8 && $store.state.section == 'B'"
        :sectionObject="$store.state.sec8b"
      />
      <div v-else>
        <table>
          <tr>
            <th>
              <h1 style="margin:0;font-weight:lighter;">Mapping : Courses & Professors</h1>
            </th>
          </tr>
          <tr>
            <td class="instructions">
              <ul>
                <li>This section lets you map the subjects of the respective semester to the respective professors.</li>
                <li>Please select the semester and section from the status bar above to proceed.</li>
                <li>
                  <b>Note :</b> Please fill all the details to move to the next step
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

export default {
  components: {
    mappingTable
  },
  methods: {
    changeSemester(sem) {
      this.$store.state.semester = sem;
    },
    route() {
      this.$router.push("/timetable/create/automated/mapping/timing");
    }
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
      .then(() => {
      })
      .catch((err) => {
        console.log(err);
      });
  }
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