<template>
  <div class="result" id="page-top">
    <div class="heading-container">
      <img src="../../assets/Result/table.svg" alt="result" />
      <div class="heading">
        <h1>Class Timetables</h1>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
      </div>
    </div>
    <div class="line"></div>
    <div class="container">
      <div class="pills-container type">
        <div class="type-pills">
          <div class="pill" @click="type = 1" v-bind:class="{ active: type == 1 }">Students</div>
          <div class="pill" @click="type = 2" v-bind:class="{ active: type == 2 }">Teachers</div>
        </div>
        <div v-if="type == 2" @click="print()" class="download-main">
          <div class="pill">Download</div>
        </div>
        <div @click="route()" class="save" v-bind:class="{ nomargin: type == 2 }">
          <div class="pill">Save & Exit</div>
        </div>
      </div>
      <div v-if="type == 1">
        <div class="pills-container semester-section">
          <div class="all-pills">
            <div
              class="pill"
              @click="changeSemester(0)"
              v-bind:class="{ active: $store.state.semester == 0 }"
            >All</div>
          </div>
          <div class="pills" v-if="$store.state.cycle == 'Odd'">
            <div
              class="pill"
              @click="changeSemester(3)"
              v-bind:class="{ active: $store.state.semester == 3 }"
            >Third</div>
            <div
              class="pill"
              @click="changeSemester(5)"
              v-bind:class="{ active: $store.state.semester == 5 }"
            >Fifth</div>
            <div
              class="pill"
              @click="changeSemester(7)"
              v-bind:class="{ active: $store.state.semester == 7 }"
            >Seventh</div>
          </div>
          <div class="pills" v-else>
            <div
              class="pill"
              @click="changeSemester(4)"
              v-bind:class="{ active: $store.state.semester == 4 }"
            >Fourth</div>
            <div
              class="pill"
              @click="changeSemester(6)"
              v-bind:class="{ active: $store.state.semester == 6 }"
            >Sixth</div>
            <div
              class="pill"
              @click="changeSemester(8)"
              v-bind:class="{ active: $store.state.semester == 8 }"
            >Eight</div>
          </div>
          <div class="section-pills">
            <div
              class="pill"
              @click="changeSection('A')"
              v-bind:class="{ active: $store.state.section == 'A' }"
            >A</div>
            <div
              class="pill"
              @click="changeSection('B')"
              v-bind:class="{ active: $store.state.section == 'B' }"
            >B</div>
            <div
              v-if="$store.state.semester < 7"
              class="pill"
              @click="changeSection('C')"
              v-bind:class="{ active: $store.state.section == 'C' }"
            >C</div>
          </div>
          <div
            v-if="$store.state.semester == 0 || $store.state.section != null"
            @click="print()"
            class="download"
          >
            <div v-if="$store.state.semester == 0" class="pill">Download All as PDF</div>
            <div
              v-else
              class="pill"
            >Download {{$store.state.semester}}{{$store.state.section}} as PDF</div>
          </div>
        </div>
        <div v-if="$store.state.cycle='Odd'">
          <div v-if="$store.state.semester == 0">
            <studentTable :sectionObject="$store.state.allOddCycleClasses.sec3A" :hideline="false" />
            <studentTable :sectionObject="$store.state.allOddCycleClasses.sec3B" :hideline="false" />
            <studentTable :sectionObject="$store.state.allOddCycleClasses.sec3C" :hideline="false" />
            <studentTable :sectionObject="$store.state.allOddCycleClasses.sec5A" :hideline="false" />
            <studentTable :sectionObject="$store.state.allOddCycleClasses.sec5B" :hideline="false" />
            <studentTable :sectionObject="$store.state.allOddCycleClasses.sec5C" :hideline="false" />
            <studentTable :sectionObject="$store.state.allOddCycleClasses.sec7A" :hideline="false" />
            <studentTable :sectionObject="$store.state.allOddCycleClasses.sec7B" :hideline="true" />
          </div>
          <studentTable
            v-else-if="$store.state.semester == 3 && $store.state.section == 'A'"
            :sectionObject="$store.state.allOddCycleClasses.sec3A"
            :hideline="true"
          />
          <studentTable
            v-else-if="$store.state.semester == 3 && $store.state.section == 'B'"
            :sectionObject="$store.state.allOddCycleClasses.sec3B"
            :hideline="true"
          />
          <studentTable
            v-else-if="$store.state.semester == 3 && $store.state.section == 'C'"
            :sectionObject="$store.state.allOddCycleClasses.sec3C"
            :hideline="true"
          />
          <studentTable
            v-else-if="$store.state.semester == 5 && $store.state.section == 'A'"
            :sectionObject="$store.state.allOddCycleClasses.sec5A"
            :hideline="true"
          />
          <studentTable
            v-else-if="$store.state.semester == 5 && $store.state.section == 'B'"
            :sectionObject="$store.state.allOddCycleClasses.sec5B"
            :hideline="true"
          />
          <studentTable
            v-else-if="$store.state.semester == 5 && $store.state.section == 'C'"
            :sectionObject="$store.state.allOddCycleClasses.sec5C"
            :hideline="true"
          />
          <studentTable
            v-else-if="$store.state.semester == 7 && $store.state.section == 'A'"
            :sectionObject="$store.state.allOddCycleClasses.sec7A"
            :hideline="true"
          />
          <studentTable
            v-else-if="$store.state.semester == 7 && $store.state.section == 'B'"
            :sectionObject="$store.state.allOddCycleClasses.sec7B"
            :hideline="true"
          />
          <div v-else>
            <p style="text-align: center;margin: 2rem;">
              <b>Note</b> : Please Select a semester & section
            </p>
          </div>
        </div>
        <div v-else>
          <div v-if="$store.state.semester == 0">
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
            <studentTable :sectionObject="$store.state.allEvenCycleClasses.sec8b" :hideline="true" />
          </div>
          <studentTable
            v-else-if="$store.state.semester == 4 && $store.state.section == 'A'"
            :sectionObject="$store.state.allOddCycleClasses.sec4A"
            :hideline="true"
          />
          <studentTable
            v-else-if="$store.state.semester == 4 && $store.state.section == 'B'"
            :sectionObject="$store.state.allOddCycleClasses.sec4B"
            :hideline="true"
          />
          <studentTable
            v-else-if="$store.state.semester == 4 && $store.state.section == 'C'"
            :sectionObject="$store.state.allOddCycleClasses.sec4C"
            :hideline="true"
          />
          <studentTable
            v-else-if="$store.state.semester == 6 && $store.state.section == 'A'"
            :sectionObject="$store.state.allOddCycleClasses.sec6A"
            :hideline="true"
          />
          <studentTable
            v-else-if="$store.state.semester == 6 && $store.state.section == 'B'"
            :sectionObject="$store.state.allOddCycleClasses.sec6B"
            :hideline="true"
          />
          <studentTable
            v-else-if="$store.state.semester == 6 && $store.state.section == 'C'"
            :sectionObject="$store.state.allOddCycleClasses.sec6C"
            :hideline="true"
          />
          <studentTable
            v-else-if="$store.state.semester == 8 && $store.state.section == 'A'"
            :sectionObject="$store.state.allOddCycleClasses.sec8A"
            :hideline="true"
          />
          <studentTable
            v-else-if="$store.state.semester == 8 && $store.state.section == 'B'"
            :sectionObject="$store.state.allOddCycleClasses.sec8B"
            :hideline="true"
          />
          <div v-else>
            <p style="text-align: center;margin: 2rem;">
              <b>Note</b> : Please Select a semester & section
            </p>
          </div>
        </div>
      </div>
      <div v-else >
        <div v-for="(professor,index) in this.$store.state.professorList" :key="index">
          <teacherTable 
          :teacherObject=professor
          />
        </div> 
      </div>
    </div>
    <div v-if="$store.state.semester == 0 || $store.state.section != null" class="actions">
      <a class="btn transparent" href="#page-top">Jump to Top</a>
      <div class="btn" @click="route()">Save & Exit</div>
      <div class="btn transparent" @click="print()">Download as PDF</div>
    </div>
  </div>
