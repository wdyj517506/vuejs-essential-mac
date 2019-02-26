/* # @Time    : 2019-02-26 16:10 */
/*  # @Author  : Marke */
/*  # @File    : routes.py */
/*  # @Software: WebStorm */
export default [
  {
    path: '/auth/register',
    name: 'Register',
    component: () => import('@/views/auth/Register')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home')
  },
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: () => import('@/views/auth/Login')
  }
]