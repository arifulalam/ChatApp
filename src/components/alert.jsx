/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import * as icons from "react-icons/fa";

const Alert = ({ alert, title, message }) => {
  const alertTypes = {
    success: ["bg-green-lighter", "bg-green", <icons.FaRegCheckCircle className="h-6 w-6" key={0} />],
    warning: ["bg-yellow-lighter", "bg-yellow", <icons.FaExclamationTriangle className="h-6 w-6" key={1} />],
    error: ["bg-red-lighter", "bg-red", <icons.FaRegTimesCircle className="h-6 w-6" key={2} />],
    info: ["bg-teal-lighter", "bg-teal", <icons.FaInfoCircle className="h-6 w-6" key={3} />],
  };
  return (
    <>
      <div className="flex flex-col">
        <div className={`flex ${alertTypes[alert][0]} max-w-sm mb-4`}>
          <div className={`w-16 ${alertTypes[alert][1]}`}>
            <div className="p-4">{alertTypes[alert][2]}</div>
          </div>
          <div className="w-auto text-grey-darker items-center p-2">
            <span className="text-lg font-bold pb-4">{title}</span>
            <p className="leading-tight">{message}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alert;
