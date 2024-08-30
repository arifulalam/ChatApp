/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import * as icons from "react-icons/fa6";

const LeftSideBar = ({ leftBarVisibility, setLeftBarVisibility }) => {
  const lbVisibility = () => {
    leftBarVisibility == "visible"
      ? setLeftBarVisibility("invisible")
      : setLeftBarVisibility("visible");
  };
  return (
    <>
        <div
          className={`fixed inset-0 z-10 bg-indigo-800 opacity-50 ${leftBarVisibility}`}
          aria-hidden="true"
          onClick={lbVisibility}
        ></div>
      <section
        className={`fixed inset-y-0 z-20 w-full max-w-xs bg-white shadow-xl dark:bg-darker dark:text-light sm:max-w-md focus:outline-none ${leftBarVisibility}`}
      >
        <div className="absolute right-0 p-2 transform translate-x-full">
          {/*<!-- Close button -->*/}
          <button
            className="p-2 text-white rounded-md focus:outline-none focus:ring"
            onClick={lbVisibility}
          >
            <icons.FaXmark className="w-6 h-6" />
          </button>
        </div>

        <h2 className="sr-only">Search panel</h2>
        {/*<!-- Panel content -->*/}
        <div className="flex flex-col h-screen">
          {/*<!-- Panel header (Search input) -->*/}
          <div className="relative flex-shrink-0 px-4 py-8 text-gray-400 border-b dark:border-indigo-800 dark:focus-within:text-light focus-within:text-gray-700">
            <span className="absolute inset-y-0 inline-flex items-center px-4">
              <icons.FaSearchengin className="w-6 h-6" />
            </span>
            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 border rounded-full dark:bg-dark dark:border-transparent dark:text-light focus:outline-none focus:ring"
              placeholder="Search..."
            />
          </div>

          {/*<!-- Panel content (Search result) -->*/}
          <div className="flex-1 px-4 pb-4 space-y-4 overflow-y-hidden h hover:overflow-y-auto">
            <h3 className="py-2 text-sm font-semibold text-gray-600 dark:text-light">
              History
            </h3>
            <p className="px=4">Search resault</p>
            {/*<!-- Search content -->*/}
          </div>
        </div>
      </section>
    </>
  );
};

export default LeftSideBar;
