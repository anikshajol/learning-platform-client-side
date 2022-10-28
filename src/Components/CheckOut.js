import { Card } from "flowbite-react";
import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const courses = useLoaderData();
  const { description, title } = courses;
  return (
    <div className="mt-4">
      <Card className="container mx-auto bg-amber-300 ">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </Card>
    </div>
  );
};

export default CheckOut;
