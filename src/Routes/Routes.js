import About from "../Components/About";
import Blog from "../Components/Blog";
import CheckOut from "../Components/CheckOut";
import CourseDetails from "../Components/CourseDetails";
import Courses from "../Components/Courses";
import ErrorPage from "../Components/ErrorPage";
import FAQ from "../Components/FAQ";

import Login from "../Components/Login";
import Register from "../Components/Register";
import SideNav from "../Components/SideNav";
import Main from "../Layouts/Main";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
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
        loader: () => fetch("https://nextcodeer.vercel.app/course"),
        element: <Courses></Courses>,
      },
      {
        path: "/",
        loader: () => fetch("https://nextcodeer.vercel.app/course"),
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
      {
        path: "/course/:id",
        loader: ({ params }) =>
          fetch(`https://nextcodeer.vercel.app/course/${params.id}`),
        element: <CourseDetails></CourseDetails>,
      },

      {
        path: "/checkout/:id",
        loader: ({ params }) =>
          fetch(`https://nextcodeer.vercel.app/course/${params.id}`),
        element: (
          <PrivateRoutes>
            <CheckOut></CheckOut>
          </PrivateRoutes>
        ),
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
