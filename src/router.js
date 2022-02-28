import {createWebHistory, createRouter} from 'vue-router'

//component 추가
import Main from './views/Main.vue'

const routes = [
    {path:'/', component: Main},
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;