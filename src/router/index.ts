import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Products',
        component: () => import('../views/Products.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), // Use HTML5 history mode
    routes,
});

export default router;
