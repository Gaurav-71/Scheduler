<template>
  <div class="result" id="page-top">
    <Heading :obj="headingObj" />
    <div class="container">
      <div class="pills-container type">
        <div class="type-pills">
          <div
            class="pill"
            @click="changeType(1)"
            v-bind:class="{ active: type == 1 }"
          >
            Students
          </div>
          <div
            class="pill"
            @click="changeType(2)"
            v-bind:class="{ active: type == 2 }"
          >
            Teachers
          </div>
        </div>
        <div v-if="type == 2" class="download-container">
          <div class="download">
            <div class="pill">Download All</div>
          </div>
          <div class="doc-types">
            <img
              src="../../../assets/Result/pdf.svg"
              alt="pdf"
              @click="printPDF()"
            />
            <img
              src="../../../assets/Result/word.svg"
              alt="word"
              style="margin-left: 1rem"
              @click="printDoc(printID, filename)"
            />
          </div>
        </div>
        <div
          @click="route()"
          class="save grow"
          v-bind:class="{ nomargin: type == 2 }"
        >
          <div class="pill">Save & Exit</div>
        </div>
      </div>
      <transition
        name="custom-classes-transition-2"
        enter-active-class="animated fadeInLeft"
        leave-active-class="animated fadeOutRight"
        mode="out-in"
        :duration="{ leave: 450 }"
        appear
      >
        <div v-if="type == 1" :key="'Student tt'">
          <div class="pills-container semester-section">
            <div class="all-pills">
              <div
                class="pill"
                @click="changeSemester(0)"
                v-bind:class="{ active: $store.state.semester == 0 }"
              >
                All
              </div>
            </div>
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
            <div
              v-if="$store.state.semester == 0 || $store.state.section != null"
              class="download-container"
            >
              <div class="download">
                <div v-if="$store.state.semester == 0" class="pill">
                  Download All
                  <span>as</span>
                </div>
                <div v-else class="pill">
                  Download {{ $store.state.semester }}{{ $store.state.section }}
                  <span>as</span>
                </div>
              </div>
              <div class="doc-types">
                <img
                  src="../../../assets/Result/pdf.svg"
                  alt="pdf"
                  class="click shake"
                  @click="printPDF()"
                />
                <img
                  src="../../../assets/Result/word.svg"
                  alt="word"
                  style="margin-left: 1rem"
                  class="click shake"
                  @click="printDoc(printID, filename)"
                />
              </div>
            </div>
          </div>
          <div v-if="($store.state.cycle = 'Odd')">
            <transition
              name="custom-classes-transition"
              enter-active-class="animated fadeInUp"
              leave-active-class="animated fadeOutDown"
              mode="out-in"
              :duration="{ enter: 850, leave: 150 }"
              appear
            >
              <div v-if="$store.state.semester == 0" id="all-odd">
                <studentTable
                  :sectionObject="$store.state.allOddCycleClasses.sec3A"
                  :hideline="false"
                />
                <studentTable
                  :sectionObject="$store.state.allOddCycleClasses.sec3B"
                  :hideline="false"
                />
                <studentTable
                  :sectionObject="$store.state.allOddCycleClasses.sec3C"
                  :hideline="false"
                />
                <studentTable
                  :sectionObject="$store.state.allOddCycleClasses.sec5A"
                  :hideline="false"
                />
                <studentTable
                  :sectionObject="$store.state.allOddCycleClasses.sec5B"
                  :hideline="false"
                />
                <studentTable
                  :sectionObject="$store.state.allOddCycleClasses.sec5C"
                  :hideline="false"
                />
                <studentTable
                  :sectionObject="$store.state.allOddCycleClasses.sec7A"
                  :hideline="false"
                />
                <studentTable
                  :sectionObject="$store.state.allOddCycleClasses.sec7B"
                  :hideline="true"
                />
              </div>
              <studentTable
                v-else-if="
                  $store.state.semester == 3 && $store.state.section == 'A'
                "
                :sectionObject="$store.state.allOddCycleClasses.sec3A"
                :hideline="true"
                id="3A"
                :key="'3A'"
              />
              <studentTable
                v-else-if="
                  $store.state.semester == 3 && $store.state.section == 'B'
                "
                :sectionObject="$store.state.allOddCycleClasses.sec3B"
                :hideline="true"
                id="3B"
                :key="'3B'"
              />
              <studentTable
                v-else-if="
                  $store.state.semester == 3 && $store.state.section == 'C'
                "
                :sectionObject="$store.state.allOddCycleClasses.sec3C"
                :hideline="true"
                id="3C"
                :key="'3C'"
              />
              <studentTable
                v-else-if="
                  $store.state.semester == 5 && $store.state.section == 'A'
                "
                :sectionObject="$store.state.allOddCycleClasses.sec5A"
                :hideline="true"
                id="5A"
                :key="'5A'"
              />
              <studentTable
                v-else-if="
                  $store.state.semester == 5 && $store.state.section == 'B'
                "
                :sectionObject="$store.state.allOddCycleClasses.sec5B"
                :hideline="true"
                id="5B"
                :key="'5B'"
              />
              <studentTable
                v-else-if="
                  $store.state.semester == 5 && $store.state.section == 'C'
                "
                :sectionObject="$store.state.allOddCycleClasses.sec5C"
                :hideline="true"
                id="5C"
                :key="'5C'"
              />
              <studentTable
                v-else-if="
                  $store.state.semester == 7 && $store.state.section == 'A'
                "
                :sectionObject="$store.state.allOddCycleClasses.sec7A"
                :hideline="true"
                id="7A"
                :key="'7A'"
              />
              <studentTable
                v-else-if="
                  $store.state.semester == 7 && $store.state.section == 'B'
                "
                :sectionObject="$store.state.allOddCycleClasses.sec7B"
                :hideline="true"
                id="7B"
                :key="'7B'"
              />
              <div v-else :key="'instructions'">
                <p style="text-align: center; margin: 2rem">
                  <b>Note</b> : Please Select a semester & section
                </p>
              </div>
            </transition>
          </div>
          <div v-else>
            <transition
              name="custom-classes-transition"
              enter-active-class="animated fadeInUp"
              leave-active-class="animated fadeOutDown"
              mode="out-in"
              :duration="{ leave: 150 }"
              appear
            >
              <div v-if="$store.state.semester == 0" id="all-even">
                <studentTable
                  :sectionObject="$store.state.allEvenCycleClasses.sec4A"
                  :hideline="false"
                />
                <studentTable
                  :sectionObject="$store.state.allEvenCycleClasses.sec4B"
                  :hideline="false"
                />
                <studentTable
                  :sectionObject="$store.state.allEvenCycleClasses.sec4C"
                  :hideline="false"
                />
                <studentTable
                  :sectionObject="$store.state.allEvenCycleClasses.sec6A"
                  :hideline="false"
                />
                <studentTable
                  :sectionObject="$store.state.allEvenCycleClasses.sec6B"
                  :hideline="false"
                />
                <studentTable
                  :sectionObject="$store.state.allEvenCycleClasses.sec6C"
                  :hideline="false"
                />
                <studentTable
                  :sectionObject="$store.state.allEvenCycleClasses.sec8a"
                  :hideline="false"
                />
                <studentTable
                  :sectionObject="$store.state.allEvenCycleClasses.sec8b"
                  :hideline="true"
                />
              </div>
              <studentTable
                v-else-if="
                  $store.state.semester == 4 && $store.state.section == 'A'
                "
                :sectionObject="$store.state.allOddCycleClasses.sec4A"
                :hideline="true"
                id="4A"
                :key="'4A'"
              />
              <studentTable
                v-else-if="
                  $store.state.semester == 4 && $store.state.section == 'B'
                "
                :sectionObject="$store.state.allOddCycleClasses.sec4B"
                :hideline="true"
                id="4B"
                :key="'4B'"
              />
              <studentTable
                v-else-if="
                  $store.state.semester == 4 && $store.state.section == 'C'
                "
                :sectionObject="$store.state.allOddCycleClasses.sec4C"
                :hideline="true"
                id="4C"
                :key="'4C'"
              />
              <studentTable
                v-else-if="
                  $store.state.semester == 6 && $store.state.section == 'A'
                "
                :sectionObject="$store.state.allOddCycleClasses.sec6A"
                :hideline="true"
                id="6A"
                :key="'6A'"
              />
              <studentTable
                v-else-if="
                  $store.state.semester == 6 && $store.state.section == 'B'
                "
                :sectionObject="$store.state.allOddCycleClasses.sec6B"
                :hideline="true"
                id="6B"
                :key="'6B'"
              />
              <studentTable
                v-else-if="
                  $store.state.semester == 6 && $store.state.section == 'C'
                "
                :sectionObject="$store.state.allOddCycleClasses.sec6C"
                :hideline="true"
                id="6C"
                :key="'6C'"
              />
              <studentTable
                v-else-if="
                  $store.state.semester == 8 && $store.state.section == 'A'
                "
                :sectionObject="$store.state.allOddCycleClasses.sec8A"
                :hideline="true"
                id="8A"
                :key="'8A'"
              />
              <studentTable
                v-else-if="
                  $store.state.semester == 8 && $store.state.section == 'B'
                "
                :sectionObject="$store.state.allOddCycleClasses.sec8B"
                :hideline="true"
                id="8B"
                :key="'8B'"
              />
              <div v-else :key="'Instructions'">
                <p style="text-align: center; margin: 2rem">
                  <b>Note</b> : Please Select a semester & section
                </p>
              </div>
            </transition>
          </div>
        </div>
        <div v-else-if="type == 2" id="all-prof" :key="'Professors tt'">
          <div
            v-for="(professor, index) in this.$store.state.professorList"
            :key="index"
          >
            <teacherTable :teacherObject="professor" />
          </div>
        </div>
        <div v-else :key="'General Instructions'">
          <table>
            <tr>
              <th>
                <h1 style="margin: 0; font-weight: lighter">
                  Class Timetables
                </h1>
              </th>
            </tr>
            <tr>
              <td class="instructions">
                <ul>
                  <li>
                    A list of automatically generated timetables for students
                    and professors
                  </li>
                  <li>
                    Download timetables as either a PDF or a Word Document and
                    share with ease
                  </li>
                  <li>
                    Please select the type of timetable you want to view from
                    the status bar above to proceed
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
      </transition>
    </div>
    <div
      v-if="$store.state.semester == 0 || $store.state.section != null"
      class="actions"
      style="margin-top: 2.5rem"
    >
      <div class="btn transparent grow" @click="printDoc(printID, filename)">
        Download as Word
      </div>
      <div class="btn grow" @click="route()">Save & Exit</div>
      <div class="btn transparent grow" @click="printPDF()">
        Download as PDF
      </div>
    </div>
    <div
      v-if="$store.state.semester == 0 || $store.state.section != null"
      class="actions"
      style="margin-top: 1rem"
    >
      <a class="btn transparent grow" href="#page-top">Jump to Top</a>
      <div class="btn transparent hide grow">Generate Again</div>
    </div>
    <div class="btn generate grow" @click="generateAgain">Generate Again</div>
  </div>
