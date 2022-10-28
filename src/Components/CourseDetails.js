import { Button } from "flowbite-react";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";

import { jsPDF } from "jspdf";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const CourseDetails = () => {
  const productDetails = useLoaderData();
  const checkoutCourse = useLoaderData();

  const doc = new jsPDF();
  // const handleDownloadPdf = () => {

  // };

  const { description, img, title, overview } = productDetails;

  const [a, b, c] = overview;

  return (
    <div className=" flex justify-center mt-8">
      <div className="flex flex-col items-center rounded-lg  md:max-w-xl  dark:bg-gray-800 ">
        <img
          className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-5/12 md:rounded-none md:rounded-l-lg"
          src={img}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="  text-2xl  mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <p className="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400">
            <li>{a}</li>
            <li>{b}</li>
            <li>{c}</li>
          </p>
          <div className="flex justify-start">
            <Link to={`/checkout/${checkoutCourse.id}`}>
              <Button color="warning">
                <span className="p-2 text-xl font-bold">
                  Get premium access
                </span>{" "}
                <ArrowRightIcon className="w-12 h-8 ml-2 font-bold" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <Button
          onClick={() => {
            doc.text(description, 10, 10);
            doc.save("nextCoder.pdf");
          }}
          gradientMonochrome="success"
        >
          Download pdf
        </Button>
      </div>
    </div>
  );
};

export default CourseDetails;
