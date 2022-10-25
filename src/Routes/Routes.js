import About from "../Components/About";
import Blog from "../Components/Blog";
import Blogs from "../Components/Blog";
import Courses from "../Components/Courses";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import SideNav from "../Components/SideNav";
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
      {
        path: "/sidebar",
        element: <SideNav></SideNav>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
