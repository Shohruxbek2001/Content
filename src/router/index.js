import {nextTick} from "vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: "/",
        name: "Index",
        component: () => import("../components/Index.vue"),
        meta: {layout: "dashboard"},
    },
    {
        path: "/see-more",
        name: "see-more",
        component: () => import("../components/pages/More.vue"),
        meta: {layout: "dashboard"},
    },
    {
        path: "/product",
        name: "product",
        component: () => import("../components/pages/Product.vue"),
        meta: {layout: "dashboard"},
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    linkActiveClass: 'text-violet-500'
});

export default router;