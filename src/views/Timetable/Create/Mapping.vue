<template>
  <Loading :message="'Generating Timetable'" v-if="$store.state.isAutomating" />
  <div class="mapping" id="top" v-else>
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
        <div class="section-pills">
          <div
            class="pill"
            @click="changeSection('A')"
            v-bind:class="{ active: $store.state.section == 'A' }"
          >
            A
          </div>
          <div
            class="pill"
            @click="changeSection('B')"
            v-bind:class="{ active: $store.state.section == 'B' }"
          >
            B
          </div>
          <div
            v-if="$store.state.semester < 7"
            class="pill"
            @click="changeSection('C')"
            v-bind:class="{ active: $store.state.section == 'C' }"
          >
            C
          </div>
        </div>
        <div class="elective-pills">
          <div
            class="pill"
            @click="changeSemester(0)"
            v-bind:class="{ active: $store.state.semester == 0 }"
          >
            Electives
          </div>
        </div>
      </div>
      <transition
        name="custom-classes-transition"
        enter-active-class="animated fadeInUp"
        leave-active-class="animated fadeOutDown"
        mode="out-in"
        :duration="{ enter: 850, leave: 100 }"
        appear
      >
        <mappingTable
          v-if="$store.state.semester == 3 && $store.state.section == 'A'"
          :sectionObject="$store.state.allOddCycleClasses.sec3A"
          :key="'3A'"
        />
        <mappingTable
          v-else-if="$store.state.semester == 3 && $store.state.section == 'B'"
          :sectionObject="$store.state.allOddCycleClasses.sec3B"
          :key="'3B'"
        />
        <mappingTable
          v-else-if="$store.state.semester == 3 && $store.state.section == 'C'"
          :sectionObject="$store.state.allOddCycleClasses.sec3C"
          :key="'3C'"
        />
        <mappingTable
          v-else-if="$store.state.semester == 4 && $store.state.section == 'A'"
          :sectionObject="$store.state.allEvenCycleClasses.sec4A"
          :key="'4A'"
        />
        <mappingTable
          v-else-if="$store.state.semester == 4 && $store.state.section == 'B'"
          :sectionObject="$store.state.allEvenCycleClasses.sec4B"
          :key="'4B'"
        />
        <mappingTable
          v-else-if="$store.state.semester == 4 && $store.state.section == 'C'"
          :sectionObject="$store.state.allEvenCycleClasses.sec4C"
          :key="'4C'"
        />
        <mappingTable
          v-else-if="$store.state.semester == 5 && $store.state.section == 'A'"
          :sectionObject="$store.state.allOddCycleClasses.sec5A"
          :key="'5A'"
        />
        <mappingTable
          v-else-if="$store.state.semester == 5 && $store.state.section == 'B'"
          :sectionObject="$store.state.allOddCycleClasses.sec5B"
          :key="'5B'"
        />
        <mappingTable
          v-else-if="$store.state.semester == 5 && $store.state.section == 'C'"
          :sectionObject="$store.state.allOddCycleClasses.sec5C"
          :key="'5C'"
        />
        <mappingTable
          v-else-if="$store.state.semester == 6 && $store.state.section == 'A'"
          :sectionObject="$store.state.allEvenCycleClasses.sec6A"
          :key="'6A'"
        />
        <mappingTable
          v-else-if="$store.state.semester == 6 && $store.state.section == 'B'"
          :sectionObject="$store.state.allEvenCycleClasses.sec6B"
          :key="'6B'"
        />
        <mappingTable
          v-else-if="$store.state.semester == 6 && $store.state.section == 'C'"
          :sectionObject="$store.state.allEvenCycleClasses.sec6C"
          :key="'6C'"
        />
        <mappingTable
          v-else-if="$store.state.semester == 7 && $store.state.section == 'A'"
          :sectionObject="$store.state.allOddCycleClasses.sec7A"
          :key="'7A'"
        />
        <mappingTable
          v-else-if="$store.state.semester == 7 && $store.state.section == 'B'"
          :sectionObject="$store.state.allOddCycleClasses.sec7B"
          :key="'7B'"
        />
        <mappingTable
          v-else-if="$store.state.semester == 8 && $store.state.section == 'A'"
          :sectionObject="$store.state.allEvenCycleClasses.sec8a"
          :key="'8A'"
        />
        <mappingTable
          v-else-if="$store.state.semester == 8 && $store.state.section == 'B'"
          :sectionObject="$store.state.allEvenCycleClasses.sec8b"
          :key="'8B'"
        />
        <electiveTable
          v-else-if="$store.state.semester == 0 && $store.state.section == null"
          :key="'elective'"
        />
        <div v-else>
          <table>
            <tr>
              <th>
                <h1 style="margin: 0; font-weight: lighter">
                  Mapping : Professors & Labs
                </h1>
              </th>
            </tr>
            <tr>
              <td class="instructions">
                <ul>
                  <li>
                    This section lets you map the subjects of the respective
                    semester to the respective professors and lets you add
                    custom timings for labs and tutorials.
                  </li>
                  <li>
                    Please select the semester and section from the status bar
                    above to proceed.
                  </li>
                  <li>
                    <b>Note :</b> Please fill all the details to move to the
                    next step
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
      </transition>
    </div>
    <div
      v-if="$store.state.semester != null && $store.state.section != null"
      class="actions"
    >
      <a class="btn transparent grow" href="#top">Jump to Top</a>
      <div class="btn grow" @click="route()">Create Timetable</div>
    </div>
    <p v-if="$store.state.semester != null && $store.state.section != null">
      <b>Note</b> : Please ensure all data fields are filled properly
    </p>
    <transition name="fade" appear>
      <Error :obj="error" :emptyStr="true" />
    </transition>
  </div>
