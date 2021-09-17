import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/index.vue'

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}



Vue.use(VueRouter)

const routes = [
    {
        path:'/login',
        name:'login',
        component:Login
    }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router