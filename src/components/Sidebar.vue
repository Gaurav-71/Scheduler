<!-- Note : Replace all a tags to router-links -->

<template>
  <div class="sidebar">
    <Header />
    <nav>
      <ul>
        <li>
          <a>
            <img src="../assets/Sidebar/home.svg" alt="home" />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a>
            <img src="../assets/Sidebar/create.svg" alt="create" />
            <span>Create</span>
          </a>
        </li>
        <li>
          <a>
            <img src="../assets/Sidebar/view.svg" alt="view" />
            <span>View</span>
          </a>
        </li>
        <li>
          <a>
            <img src="../assets/Sidebar/professor.svg" alt="professor" />
            <span>Professors</span>
          </a>
        </li>
        <li>
          <a>
            <img src="../assets/Sidebar/courses.svg" alt="courses" />
            <span>Courses</span>
          </a>
        </li>
        <li>
          <a>
            <img src="../assets/Sidebar/settings.svg" alt="settings" />
            <span>Settings</span>
          </a>
        </li>
        <li>
          <a>
            <img src="../assets/Sidebar/exit.svg" alt="exit" />
            <span>Exit Time Table</span>
          </a>
        </li>
      </ul>
    </nav>    
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/colors";
.sidebar {
  margin-left :5rem;
  margin-top: 4.5rem;
  padding: 1rem;
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 5rem;
    height: 100vh;
    //background: $primary-light;
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
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 5rem;
          transition: 300ms;          
          cursor: pointer;
          img {
            width: 45px;
          }
          span {
            display: none;
          }
        }
        a:hover {
          background: $primary-dark;
          border-left: 3px solid red;
        }
      }
      .active {
        background: $primary-dark;
        img {
          border: 3px solid $sidebar-menu-text;
          border-radius: 1rem;
        }
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
