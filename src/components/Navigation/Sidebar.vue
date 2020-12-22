<template>
  <div class="sidebar">
    <Header />
    <transition name="fade" appear>
      <Alert :obj="warning" :path="warningPath" />
    </transition>
    <nav>
      <ul v-if="$store.state.choice == 1">
        <li
          @click="route(1)"
          v-bind:class="{ active: $store.state.sidebarCounter == '1' }"
        >
          <div class="router-link">
            <img src="../../assets/Sidebar/home.svg" alt="home" />
            <span>Home</span>
          </div>
        </li>
        <li
          @click="route(2)"
          v-bind:class="{ active: $store.state.sidebarCounter == 2 }"
        >
          <div class="router-link">
            <img src="../../assets/Sidebar/create.svg" alt="create" />
            <span>Create</span>
          </div>
        </li>
        <li
          @click="route(3)"
          v-bind:class="{ active: $store.state.sidebarCounter == 3 }"
        >
          <div class="router-link">
            <img src="../../assets/Sidebar/view.svg" alt="view" />
            <span>Saved Timetables</span>
          </div>
        </li>
        <li
          @click="route(4)"
          v-bind:class="{ active: $store.state.sidebarCounter == 4 }"
        >
          <div class="router-link">
            <img src="../../assets/Sidebar/professor.svg" alt="professor" />
            <span>Professors</span>
          </div>
        </li>
        <li
          @click="route(5)"
          v-bind:class="{ active: $store.state.sidebarCounter == 5 }"
        >
          <div class="router-link">
            <img src="../../assets/Sidebar/courses.svg" alt="courses" />
            <span>Courses</span>
          </div>
        </li>
        <li
          @click="route(6)"
          v-bind:class="{ active: $store.state.sidebarCounter == 6 }"
        >
          <div class="router-link">
            <img src="../../assets/Sidebar/settings.svg" alt="settings" />
            <span>Settings</span>
          </div>
        </li>
        <li @click="route(7)">
          <div class="router-link">
            <img src="../../assets/Sidebar/exit.svg" alt="exit" />
            <span>Exit Time Table</span>
          </div>
        </li>
      </ul>
      <ul v-if="$store.state.choice == 2">
        <li
          @click="route(8)"
          v-bind:class="{ active: $store.state.sidebarCounter == 8 }"
        >
          <div class="router-link">
            <img src="../../assets/Sidebar/home.svg" alt="home" />
            <span>Home</span>
          </div>
        </li>
        <li
          @click="route(9)"
          v-bind:class="{ active: $store.state.sidebarCounter == 9 }"
        >
          <div class="router-link">
            <img src="../../assets/Sidebar/messages.svg" alt="home" />
            <span>Create</span>
          </div>
        </li>
        <li
          @click="route(10)"
          v-bind:class="{ active: $store.state.sidebarCounter == '10' }"
        >
          <div class="router-link">
            <img src="../../assets/Sidebar/internals.svg" alt="home" />
            <span>Saved Timetables</span>
          </div>
        </li>
        <!--- <li
          @click="route(1)"
          v-bind:class="{ active: $store.state.sidebarCounter == '1' }"
        >
          <div class="router-link">
            <img src="../../assets/Sidebar/history.svg" alt="home" />
            <span>History</span>
          </div>
        </li> --->
        <li
          @click="route(11)"
          v-bind:class="{ active: $store.state.sidebarCounter == 11 }"
        >
          <div class="router-link">
            <img src="../../assets/Sidebar/student.svg" alt="home" />
            <span>Students</span>
          </div>
        </li>
        <li
          @click="route(12)"
          v-bind:class="{ active: $store.state.sidebarCounter == 12 }"
        >
          <div class="router-link">
            <img src="../../assets/Sidebar/courses.svg" alt="courses" />
            <span>Courses</span>
          </div>
        </li>
        <li
          @click="route(6)"
          v-bind:class="{ active: $store.state.sidebarCounter == 6 }"
        >
          <div class="router-link">
            <img src="../../assets/Sidebar/settings.svg" alt="settings" />
            <span>Settings</span>
          </div>
        </li>
        <li @click="route(7)">
          <div class="router-link">
            <img src="../../assets/Sidebar/exit.svg" alt="exit" />
            <span>Exit Internals</span>
          </div>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
/* eslint-disable */
import Header from "../Navigation/Header";
import Alert from "../Modals/Alert";

export default {
  components: {
    Header,
    Alert,
  },
  data() {
    return {
      warning: {
        isVisible: false,
        message:
          "Changes you made will not be saved if you exit Create process",
        button: "Leave",
        number: 1,
      },
      warningPath: null,
    };
  },
  methods: {
    route(path) {
      this.warningPath = path;
      this.$store.state.sidebarCounter = path;
      if (!this.$store.state.isMapping) {
        if (path == 1) {
          this.$router.push("/timetable");
        } else if (path == 2) {
          this.$router.push(this.$store.state.createRouteTracker);
        } else if (path == 3) {
          this.$router.push("/timetable/saved");
        } else if (path == 4) {
          this.$router.push("/timetable/professors");
        } else if (path == 5) {
          this.$router.push("/timetable/courses");
        } else if (path == 6) {
          this.$router.push("/settings");
        } else if (path == 7) {
          this.$router.push("/choice");
        } else if (path == 8) {
          this.$router.push("/internals");
        } else if (path == 9) {
          this.$router.push("/internals/create");
        } else if (path == 10) {
          this.$router.push("/internals/saved-timetables");
        } else if (path == 11) {
          this.$router.push("/internals/students");
        } else if (path == 12) {
          this.$router.push("/internals/courses");
        }
      } else {
        this.warning.isVisible = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/colors";
.sidebar {
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 5rem;
    height: 100vh;
    z-index: 1;
    background-image: $gradient-inverted;
    ul {
      list-style-type: none;
      margin: 0;
      padding: 5.5rem 0 0 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: calc(100% - 6rem);
      transition: width 200ms ease;
      li {
        width: 100%;
        .router-link {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 5rem;
          transition: 300ms;
          text-decoration: none;
          cursor: pointer;
          img {
            width: 45px;
            width: 45px;
            transition: all 0.2s ease-in-out;
          }
          span {
            display: none;
          }
        }
        .router-link:hover {
          background: rgba($primary-dark, 0.5);
          border-left: 3px solid $sidebar-menu-text;
        }
      }
      .active {
        background: rgba($primary-dark, 0.5);
        box-sizing: border-box;
        border-left: 3px solid $sidebar-menu-text;
      }
    }
  }
  nav:hover {
    width: 12rem;
    box-shadow: 1px 0px 20px black;
    ul {
      .router-link {
        justify-content: left;
        padding-left: 17.5px;
        transition: 300ms;
        span {
          display: block;
          margin-left: 1rem;
          color: $sidebar-menu-text;
          font-weight: 550;
          text-shadow: 1px 0.5px 1px black;
        }
      }
    }
  }
  @media print {
    nav {
      display: none;
      margin: 0;
      padding: 0;
    }
  }
}
</style>
