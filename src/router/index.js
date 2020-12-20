import Vue from "vue";
import VueRouter from "vue-router";

// General routes
import Login from "../views/Login.vue";
import Choice from "../views/Choice.vue";
import Landing from "../views/Landing.vue";
import Settings from "../views/Settings.vue";
import Reset from "../views/Reset.vue";

// Timetable Routes
import Create from "../views/Timetable/Create/Create.vue";
import Sidebar from "../components/Navigation/Sidebar.vue";
import Professors from "../views/Timetable/Professors.vue";
import Courses from "../views/Timetable/Courses.vue";
import Home from "../views/Home.vue";
// Timetable create routes
import Type from "../views/Timetable/Create/Type.vue";
import Cycle from "../views/Timetable/Create/Cycle.vue";
import MappingAutomated from "../views/Timetable/Create/Mapping.vue";
import Result from "../views/Timetable/Create/Results.vue";

// Internals Routes
import Students from "../views/Internals/Students.vue";
import Saved from "../views/Internals/Saved.vue";
// Internals create
import CreateInt from "../views/Internals/Create.vue";

import store from "../store/index.js";

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
    path: "/reset",
    name: "Reset",
    component: Reset,
  },
  {
    path: "/choice",
    name: "Choice",
    component: Choice,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/timetable",
    component: Sidebar,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/timetable/create",
        component: Create,
        children: [
          {
            path: "/",
            name: "Type",
            component: Type,
          },
          {
            path: "/timetable/create/cycle",
            name: "Cycle",
            component: Cycle,
          },
          {
            path: "/timetable/create/automated/mapping",
            name: "MappingAutomated",
            component: MappingAutomated,
          },
        ],
      },
      {
        path: "/timetable/result",
        name: "Result",
        component: Result,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/timetable/professors",
        name: "Professors",
        component: Professors,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/timetable/courses",
        name: "Courses",
        component: Courses,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/settings",
        name: "Settings",
        component: Settings,
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
  {
    path: "/internals",
    component: Sidebar,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "/",
        component: Home,
        name: "Home",
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/internals/create",
        component: CreateInt,
        children: [],
      },
      {
        path: "/internals/students",
        name: "Students",
        component: Students,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/internals/saved-timetables",
        name: "Saved",
        component: Saved,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/internals/courses",
        name: "Courses",
        component: Courses,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/settings",
        name: "Settings",
        component: Settings,
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    var ignore;
    ignore = to;
    ignore = from;
    ignore = savedPosition;
    ignore = null;
    console.log(
      "This is some stupid eslint problem, ignore this console log - from router scrollbehaviour function",
      ignore
    );
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const loggedIn = store.state.isLoggedIn;
  if (requiresAuth && !loggedIn) {
    next("/login");
  } else {
    next();
  }
});

export default router;
