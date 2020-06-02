import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../views/Login.vue";
import Choice from "../views/Choice.vue";
//import Landing from "../views/Landing.vue";
import Semester from "../views/Semester.vue"; 
import Professors from "../views/Professors.vue"; 
import Courses from "../views/Courses.vue"; 
import Home from "../views/Home.vue"; 

Vue.use(VueRouter);

const routes = [

  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/choice",
    name: "Choice",
    component: Choice
  },
  {
    path: "/semester",
    name: "Semester",
    component: Semester
  },
  {
    path: "/professors",
    name: "Professors",
    component: Professors
  },
  {
    path: "/courses",
    name: "Courses",
    component: Courses
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
