/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import * as icons from "react-icons/fa6";
import logo from "../../../assets/images/ChatApp.png";
import { Link } from 'react-router-dom';

const DashboardNavbar = ({
  rightBarVisibility,
  setRightBarVisibility,
  leftBarVisibility,
  setLeftBarVisibility,
  dark,
  setDark,
}) => {
  const rbVisibility = () => {
    rightBarVisibility == "visible"
      ? setRightBarVisibility("invisible")
      : setRightBarVisibility("visible");
  };

  const lbVisibility = () => {
    leftBarVisibility == "visible"
      ? setLeftBarVisibility("invisible")
      : setLeftBarVisibility("visible");
  };

  const [notification, setNotification] = useState('invisible');
  const isNotification = () => {
    console.log(notification)
    notification == 'visible' ? setNotification('invisible') : setNotification('visible');
  }

  const DarkTheme = () => {
    dark == "dark" ? setDark("") : setDark("dark");
  };
  return (
    <>
      {/*Top Bar*/}
      <div className="fixed w-full flex items-center justify-between h-14 text-white z-10 bg-blue-600">
        <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-blue-600 dark:bg-gray-800 border-none">
          <img
            className="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"
            src={logo}
          />
          <span className="hidden md:block text-white-900">
            CHAT APP
            <br />
            <sup>Connect. Type. Talk.</sup>
          </span>
        </div>
        <div className="flex justify-between items-center h-14 bg-blue-600 dark:bg-gray-800 header-right">
          <div className="bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200">
            <button className="outline-none focus:outline-none">
              <icons.FaSearchengin />
            </button>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
              className="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent"
            />
          </div>
          <ul className="flex items-center gap-2">
            <li>
              <button
                aria-hidden="true"
                onClick={DarkTheme}
                className="group p-2 transition-colors duration-200 rounded-full shadow-md bg-blue-200 hover:bg-blue-200 dark:bg-gray-50 dark:hover:bg-gray-200 text-gray-900 focus:outline-none"
              >
                {dark == "dark" && (
                  <icons.FaSun className="w-4 h-4 text-orange-400" />
                )}
                {dark != "dark" && (
                  <icons.FaMoon className="w-4 h-4 text-white-400" />
                )}
              </button>
            </li>
            <li>
              <button
                onClick={lbVisibility}
                className="group p-2 transition-colors duration-200 rounded-full shadow-md bg-blue-200 hover:bg-blue-200 dark:bg-gray-50 dark:hover:bg-gray-200 focus:outline-none"
              >
                <icons.FaLeftLong className="w-4 h-4 text-black" />
              </button>
            </li>
            <li>
              <button
                onClick={rbVisibility}
                className="group p-2 transition-colors duration-200 rounded-full shadow-md bg-blue-200 hover:bg-blue-200 dark:bg-gray-50 dark:hover:bg-gray-200 focus:outline-none"
              >
                <icons.FaRightLong className="w-4 h-4 text-black" />
              </button>
            </li>
            <li>
              <div className="relative my-32">
                <button onClick={isNotification} className="relative z-10 block rounded-full bg-blue-200 p-2 focus:outline-none">
                  <icons.FaBell className="text-black w-4 h-4" />
                </button>
                <div
                  className={`absolute right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden z-20 w-[20rem] ${notification}`}
                >
                  <div className="py-2">
                    <a
                      href="#"
                      className="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2"
                    >
                      <img
                        className="h-8 w-8 rounded-full object-cover mx-1"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                        alt="avatar"
                      />
                      <p className="text-gray-600 text-sm mx-2">
                        <span className="font-bold" href="#">
                          Sara Salah
                        </span>{" "}
                        replied on the{" "}
                        <span className="font-bold text-blue-500" href="#">
                          Upload Image
                        </span>{" "}
                        artical . 2m
                      </p>
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2"
                    >
                      <img
                        className="h-8 w-8 rounded-full object-cover mx-1"
                        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                        alt="avatar"
                      />
                      <p className="text-gray-600 text-sm mx-2">
                        <span className="font-bold" href="#">
                          Slick Net
                        </span>{" "}
                        start following you . 45m
                      </p>
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2"
                    >
                      <img
                        className="h-8 w-8 rounded-full object-cover mx-1"
                        src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                        alt="avatar"
                      />
                      <p className="text-gray-600 text-sm mx-2">
                        <span className="font-bold" href="#">
                          Jane Doe
                        </span>{" "}
                        Like Your reply on{" "}
                        <span className="font-bold text-blue-500" href="#">
                          Test with TDD
                        </span>{" "}
                        artical . 1h
                      </p>
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-3 hover:bg-gray-100 -mx-2"
                    >
                      <img
                        className="h-8 w-8 rounded-full object-cover mx-1"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80"
                        alt="avatar"
                      />
                      <p className="text-gray-600 text-sm mx-2">
                        <span className="font-bold" href="#">
                          Abigail Bennett
                        </span>{" "}
                        start following you . 3h
                      </p>
                    </a>
                  </div>
                  <a
                    href="#"
                    className="block bg-gray-800 text-white text-center font-bold py-2"
                  >
                    See all notifications
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"></div>
            </li>
            <li>
              <Link
                to="/signin"
                className="flex items-center mr-4 hover:text-blue-100"
              >
                <span className="inline-flex mr-1">
                  <icons.FaRightFromBracket className="w-4 h-4 text-white"/>
                </span>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/*Menu Bar*/}
      <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-blue-500 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
        <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="px-5 hidden md:block">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-white uppercase">
                  Main
                </div>
              </div>
            </li>
            <li>
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <icons.FaHouse />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Dashboard
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <icons.FaBoxArchive />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Board
                </span>
                <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-500 bg-indigo-50 rounded-full">
                  New
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <icons.FaMessage />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Messages
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <icons.FaBell />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Notifications
                </span>
                <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                  1.2k
                </span>
              </a>
            </li>
            <li className="px-5 hidden md:block">
              <div className="flex flex-row items-center mt-5 h-8">
                <div className="text-sm font-light tracking-wide text-white uppercase">
                  Settings
                </div>
              </div>
            </li>
            <li>
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <icons.FaUser />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Profile
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <icons.FaGear className="w-5 h-5" />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Settings
                </span>
              </a>
            </li>
          </ul>
          <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">
            Copyright @ {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </>
  );
};

export default DashboardNavbar;
