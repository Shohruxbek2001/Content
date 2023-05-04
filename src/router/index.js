import { nextTick } from "vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../components/Index.vue"),
    meta: { layout: "dashboard" },
  },
  {
    path: "/login",
    name: "Login",
    // component: () => import("../components/pages/Login.vue"),
    // meta: { layout: 'dashboard' },
  },
  {
    path: "/admin",
    name: "Admin",
    // component: () => import("../components/pages/Admin.vue"),
    meta: { layout: "admin" },
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  linkActiveClass: 'text-violet-500'
});

router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "/"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");
  if (authRequired && !loggedIn) {
    next("/login");
  } else if (to.path === "/login" && loggedIn) {
    next("/admin");
  } else {
    next();
  }
});

// function navigationGuard(role) {
//   return () => {
//     if (!(sessionStorage.getItem('role') === role)) {
//       router.push('/notfound')
//     }
//     return sessionStorage.getItem('role') === role
//   }
// }

export default router;