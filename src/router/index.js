// 导入Vue
import Vue from 'vue'
// 导入Vue-router
import VueRouter from 'vue-router'
// 注册一下 use
Vue.use(VueRouter)

// 导入 组件 login
import login from "../views/login/login.vue"
// 导入组件 index
import index from "../views/index/index.vue"
// 创建路由对象
const router = new VueRouter({
    // 路由规则
    routes:[
        // 登录
        {
            path:"/",
            // path:"/",
            component:login
        },
        {
            path:"/login",
            // path:"/",
            component:login
        },
        // 首页
        {
            path:"/index",
            component:index
        }
    ]
})
// 暴露出去
export default router