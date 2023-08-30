import { createRouter, createWebHashHistory } from "vue-router";
import Home from './../components/Home.vue'
import Article from './../views/Article.vue'
import Login from './../views/Login.vue'

const routes = [
    {
        name:'home',
        path:'/',
        meta:{
            title:'首页'
        },
        component:Home,
        // 重定向
        redirect:'/article',
        children:[
            {
                name:'article',
                path:'/article',
                meta:{
                    title:'文章'
                },
                component:Article
            }
            
        ]

    },
    {
        name:'login',
        path:'/login',
        meta:{
            title:'登录'
        },
        component:Login
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router