</template>

<script>
import studentTable from "../../components/Tables/studentTable";
import teacherTable from "../../components/Tables/teacherTable";
export default {
  components: {
    studentTable,
    teacherTable
  },
  data() {
    return {
      type: 1
    };
  },
  methods: {
    print() {
      window.print();
    },
    route() {
      localStorage.setItem("createRouteTracker", "/timetable/create");
      this.$store.state.createRouteTracker = localStorage.getItem(
        "createRouteTracker"
      );
      this.$router.push("/timetable");
    },
    changeSemester(sem) {
      this.$store.state.semester = sem;
      if (sem >= 7 && this.$store.state.section == "C") {
        this.$store.state.section = "B";
      }
      if (sem == 0) {
        this.$store.state.section = null;
      }
    },
    changeSection(sec) {
      this.$store.state.section = sec;
    }
  },
  created() {
    this.$store.state.sidebarCounter = 2;
    localStorage.setItem("currentRoute", this.$route.path);
  },
  mounted(){
    this.$store.dispatch("automateTimetable")
      .then()
      .catch((err)=>{
        console.log(err);
      })
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/create-cards";
@import "../../scss/pills";
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
  .heading-container {
    height: 100%;
    width: 100%;
    padding: 0.7rem 0 1rem 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
      width: 60px;
      margin-right: 0.5rem;
    }
    .heading {
      h1,
      h4 {
        margin: 0.5rem;
        padding: 0;
        font-weight: lighter;
      }
    }
  }
  .line {
    width: 100%;
    height: 1px;
    background: gray;
    margin: 0 0 1rem 0;
  }
  .container {
    margin-top: 0.5rem;
    width: 90.5%;
    .type {
      @include ipad-portrait {
        margin-bottom: 0;
      }
    }
    .semester-section {
      margin-top: 3rem;
      @include ipad-portrait {
        margin: 0;
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
      @include ipad-portrait {
        width: 3rem;
        font-size: x-small;
      }
    }
    .transparent {
      background-image: none;
      background: rgba($primary, 0.1);
      border-color: rgba($primary, 0.1);
      color: black;
    }
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
  }
}
</style>