</template>

<script>
import studentTable from "../../../components/Tables/studentTable";
import teacherTable from "../../../components/Tables/teacherTable";
import Heading from "../../../components/Design/Heading";
export default {
  components: {
    studentTable,
    teacherTable,
    Heading,
  },
  data() {
    return {
      headingObj: {
        h1: "Class Timetables",
        h4:
          "A list of automatically generated timetables for students & professors",
        src: "results.svg",
      },
      type: null,
      printID: 0,
      filename: "All",
    };
  },
  methods: {
    printPDF() {
      window.print();
    },
    createID(sem, sec) {
      if (this.type == 1) {
        if (sem == 0) {
          if (this.$store.state.cycle == "Odd") {
            this.printID = "all-odd";
          } else {
            this.printID = "all-even";
          }
          this.filename = "All Semesters Timetable";
        } else {
          this.printID = sem + sec;
          this.filename =
            "Class " + this.printID + " Timetable " + this.$store.state.term;
        }
      } else {
        this.printID = "all-prof";
        this.filename = "All Professors Timetable";
      }
    },
    printToWord(element, filename) {
      var preHtml =
        "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
      var postHtml = "</body></html>";
      var html =
        preHtml + document.getElementById(element).innerHTML + postHtml;

      var blob = new Blob(["\ufeff", html], {
        type: "application/msword",
      });

      // Specify link url
      var url =
        "data:application/vnd.ms-word;charset=utf-8," +
        encodeURIComponent(html);

      // Specify file name
      filename = filename ? filename + ".doc" : "document.doc";

      // Create download link element
      var downloadLink = document.createElement("a");

      document.body.appendChild(downloadLink);

      if (navigator.msSaveOrOpenBlob) {
        navigator.msSaveOrOpenBlob(blob, filename);
      } else {
        // Create a link to the file
        downloadLink.href = url;

        // Setting the file name
        downloadLink.download = filename;

        //triggering the function
        downloadLink.click();

        document.body.removeChild(downloadLink);
      }
    },
    async printDoc(element, filename = "") {
      this.$store.state.isDownloading = true;
      await setTimeout(() => {}, 1000);
      await this.printToWord(element, filename);
      this.$store.state.isDownloading = false;
    },
    route() {
      localStorage.setItem("createRouteTracker", "/timetable/create");
      this.$store.state.createRouteTracker = localStorage.getItem(
        "createRouteTracker"
      );
      this.$store.state.semester = null;
      this.$store.state.section = null;
      this.$store.state.cycle = null;
      this.$store.state.term = "";
      this.$store.state.department = "";
      this.$router.push("/timetable");
    },
    changeSemester(sem) {
      this.$store.state.semester = sem;
      this.$store.state.isDownloading = false;
      if (sem >= 7 && this.$store.state.section == "C") {
        this.$store.state.section = "B";
      }
      if (sem == 0) {
        this.$store.state.section = null;
      }
      this.createID(this.$store.state.semester, this.$store.state.section);
    },
    changeSection(sec) {
      this.$store.state.section = sec;
      this.createID(this.$store.state.semester, this.$store.state.section);
    },
    changeType(type) {
      this.type = type;
      this.createID(this.$store.state.semester, this.$store.state.section);
    },
    generateAgain() {
      this.type = null;
      this.$store.dispatch("generateAgain").catch((err) => {
        console.log(err);
      });
    },
  },
  created() {
    this.$store.state.isMapping = false;
    this.$store.state.sidebarCounter = 2;
    localStorage.setItem("currentRoute", this.$route.path);
    localStorage.setItem("createRouteTracker", this.$route.path);
    this.$store.state.createRouteTracker = localStorage.getItem(
      "createRouteTracker"
    );
  },
};
</script>

