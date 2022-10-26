import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import SideNav from "./SideNav";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 mt-12 ">
      <section className="md:col-span-2 ">
        <SideNav></SideNav>
      </section>

      <section className=" dark:bg-gray-800 dark:hover:bg-gray-700 md:col-span-10 lg:ml-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 mt-8 p-4 lg:mt-0 lg:p-0">
        {courses.map((course) => (
          <div
            key={course.id}
            class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="h-2/5 mb-32 ">
              <img class="h-96 object-cover" src={course.img} alt="" />
            </div>
            <div class="p-5">
              <div>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {course.title}
                </h5>
              </div>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {course.description.length > 30 ? (
                  <p>{course.description.slice(0, 30) + "..."} </p>
                ) : (
                  course.description
                )}
              </p>
              <Link
                to={`/course/${course.id}`}
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  aria-hidden="true"
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Courses;
