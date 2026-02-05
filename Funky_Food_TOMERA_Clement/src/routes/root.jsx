import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/404";
import Article from "../pages/article";
import Home from "../pages/home";
import App from "../App";
import About from "../pages/about";
import AllDishes from "../pages/allDishes";

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
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/all",
        element: <AllDishes />,
      },
    ],
  },
]);

export default router;
