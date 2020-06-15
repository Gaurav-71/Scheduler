import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../views/Login.vue";
import Choice from "../views/Choice.vue";
import Landing from "../views/Landing.vue";

import Create from "../views/Create/Create.vue";
import Sidebar from "../components/Navigation/Sidebar.vue";
import Professors from "../views/Professors.vue";
import Courses from "../views/Courses.vue";
import Home from "../views/Home.vue";
import Semester from "../views/Semester.vue";

import Type from "../views/Create/Type.vue";
import Cycle from "../views/Create/Automated/Cycle.vue";
import MappingAutomated from "../views/Create/Automated/Mapping.vue";
import MappingManual from "../views/Create/Manual/Mapping.vue";
import Class from "../views/Create/Manual/Class.vue";

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
    component: Sidebar,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/create",        
        component: Create,
        children: [
          {
            path: "/",
            name: "Type",
            component: Type,
          },
          {
            path: "/cycle",
            name: "Cycle",
            component: Cycle,
          },
          {
            path: "/mapping/automated",
            name: "MappingAutomated",
            component: MappingAutomated,
          },
          {
            path: "/mapping/manual",
            name: "MappingManual",
            component: MappingManual,
          },
          {
            path: "/class",
            name: "Class",
            component: Class,
          },          
        ],
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
