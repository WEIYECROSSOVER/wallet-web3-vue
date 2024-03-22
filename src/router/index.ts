import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/index.vue'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router