</template>

<script>
import mappingTable from "../../../components/Tables/mappingTable";
import electiveTable from "../../../components/Tables/electiveTable";
import Error from "../../../components/Modals/Error";
import Loading from "../../../components/Loading/Circle";

export default {
  components: {
    mappingTable,
    electiveTable,
    Error,
    Loading,
  },
  data() {
    return {
      error: {
        isVisible: false,
        message: {
          code: "420-69/missing-information",
          message: "",
        },
      },
    };
  },
  methods: {
    changeSemester(sem) {
      this.$store.state.semester = sem;
      if (sem >= 7 && this.$store.state.section == "C") {
        this.$store.state.section = "B";
      } else if (sem == 0) {
        this.$store.state.section = null;
      } else if (sem != 0 && this.$store.state.section == null) {
        this.$store.state.section = "A";
      }
    },
    changeSection(sec) {
      if (this.$store.state.semester == 0) {
        if (this.$store.state.cycle == "Odd") {
          this.$store.state.semester = 3;
        } else {
          this.$store.state.semester = 4;
        }
      }
      this.$store.state.section = sec;
    },
    route() {
      let isReadyToAutomate = true;

      this.$store.state.semester = null;
      this.$store.state.section = null;
      if (this.$store.state.cycle == "Odd") {
        let classNames = [
          "sec3A",
          "sec3B",
          "sec3C",
          "sec5A",
          "sec5B",
          "sec5C",
          "sec7A",
          "sec7B",
        ];

        for (let i = 0; i < 3; i++) {
          let sectionObject = this.$store.state.allOddCycleClasses[
            classNames[i]
          ];
          if (
            sectionObject.mathClass.RegularClass1.Day == "" ||
            sectionObject.mathClass.RegularClass1.Time == "" ||
            sectionObject.mathClass.RegularClass2.Day == "" ||
            sectionObject.mathClass.RegularClass2.Time == "" ||
            sectionObject.mathClass.RegularClass3.Day == "" ||
            sectionObject.mathClass.RegularClass3.Time == "" ||
            sectionObject.mathClass.TutorialClass.Day == "" ||
            sectionObject.mathClass.TutorialClass.Time == "" ||
            sectionObject.mathClass.Professors[0] == "" ||
            sectionObject.mathClass.Professors[1] == "" ||
            sectionObject.mathClass.Professors[2] == ""
          ) {
            this.error.message.message =
              "Please fill all the fields for Class " +
              classNames[i].substring(3);
            this.error.isVisible = true;
            isReadyToAutomate = false;
            break;
          }
        }

        for (
          let i = 0;
          i < this.$store.state.oddCycleElectives.sem5.subjects.length;
          i++
        ) {
          let k = 0;
          let subject = this.$store.state.oddCycleElectives.sem5.subjects[i];
          let noP = this.$store.state.oddCycleElectives.sem5.newProfessor[i];
          for (let j = 0; j < noP; j++) {
            if (subject.detail.Professors[j] == "") {
              this.error.message.message =
                "Please fill all the fields for Electives ";
              this.error.isVisible = true;
              isReadyToAutomate = false;
              k = 1;
              break;
            }
          }
          if (k == 1) break;
        }
        for (
          let i = 0;
          i < this.$store.state.oddCycleElectives.sem7.subjects.length;
          i++
        ) {
          let k = 0;
          let subject = this.$store.state.oddCycleElectives.sem7.subjects[i];
          let noP = this.$store.state.oddCycleElectives.sem7.newProfessor[i];
          for (let j = 0; j < noP; j++) {
            if (subject.detail.Professors[j] == "") {
              this.error.message.message =
                "Please fill all the fields for Electives ";
              this.error.isVisible = true;
              isReadyToAutomate = false;
              k = 1;
              break;
            }
          }
          if (k == 1) break;
        }

        for (
          let i = 0;
          i < this.$store.state.oddCycleOpenElectives.sem5.subjects.length;
          i++
        ) {
          let k = 0;
          let subject = this.$store.state.oddCycleOpenElectives.sem5.subjects[
            i
          ];
          let noP = this.$store.state.oddCycleOpenElectives.sem5.newProfessor[
            i
          ];
          if (
            subject.detail.classTimings.RegularClass1.Day == "" ||
            subject.detail.classTimings.RegularClass1.Time == "" ||
            subject.detail.classTimings.RegularClass2.Day == "" ||
            subject.detail.classTimings.RegularClass2.Time == "" ||
            subject.detail.classTimings.RegularClass3.Day == "" ||
            subject.detail.classTimings.RegularClass3.Time == ""
          ) {
            this.error.message.message =
              "Please fill all the fields for Electives ";
            this.error.isVisible = true;
            isReadyToAutomate = false;
            break;
          }
          for (let j = 0; j < noP; j++) {
            if (subject.detail.Professors[j] == "") {
              this.error.message.message =
                "Please fill all the fields for Electives ";
              this.error.isVisible = true;
              isReadyToAutomate = false;
              k = 1;
              break;
            }
          }
          if (k == 1) break;
        }

        for (
          let i = 0;
          i < this.$store.state.oddCycleOpenElectives.sem7.subjects.length;
          i++
        ) {
          let k = 0;
          let subject = this.$store.state.oddCycleOpenElectives.sem7.subjects[
            i
          ];
          let noP = this.$store.state.oddCycleOpenElectives.sem7.newProfessor[
            i
          ];
          if (
            subject.detail.classTimings.RegularClass1.Day == "" ||
            subject.detail.classTimings.RegularClass1.Time == "" ||
            subject.detail.classTimings.RegularClass2.Day == "" ||
            subject.detail.classTimings.RegularClass2.Time == "" ||
            subject.detail.classTimings.RegularClass3.Day == "" ||
            subject.detail.classTimings.RegularClass3.Time == ""
          ) {
            this.error.message.message =
              "Please fill all the fields for Electives ";
            this.error.isVisible = true;
            isReadyToAutomate = false;
            break;
          }
          for (let j = 0; j < noP; j++) {
            if (subject.detail.Professors[j] == "") {
              this.error.message.message =
                "Please fill all the fields for Electives ";
              this.error.isVisible = true;
              isReadyToAutomate = false;
              k = 1;
              break;
            }
          }
          if (k == 1) break;
        }

        for (let i = 0; i < 8; i++) {
          let sectionObject = this.$store.state.allOddCycleClasses[
            classNames[i]
          ];
          for (let j = 0; j < sectionObject.subjects.length; j++) {
            let sub = sectionObject.subjects[j];
            if (sub.detail.Credits.Lab > 0) {
              if (
                sub.detail.LabSchedule.Time == "" ||
                sub.detail.LabSchedule.Day == "" ||
                sub.detail.LabSchedule.LabNumber == ""
              ) {
                this.error.message.message =
                  "Please fill all the fields for Class " +
                  classNames[i].substring(3);
                this.error.isVisible = true;
                isReadyToAutomate = false;
                break;
              }
            }
            if (this.error.message.message != "") {
              break;
            }
            for (let k = 0; k < sectionObject.newProfessor[j]; k++) {
              if (sub.detail.Professors[k] == "") {
                this.error.message.message =
                  "Please fill all the fields for Class " +
                  classNames[i].substring(3);
                this.error.isVisible = true;
                isReadyToAutomate = false;
                break;
              }
            }
            if (this.error.message.message != "") {
              isReadyToAutomate = false;
              break;
            }
          }
          if (this.error.message.message != "") {
            isReadyToAutomate = false;
            break;
          }
        }
      } else {
        let classNames = [
          "sec4A",
          "sec4B",
          "sec4C",
          "sec6A",
          "sec6B",
          "sec6C",
          "sec8A",
          "sec8B",
        ];

        for (let i = 0; i < 3; i++) {
          let sectionObject = this.$store.state.allEvenCycleClasses[
            classNames[i]
          ];
          if (
            sectionObject.mathClass.RegularClass1.Day == "" ||
            sectionObject.mathClass.RegularClass1.Time == "" ||
            sectionObject.mathClass.RegularClass2.Day == "" ||
            sectionObject.mathClass.RegularClass2.Time == "" ||
            sectionObject.mathClass.RegularClass3.Day == "" ||
            sectionObject.mathClass.RegularClass3.Time == "" ||
            sectionObject.mathClass.TutorialClass.Day == "" ||
            sectionObject.mathClass.TutorialClass.Time == "" ||
            sectionObject.mathClass.Professors[0] == "" ||
            sectionObject.mathClass.Professors[1] == "" ||
            sectionObject.mathClass.Professors[2] == ""
          ) {
            this.error.message.message =
              "Please fill all the fields for Class " +
              classNames[i].substring(3);
            this.error.isVisible = true;
            isReadyToAutomate = false;
            break;
          }
        }

        for (
          let i = 0;
          i < this.$store.state.evenCycleElectives.sem6.subjects.length;
          i++
        ) {
          let k = 0;
          let subject = this.$store.state.evenCycleElectives.sem6.subjects[i];
          let noP = this.$store.state.evenCycleElectives.sem6.newProfessor[i];
          for (let j = 0; j < noP; j++) {
            if (subject.detail.Professors[j] == "") {
              this.error.message.message =
                "Please fill all the fields for Electives ";
              this.error.isVisible = true;
              isReadyToAutomate = false;
              k = 1;
              break;
            }
          }
          if (k == 1) break;
        }

        for (
          let i = 0;
          i < this.$store.state.evenCycleOpenElectives.sem6.subjects.length;
          i++
        ) {
          let k = 0;
          let subject = this.$store.state.evenCycleOpenElectives.sem6.subjects[
            i
          ];
          let noP = this.$store.state.evenCycleOpenElectives.sem6.newProfessor[
            i
          ];
          if (
            subject.detail.classTimings.RegularClass1.Day == "" ||
            subject.detail.classTimings.RegularClass1.Time == "" ||
            subject.detail.classTimings.RegularClass2.Day == "" ||
            subject.detail.classTimings.RegularClass2.Time == "" ||
            subject.detail.classTimings.RegularClass3.Day == "" ||
            subject.detail.classTimings.RegularClass3.Time == ""
          ) {
            this.error.message.message =
              "Please fill all the fields for Electives ";
            this.error.isVisible = true;
            isReadyToAutomate = false;
            break;
          }
          for (let j = 0; j < noP; j++) {
            if (subject.detail.Professors[j] == "") {
              this.error.message.message =
                "Please fill all the fields for Electives ";
              this.error.isVisible = true;
              isReadyToAutomate = false;
              k = 1;
              break;
            }
          }
          if (k == 1) break;
        }

        for (let i = 0; i < 6; i++) {
          let sectionObject = this.$store.state.allEvenCycleClasses[
            classNames[i]
          ];
          for (let j = 0; j < sectionObject.subjects.length; j++) {
            let sub = sectionObject.subjects[j];
            if (sub.detail.Credits.Lab > 0) {
              if (
                sub.detail.LabSchedule.Time == "" ||
                sub.detail.LabSchedule.Day == "" ||
                sub.detail.LabSchedule.LabNumber == ""
              ) {
                this.error.message.message =
                  "Please fill all the fields for Class " +
                  classNames[i].substring(3);
                this.error.isVisible = true;
                isReadyToAutomate = false;
                break;
              }
            }
            if (this.error.message.message != "") {
              isReadyToAutomate = false;
              break;
            }
            for (let k = 0; k < sectionObject.newProfessor[j]; k++) {
              if (sub.detail.Professors[k] == "") {
                this.error.message.message =
                  "Please fill all the fields for Class " +
                  classNames[i].substring(3);
                this.error.isVisible = true;
                isReadyToAutomate = false;
                break;
              }
            }
            if (this.error.message.message != "") {
              isReadyToAutomate = false;
              break;
            }
          }
          if (this.error.message.message != "") {
            isReadyToAutomate = false;
            break;
          }
        }
      }
      if (isReadyToAutomate) {
        this.$store
          .dispatch("automateTimetable")
          .then(() => {
            this.$router.push("/timetable/result");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        console.log(isReadyToAutomate);
      }

      /*    
      
      console.log(isReadyToAutomate);
      //put this stuff after validation
      if (this.$store.state.createType == 1) {
        this.$store
        .dispatch("automateTimetable")
        .then(()=> {
          this.$router.push("/timetable/result");
        })
        .catch(err => {
          console.log(err);
        });
      } else {
        //this.$router.push("/timetable/manual");
        alert("drag & drop");
      }  


*/
    },
  },
  created() {
    this.$store.state.isMapping = true;
    this.$store.state.sidebarCounter = 2;
    this.$store.state.progressCounter = 3;
    localStorage.setItem("currentRoute", this.$route.path);
    localStorage.setItem("createRouteTracker", this.$route.path);
    this.$store.state.createRouteTracker = localStorage.getItem(
      "createRouteTracker"
    );
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
@import "../../../scss/create-cards";
@import "../../../scss/table";
@import "../../../scss/pills";
@import "../../../scss/custom-animations";

.mapping {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
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
  .actions {
    display: flex;
    justify-content: center;
    .btn {
      width: 9rem;
      text-align: center;
      text-decoration: none;
    }
    .btn:hover {
      background-image: $gradient-inverted;
    }
    .btn:active {
      transform: scale(0.95);
    }
    .transparent {
      background-image: none;
      background: rgba($primary, 0.1);
      border-color: rgba($primary, 0.1);
      color: black;
    }
    .transparent:hover {
      background-image: none;
      background: rgba(21, 127, 135, 0.2);
    }
  }
}

.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-leave-to {
  opacity: 0;
}
</style>