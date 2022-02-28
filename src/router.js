import {createWebHistory, createRouter} from 'vue-router'

//component 추가
import Main from './views/main/Main.vue'
import Detail from './views/main/Detail.vue'
import Manage from './views/manage/Manage.vue'
import Order from './views/manage/Order.vue'
import Item from './views/manage/Item.vue'

const routes = [
    {path:'/', component: Main},
    {path:'/detail/:id', component: Detail},
    {path:'/manage', component: Manage},
    {path:'/manage/order', component: Order},
    {path:'/manage/item', component: Item},
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;