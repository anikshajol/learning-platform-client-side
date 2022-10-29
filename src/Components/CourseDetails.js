import { Button } from "flowbite-react";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";

import { jsPDF } from "jspdf";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const CourseDetails = () => {
  const productDetails = useLoaderData();
  const checkoutCourse = useLoaderData();

  const doc = new jsPDF();

  const { description, img, title, overview } = productDetails;

  const [a, b, c] = overview;

  return (
    <div className=" flex flex-col md:flex-row justify-center gap-8 mt-8 bg-[#ecf0f1] p-4  ">
      <div className="flex flex-col items-center rounded-lg p-4 text-justify  md:max-w-xl bg-[#512DA8] text-white dark:bg-gray-800 ">
        <img
          className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-5/12 md:rounded-none md:rounded-l-lg"
          src={img}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h4 className="mb-2 text-3xl font-bold tracking-tight text-white dark:text-white">
            {title}
          </h4>
          <p className="  text-2xl  mb-3 font-normal text-white dark:text-gray-400">
            {description}
          </p>
          <p className="mb-3 font-normal text-xl text-white dark:text-gray-400">
            <li>{a}</li>
            <li>{b}</li>
            <li>{c}</li>
          </p>
          <div className="flex justify-start">
            <Link to={`/checkout/${checkoutCourse.id}`}>
              <Button className="bg-yellow-200 w-full text-black hover:text-white hover:bg-yellow-500 hover:pr-5 transition-all duration-200">
                <span className="p-2  md:text-xl font-bold">
                  Get premium access
                </span>
                <ArrowRightIcon className=" w-6 h-6 md:w-12 md:h-8 ml-2 font-bold" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <Button
          className="p-2 w-full md:w-64"
          onClick={() => {
            doc.text(description, 10, 10);
            doc.save("nextCoder.pdf");
          }}
          gradientMonochrome="success"
        >
          <span className="text-xl">Download pdf</span>
        </Button>
      </div>
    </div>
  );
};

export default CourseDetails;
