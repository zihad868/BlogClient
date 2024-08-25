import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from '../Root/Root';
import ErrorElement from "../Components/ErrorPage/ErrorElement";
import Home from "../Pages/Home/Home";
import Signin from "../Components/Signin/Signin";

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
        path: '/signin',
        element: <Signin />
      }
    ]
  },
]);

export default router;