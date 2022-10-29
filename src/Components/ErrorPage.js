import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center absolute inset-0">
      <div className="max-w-md text-center ">
        <section>
          <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
        </section>
        <section>
          <p className="text-2xl font-semibold md:text-3xl mb-8 text-red-600">
            Sorry, we couldn't find this page.
          </p>
        </section>
        <section className="mt-14">
          <Link
            to="/"
            className="px-6  py-3 font-semibold rounded bg-gray-900 hover:bg-gray-700 text-white"
          >
            Back to homepage
          </Link>
        </section>
      </div>
    </div>
  );
};

export default ErrorPage;
