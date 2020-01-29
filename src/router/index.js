import Vue from 'vue'
import VueRouter from 'vue-router'

import Auth from '@/views/Auth/Auth'
import Signin from '@/views/Auth/Signin'
import SigninIdentifier from '@/views/Auth/SigninIdentifier'
import SigninPassword from '@/views/Auth/SigninPassword'

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth',
    component: Auth,
    children: [
      {
        path: 'signin',
        component: Signin,
        children: [
          {
            path: 'identifier',
            name: 'signin',
            component: SigninIdentifier
          }, {
            path: 'password',
            name: 'password',
            component: SigninPassword
          }
        ]
      }
    ]
  }, {
    path: '*',
    redirect: { name: 'signin' }
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
