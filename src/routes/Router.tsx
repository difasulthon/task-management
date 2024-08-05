import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";

import Constants from "../constants";
import New from "../pages/New";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

const { ROUTES } = Constants;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ROUTES.NEW_TASK,
        element: <New />,
      },
      {
        path: ROUTES.TASK,
        element: <Detail />,
      },
    ],
  },
]);

export default router;
