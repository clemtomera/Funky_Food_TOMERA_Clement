import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/404";
import Article from "../pages/article";
import Home from "../pages/home";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dish/:dishId",
        element: <Article />,
      },
    ],
  },
]);

export default router;
