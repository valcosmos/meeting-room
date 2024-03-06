import { RouteObject } from "react-router-dom";
import { Index } from "../index";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { UpdateInfo } from "../pages/update_info/UpdateInfo";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import { UpdatePassword } from "../pages/UpdatePassword/UpdatePassword";
import { Menu } from "../pages/menu/Menu";
import { MeetingRoomList } from "../pages/MeetingRoomList/MeetingRoomList";
import { BookingHistory } from "../pages/BookingHistory/BookingHistory";

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
        path: '/',
        element: <Menu />,
        children: [
          {
            path: '/',
            element: <MeetingRoomList />
          },
          {
            path: 'meeting_room_list',
            element: <MeetingRoomList />
          },
          {
            path: 'booking_history',
            element: <BookingHistory />
          }
        ]
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
