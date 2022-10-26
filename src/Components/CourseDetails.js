import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const productDetails = useLoaderData();

  const { description } = productDetails;

  return (
    <div>
      <h2>Course Details{description}</h2>
    </div>
  );
};

export default CourseDetails;
