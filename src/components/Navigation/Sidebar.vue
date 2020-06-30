<template>
  <div class="sidebar">
    <Header />
    <nav>
      <ul>
        <li v-bind:class="{'active':$store.state.sidebarCounter == '1'}">
          <router-link to="/landing/login/choice/timetable/home" class="router-link">
            <img src="../../assets/Sidebar/home.svg" alt="home" />
            <span>Home</span>
          </router-link>
        </li>
        <li v-bind:class="{'active':$store.state.sidebarCounter == '2'}">
          <router-link to="/landing/login/choice/timetable/create" class="router-link">
            <img src="../../assets/Sidebar/create.svg" alt="create" />
            <span>Create</span>
          </router-link>
        </li>
        <li v-bind:class="{'active':$store.state.sidebarCounter == '3'}">
          <router-link to="/landing/login/choice/timetable/semester" class="router-link">
            <img src="../../assets/Sidebar/view.svg" alt="view" />
            <span>View</span>
          </router-link>
        </li>
        <li v-bind:class="{'active':$store.state.sidebarCounter == '4'}">
          <router-link to="/landing/login/choice/timetable/professors" class="router-link">
            <img src="../../assets/Sidebar/professor.svg" alt="professor" />
            <span>Professors</span>
          </router-link>
        </li>
        <li v-bind:class="{'active':$store.state.sidebarCounter == '5'}">
          <router-link to="/landing/login/choice/timetable/courses" class="router-link">
            <img src="../../assets/Sidebar/courses.svg" alt="courses" />
            <span>Courses</span>
          </router-link>
        </li>
        <li v-bind:class="{'active':$store.state.sidebarCounter == '6'}">
          <router-link to="#" class="router-link">
            <img src="../../assets/Sidebar/settings.svg" alt="settings" />
            <span>Settings</span>
          </router-link>
        </li>
        <li>
          <router-link to="#" class="router-link">
            <img src="../../assets/Sidebar/exit.svg" alt="exit" />
            <span>Exit Time Table</span>
          </router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
import Header from "../Navigation/Header.vue";

export default {
  components: {
    Header
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
    background-image: $gradient;
    ul {
      list-style-type: none;
      margin: 0;
      padding: 5.5rem 0 0 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
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
          }
          span {
            display: none;
          }
        }
        .router-link:hover {
          background: rgba($primary-dark,0.5);
          border-left: 3px solid red;
        }
      }
      .active {
        background: rgba($primary-dark,0.5);
        box-sizing: border-box;
        border-left: 3px solid $sidebar-menu-text;        
      }
    }
  }
  nav:hover {
    width: 12rem;
    box-shadow: 1px 0px 20px black;
    ul {
      a {
        justify-content: left;
        padding-left: 17.5px;
        transition: 300ms;
        span {
          display: block;
          margin-left: 1rem;
          color: $sidebar-menu-text;
          //color: white;
          font-weight: 550;
          text-shadow: 1px 0.5px 1px black;
        }
      }
    }
  }
}
</style>
