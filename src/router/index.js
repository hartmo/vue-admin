import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
  path: '/login',
  component: () => import('@/views/login/index'),
  hidden: true
},
{
  path: '/addUser',
  component: () => import('@/views/addUser/index'),
  hidden: true
},
{
  path: '/queryOrder',
  component: () => import('@/views/queryOrder/index'),
  hidden: true
},
{
  path: '/order',
  component: () => import('@/views/order/index'),
  hidden: true
},

{
  path: '/404',
  component: () => import('@/views/404'),
  hidden: true
},

{
  path: '/',
  component: Layout,
  redirect: '/dashboard',
  children: [{
    path: 'dashboard',
    name: 'Dashboard',
    component: () => import('@/views/dashboard/index'),
    meta: {
      title: '首页',
      icon: 'dashboard'
    }
  }]
},
{
  path: '/user',
  component: Layout,
  redirect: '/user/user',
  name: '用户管理',
  meta: {
    title: '用户管理',
    icon: ''
  },
  children: [{
    path: 'user',
    name: '用户管理',
    component: () => import('@/views/user/index'),
    meta: {
      title: '用户管理',
      icon: ''
    }
  },
  {
    path: 'push',
    name: '推送管理',
    component: () => import('@/views/push/index'),
    meta: {
      title: '推送管理',
      icon: ''
    }
  }
  ]
},
{
  path: '/permissions',
  component: Layout,
  redirect: '/permissions/permissions',
  name: 'permissions',
  meta: {
    title: '权限管理',
    icon: ''
  },
  children: [{
    path: '/permissions',
    name: 'permissions',
    component: () => import('@/views/permissions/index'),
    meta: {
      title: '权限管理',
      icon: ''
    }
  }]
},

// 404 page must be placed at the end !!!
{
  path: '*',
  redirect: '/404',
  hidden: true
}
]

const createRouter = () => new Router({
  // mode: 'history',
  base: '/project-web/admin/',
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
