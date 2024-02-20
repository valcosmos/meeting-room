import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { ErrorPage } from './ErrorPage.tsx'
import { Login } from './Login.tsx'
import { Register } from './Register.tsx'
import { UpdatePassword } from './UpdatePassword.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { StyleProvider } from '@ant-design/cssinjs'


const routes = [
  {
    path: '/',
    element: <div>index</div>,
    errorElement: <ErrorPage />
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