<style lang="scss" scoped>
@import "../../../scss/create-cards";
@import "../../../scss/pills";
@import "../../../scss/table";
@import "../../../scss/custom-animations";

.result {
  margin-top: 5rem;
  margin-left: 5rem;
  margin-bottom: 3rem;
  min-height: calc(100vh - 5rem);
  padding: 0 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  .container {
    margin-top: 0.5rem;
    width: 90.5%;
    .semester-section {
      margin-top: 2.5rem;
      @include ipad-portrait {
        margin: 0;
      }
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
      width: 10rem;
      text-align: center;
      text-decoration: none;
      margin-top: 0;
      @include ipad-portrait {
        width: 4rem;
        font-size: x-small;
      }
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
      background: rgba(21, 127, 135, 0.2);
    }
    .hide {
      display: none;
      @include ipad-portrait {
        display: block;
      }
    }
  }
  .generate {
    display: block;
    position: absolute;
    top: 5.3rem;
    right: 2.7rem;
    @include ipad-portrait {
      display: none;
    }
  }
  .btn:hover {
    background-image: $gradient-inverted;
  }
  .btn:active {
    transform: scale(0.95);
  }
  @media print {
    margin: 0;
    padding: 0;
    .heading-container {
      display: none;
    }
    .line {
      display: none;
    }
    .container {
      margin: 0;
      width: 100%;
      .pills-container {
        display: none;
      }
    }
    .actions {
      display: none;
    }
    .generate {
      display: none;
    }
  }
}
</style>