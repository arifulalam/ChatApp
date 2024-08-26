/* eslint-disable no-unused-vars */
import React from "react";
import NavBar from "../components/navbar/index";
import Footer from "../components/footer/index";
import { Outlet } from "react-router-dom";

const MasterPage = () => {
  return (
    <>
      <div className="bg-[#f8f9ff] text-black text-[15px]">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default MasterPage;
