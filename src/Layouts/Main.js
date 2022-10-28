import Footer from "../Components/Footer";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
