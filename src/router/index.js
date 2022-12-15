import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
 
]

// vue2使用use.Router({})创建路由实例
// vue3使用createRouter({})创建路由实例
const router = createRouter({
  // 使用hash模式
  history: createWebHashHistory(),
  routes
})

export default router
