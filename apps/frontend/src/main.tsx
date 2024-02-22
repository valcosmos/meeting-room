import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { ErrorPage } from './ErrorPage.tsx'
import { Login } from './Login.tsx'
import { Register } from './Register.tsx'
import { UpdatePassword } from './UpdatePassword.tsx'
import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { StyleProvider } from '@ant-design/cssinjs'
import { Index } from './index/index.tsx'
import { UpdateInfo } from './UpdateInfo.tsx'


const routes: RouteObject[] = [
  {
    path: '/',
    element: <Index />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'update_info',
        element:<UpdateInfo/>
      },
      {
        path: 'bb',
        element:<div>bb</div>
      },
    ]
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'register',
    element: <Register />
  },
  {
    path: 'update_password',
    element: <UpdatePassword />
  }
]

const router = createBrowserRouter(routes)


// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyleProvider hashPriority="high">
      <RouterProvider router={router} />
    </StyleProvider>
  </React.StrictMode>
)
