import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from '../Root/Root';
import ErrorElement from "../Components/ErrorPage/ErrorElement";
import Home from "../Pages/Home/Home";
import Authentication from "../Components/Authentication/Authentication";

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
        element: <Authentication />
      }
    ]
  },
]);

export default router;