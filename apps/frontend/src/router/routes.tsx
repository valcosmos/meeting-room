import { RouteObject } from "react-router-dom";
import { Index } from "../index";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { UpdateInfo } from "../pages/update_info/UpdateInfo";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import { UpdatePassword } from "../pages/UpdatePassword/UpdatePassword";

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Index />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'update_info',
        element: <UpdateInfo />
      },
      {
        path: 'bb',
        element: <div>bb</div>
      }
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
