import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import RegisterTarea from "@/views/RegisterTarea"
import ListTarea from "@/views/ListTarea"
// lazy-loaded
const Profile = () => import("@/views/Profile.vue")
const BoardAdmin = () => import("@/views/BoardAdmin.vue")
const BoardModerator = () => import("@/views/BoardModerator.vue")
const BoardUser = () => import("@/views/BoardUser.vue")

const routes = [
  {
    path: "/tarea/nueva",
    name: "RegisterTarea",
    component: RegisterTarea,
  },{
    path: "/tarea/list",
    name: "ListTarea",
    component: ListTarea,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: Profile,
  },
  {
    path: "/admin",
    name: "admin",
    // lazy-loaded
    component: BoardAdmin,
  },
  {
    path: "/mod",
    name: "moderator",
    // lazy-loaded
    component: BoardModerator,
  },
  {
    path: "/user",
    name: "user",
    // lazy-loaded
    component: BoardUser,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
