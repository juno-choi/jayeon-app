import {createWebHistory, createRouter} from 'vue-router'

//component 추가
import Main from './views/main/Main.vue'
import Detail from './views/main/Detail.vue'

const routes = [
    {path:'/', component: Main},
    {path:'/detail/:id', component: Detail},
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;