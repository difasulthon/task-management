import { createBrowserRouter, LoaderFunction } from "react-router-dom";

import Root from "./Root";

import Constants from "../constants";
import New from "../pages/New";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import { loader as homeLoader } from "../pages/Home/Home";
import { loader as detailLoader } from "../pages/Detail/Detail";

const { ROUTES } = Constants;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader satisfies LoaderFunction,
      },
      {
        path: ROUTES.NEW_TASK,
        element: <New />,
      },
      {
        path: `${ROUTES.TASK}/:taskId`,
        element: <Detail />,
        loader: detailLoader satisfies LoaderFunction,
      },
    ],
  },
]);

export default router;
