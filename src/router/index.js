import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../views/Login.vue";
import Choice from "../views/Choice.vue";
import Landing from "../views/Landing.vue";

import Sidebar from "../components/Navigation/Sidebar.vue";
import Create from "../views/Create/Create.vue";
import Professors from "../views/Professors.vue";
import Courses from "../views/Courses.vue";
import Home from "../views/Home.vue";
import Semester from "../views/Semester.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/choice",
    name: "Choice",
    component: Choice,
  },
  {
    path: "/timetable",
    name: "Sidebar",
    component: Sidebar,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/create",
        name: "Create",
        component: Create,
      },
      {
        path: "/professors",
        name: "Professors",
        component: Professors,
      },
      {
        path: "/courses",
        name: "Courses",
        component: Courses,
      },
      {
        path: "/semester",
        name: "Semester",
        component: Semester,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
