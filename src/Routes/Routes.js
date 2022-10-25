import Courses from "../Components/Courses";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Main from "../Layouts/Main";

const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
