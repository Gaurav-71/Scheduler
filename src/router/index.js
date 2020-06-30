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

import Type from "../views/Create/Type.vue";
import Cycle from "../views/Create/Cycle.vue";
import MappingAutomated from "../views/Create/Mapping.vue";
import Reset from "../views/Reset.vue";
import store from "../store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    redirect: "/landing/login/choice",
    component: Landing,
  },
  {
    path: "/landing/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/landing/reset",
    name: "Reset",
    component: Reset,
  },
  {
    path: "/landing/login/choice",
    name: "Choice",
    component: Choice,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/landing/login/choice/timetable",    
    component: Sidebar,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: "/landing/login/choice/timetable/home",
        name: "Home",
        component: Home,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/landing/login/choice/timetable/create",        
        component: Create,
        children: [
          {
            path: "/",
            name: "Type",
            component: Type,
          },
          {
            path: "/landing/login/choice/timetable/cycle",
            name: "Cycle",
            component: Cycle,
          },
          {
            path: "/landing/login/choice/timetable/mapping/automated",
            name: "MappingAutomated",
            component: MappingAutomated,
          },      
        ],
      },
      {
        path: "/landing/login/choice/timetable/professors",
        name: "Professors",
        component: Professors,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/landing/login/choice/timetable/courses",
        name: "Courses",
        component: Courses,
        meta: {
          requiresAuth: true
        }
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to,from,next)=> {
  const requiresAuth = to.matched.some(record=>record.meta.requiresAuth);
  const loggedIn = store.state.isLoggedIn;
if(requiresAuth && !loggedIn){
  next("/landing/login");
}
else{
  next();
}
})

export default router;
