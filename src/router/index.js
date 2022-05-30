import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: MainPage
    }
]

export const router = createRouter({
    history:createWebHistory(),
    routes,
})