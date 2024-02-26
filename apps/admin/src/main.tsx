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
import { ModifyMenu } from './pages/ModifyMenu/ModifyMenu'
import { InfoModify } from './pages/InfoModify/InfoModify'
import { PasswordModify } from './pages/PasswordModify/PasswordModify'
import { MeetingRoomManage } from './pages/MeetingRoomManage/MeetingRoomManage'
import { BookingManage } from './pages/BookingManage/BookingManage'
import { Statistics } from './pages/Statistics/Statistics'

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
      },
      {
        path: '/user',
        element: <ModifyMenu />,
        children: [
          {
            path: 'info_modify',
            element: <InfoModify />
          },
          {
            path: 'password_modify',
            element: <PasswordModify />
          }
        ]
      }
    ]
  },
  {
    path: '/',
    element: <MeetingRoomManage />
  },
  {
    path: 'user_manage',
    element: <UserManage />
  },
  {
    path: 'meeting_room_manage',
    element: <MeetingRoomManage />
  },
  {
    path: 'booking_manage',
    element: <BookingManage />
  },
  {
    path: 'statistics',
    element: <Statistics />
  },

  {
    path: 'login',
    element: <Login />
  }
]

export const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <StyleProvider hashPriority="high">
      <RouterProvider router={router} />
    </StyleProvider>
  </React.StrictMode>
)
