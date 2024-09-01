import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from '../Root/Root';
import ErrorElement from "../Components/ErrorPage/ErrorElement";
import Home from "../Pages/Home/Home";
import Authentication from "../Components/Authentication/Authentication";
import Signin from "../Components/Authentication/Signin/Signin";
import Signup from "../Components/Authentication/Signup/Signup";
import Dashboard from "../Root/Dashboard";
import AddPost from "../Pages/DashBoard/AddPost";
import Post from "../Pages/DashBoard/Post";
import ManageUsers from "../Pages/DashBoard/ManageUsers";

const router = createBrowserRouter([

  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <Home />
      },


      // Authentication 
      {
        path: '/authentication',
        element: <Authentication />,
        children: [
          {
            path: 'signin',
            element: <Signin />
          },
          {
            path: 'signup',
            element: <Signup />
          }
        ]
      }
    ],
  },


  // Dash-Board
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: '/dashboard/add-post',
        element: <AddPost />
      },
      {
        path: '/dashboard/posts',
        element: <Post />
      },
      {
        path: '/dashboard/my-profile',
        element: <Post />
      },
      {
        path: '/dashboard/manage-users',
        element: <ManageUsers />
      },
    ]
  }
]);

export default router;