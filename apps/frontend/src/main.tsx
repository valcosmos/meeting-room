import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import {  RouterProvider } from 'react-router-dom'
import { StyleProvider } from '@ant-design/cssinjs'
import { router } from './router/index.ts'





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
