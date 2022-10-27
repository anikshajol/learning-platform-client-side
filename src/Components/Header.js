import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../contexts/AuthProvider";
import swal from "sweetalert";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        swal("Logout successfully");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-blue-100 py-4 ">
      <nav className="flex px-2 justify-between items-center ">
        <section className="text-2xl ">
          <Link to="/home">
            <h2 className="">NextCoder</h2>
          </Link>
        </section>
        <section
          className={` nav text-2xl bg-teal-700 justify-end text-white flex flex-col md:flex-row md:text-black  gap-x-4 p-2 w-full  md:bg-blue-100 text-center md:text-right md:static absolute right-[1px] md:right-0  top-16 duration-1000 ease-in-out ${
            open ? "top-12 " : "top-[-520px]"
          }`}
        >
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "md:active bg-blue-800 text-white font-semibold rounded-md p-1"
                : "hover:text-blue-900 hover:font-semibold hover:text-2xl"
            }
            to="/courses"
          >
            Courses
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "md:active bg-blue-800 text-white font-semibold rounded-md p-1"
                : "hover:text-blue-900 hover:font-semibold hover:text-2xl"
            }
            to="/blog"
          >
            Blog
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "md:active bg-blue-800 text-white font-semibold rounded-md p-1"
                : "hover:text-blue-900 hover:font-semibold hover:text-2xl"
            }
            to="/faq"
          >
            FAQ
          </NavLink>
          {user && user?.uid ? (
            <NavLink
              // to="/login"
              onClick={handleLogout}
              className="hover:text-blue-900 hover:font-semibold hover:text-2xl"
            >
              Logout
            </NavLink>
          ) : (
            <>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "md:active bg-blue-800 text-white font-semibold rounded-md p-1"
                    : "hover:text-blue-900 hover:font-semibold hover:text-2xl"
                }
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "md:active bg-blue-800 text-white font-semibold rounded-md p-1"
                    : "hover:text-blue-900 hover:font-semibold hover:text-2xl"
                }
                to="/register"
              >
                Register
              </NavLink>
            </>
          )}
        </section>

        {/* hamburger menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="h-8 w-6 cursor-pointer md:hidden "
        >
          {open ? <XMarkIcon /> : <Bars3Icon />}
        </div>
      </nav>
    </div>
  );
};

export default Header;
