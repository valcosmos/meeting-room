import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { StyleProvider } from '@ant-design/cssinjs'

import { Index } from './pages/Index/Index'
import { ErrorPage } from './pages/ErrorPage/ErrorPage'
import { UserManage } from './pages/UserManage/UserManage'
import { Login } from './pages/Login/Login'
import { Menu } from './pages/Menu/Menu'

const routes = [
  {
    path: '/',
    element: <Index></Index>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Menu></Menu>,
        children: [
          {
            path: 'user_manage',
            element: <UserManage />
          }
        ]
      }
    ]
  },
  {
    path: 'login',
    element: <Login />
  }
]

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <StyleProvider hashPriority="high">
      <RouterProvider router={router} />
    </StyleProvider>
  </React.StrictMode>
)
