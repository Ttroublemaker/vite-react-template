import Index from '../pages/Index'
import loadable from '@loadable/component'
import { RouteConfig } from 'react-router-config'

const routesConfig: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: Index
  },
  {
    path: '/about',
    exact: true,
    component: loadable(() => import('../pages/About'))
  }
  // {
  //   path: '/about',
  //   exact: false,
  //   component: H5Layout,
  //   routes: [
  //     {
  //       path: '/',
  //       exact: false,
  //       component: loadable(() => import('../container/About'))
  //     }
  //   ]
  // }
]

export default routesConfig
