import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from '../Root/Root';
import ErrorElement from "../Components/ErrorPage/ErrorElement";
import Home from "../Pages/Home/Home";
import Authentication from "../Components/Authentication/Authentication";
import Signin from "../Components/Authentication/Signin/Signin";
import Signup from "../Components/Authentication/Signup/Signup";

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
    ]
  },
]);

export default router;