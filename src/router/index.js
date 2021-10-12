import { lazy } from 'react';

let routes = [
    {
      path: "/",
      component: lazy(() => import('@/views/Home/index.jsx')),
      exact:true
    }, 
    {
      path: "/accounts",
      component: lazy(() => import('@/views/Accounts/accounts.jsx')),
      exact:true
    },  
    {
      path: "/user",
      component: lazy(() => import('@/views/User/user.jsx')),
      exact: false,
      children: [
          {
              path: "/user",
              component: lazy(() => import('@/views/User/user.jsx')),
              exact: true,
          },  
          {
              path: "/user/roleList",
              component: lazy(() => import('@/views/User/roleList.jsx')),
              exact: true,
          },
          {
              path: "/user/userLog",
              component: lazy(() => import('@/views/User/userLog.jsx')),
              exact: true,
          }, 
      ]
  } 
];

export default routes;
