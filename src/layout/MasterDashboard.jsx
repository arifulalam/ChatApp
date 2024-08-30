/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/Dashboard/Navbar/navbar";
import RightSideBar from "../components/Dashboard/Navbar/rightSideBar";
import LeftSideBar from "../components/Dashboard/Navbar/leftSideBar";

const MasterDashboard = () => {
  const [rightBarVisibility, setRightBarVisibility] = useState("invisible");
  const [leftBarVisibility, setLeftBarVisibility] = useState("invisible");
  const [dark, setDark] = useState("");

  return (
    <>
      <div className={dark}>
        <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
          <DashboardNavbar
            rightBarVisibility={rightBarVisibility}
            setRightBarVisibility={setRightBarVisibility}
            leftBarVisibility={leftBarVisibility}
            setLeftBarVisibility={setLeftBarVisibility}
            dark={dark}
            setDark={setDark}
          />

          <LeftSideBar 
            leftBarVisibility={leftBarVisibility}
            setLeftBarVisibility={setLeftBarVisibility}
          />
          <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
            <Outlet />
          </div>
          <RightSideBar
            rightBarVisibility={rightBarVisibility}
            setRightBarVisibility={setRightBarVisibility}
          />
        </div>
      </div>
    </>
  );
};

export default MasterDashboard;
