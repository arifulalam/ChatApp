/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import * as icons from "react-icons/fa";

const Chat = () => {
  const [showSearch, setShowSearch] = useState('invisible');

  const _showSearch = () => {
    showSearch == 'visible' ? setShowSearch('invisible') : setShowSearch('visible');
  }

  return (
    <>
      {/*<!-- component -->*/}
      <script src="//unpkg.com/alpinejs" defer></script>
      <div className="p-5 h-screen w-full bg-blue-600">
        <div className=" h-full bg-white overflow-hidden flex flex-col rounded-xl shadow-xl">
          {/*<!-- navbar -->*/}
          <div className=" border-b px-5 py-1 flex justify-between items-center">
            <span>
              <icons.FaEnvelope className="w-6 h-6" />
            </span>
            {/*<!-- search -->*/}
            <div className=" w-1/2 relative focus-within:shadow-lg">
              <div className="flex items-center w-full focus-within:border px-3 py-2  focus-within:border-b-0">
                <icons.FaSearch className="w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search.."
                  className=" w-full outline-none placeholder:text-slate-300 font-semibold pl-2"
                  onClick={_showSearch} onBlur={_showSearch}
                />
              </div>

              <div className={`absolute w-full border bg-white ${showSearch}`}>
                <div className="px-4 py-1 flex justify-between items-center border-b">
                  <p className="text-sm font-medium text-slate-600">
                    Recent Search
                  </p>
                  <p className="text-xs text-slate-400 cursor-pointer">
                    Clear All
                  </p>
                </div>
                <template>
                  <div className="w-full px-4 py-3 border-b last:border-b-0 flex items-start hover:bg-slate-50 cursor-pointer">
                    <img className="h-12 w-12 border rounded-full" alt="" />
                    <div className="ml-4">
                      <p className="text-md font-semibold text-slate-600 m-0 p-0">
                        {" "}
                      </p>
                      <p className="text-xs text-slate-400 -mt-0.5"></p>
                    </div>
                  </div>
                </template>
                <div className="w-full px-4 py-3 border-b last:border-b-0 flex items-start hover:bg-slate-50 cursor-pointer">
                  <img
                    className="h-12 w-12 border rounded-full"
                    alt=""
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
                  />
                  <div className="ml-4">
                    <p className="text-md font-semibold text-slate-600 m-0 p-0">
                      Marcel Jones
                    </p>
                    <p className="text-xs text-slate-400 -mt-0.5">
                      marcel@jones.com
                    </p>
                  </div>
                </div>
                <div className="w-full px-4 py-3 border-b last:border-b-0 flex items-start hover:bg-slate-50 cursor-pointer">
                  <img
                    className="h-12 w-12 border rounded-full"
                    alt=""
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
                  />
                  <div className="ml-4">
                    <p className="text-md font-semibold text-slate-600 m-0 p-0">
                      Sheldon Quigley
                    </p>
                    <p className="text-xs text-slate-400 -mt-0.5">
                      Sheldon.Quigley@mail.com
                    </p>
                  </div>
                </div>
                <div className="w-full px-4 py-3 border-b last:border-b-0 flex items-start hover:bg-slate-50 cursor-pointer">
                  <img
                    className="h-12 w-12 border rounded-full"
                    alt=""
                    src="https://images.unsplash.com/photo-1584999734482-0361aecad844?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
                  />
                  <div className="ml-4">
                    <p className="text-md font-semibold text-slate-600 m-0 p-0">
                      Leonard Leach
                    </p>
                    <p className="text-xs text-slate-400 -mt-0.5">
                      leonard.leach@mail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*<!-- profile -->*/}
            <div className="flex space-x-4 items-center">
              <icons.FaCog className="w-6 h-6" />
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
                className="h-10 w-10 rounded-full"
                alt=""
              />
            </div>
          </div>
          {/*<!-- body -->*/}
          <div className="h-full flex">
            {/*<!-- Friend List -->*/}
            <div className="h-full w-96 bg-slate-50 border-r flex-col hidden sm:flex">
              <div className="h-16 border-b px-4 flex items-center justify-center space-x-4">
                <div className="px-4 py-4 border-b-4 border-b-blue-500">
                  All
                </div>
                <div className="px-4 py-4 ">Archived</div>
              </div>
              <div className="h-full overflow-y-auto">
                <div className="px-5 py-4 flex items-center cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500"
                    className="h-12 w-12 border-2 border-white rounded-full"
                    alt=""
                  />
                  <div className="ml-4">
                    <p className="text-md font-semibold text-slate-600 m-0 p-0">
                      Yaroslav Zubkp
                    </p>
                    <p className="text-xs text-slate-400 -mt-0.5 font-semibold">
                      is is long ipsum avaliable...
                    </p>
                  </div>
                </div>

                <div className="px-5 py-4 flex items-center cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1499887142886-791eca5918cd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500"
                    className="h-12 w-12 border-2 border-white rounded-full"
                    alt=""
                  />
                  <div className="ml-4">
                    <p className="text-md font-semibold text-slate-600 m-0 p-0">
                      {" "}
                      Alison Alison
                    </p>
                    <p className="text-xs text-slate-400 -mt-0.5 font-semibold">
                      Hello
                    </p>
                  </div>
                </div>

                <div className="px-5 py-4 flex items-center bg-white cursor-pointer border-l-4 border-l-blue-500 border-t border-b">
                  <img
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
                    className="h-12 w-12 border-2 border-white rounded-full"
                    alt=""
                  />
                  <div className="ml-4">
                    <p className="text-md font-semibold text-slate-600 m-0 p-0">
                      {" "}
                      Mircel Jones
                    </p>
                    <p className="text-xs text-slate-400 -mt-0.5 font-semibold">
                      Ok, Thanks.
                    </p>
                  </div>
                </div>

                <div className="px-5 py-4 flex items-center cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
                    className="h-12 w-12 border-2 border-white rounded-full"
                    alt=""
                  />
                  <div className="ml-4">
                    <p className="text-md font-semibold text-slate-600 m-0 p-0">
                      Uran Poland
                    </p>
                    <p className="text-xs text-slate-400 -mt-0.5 font-semibold">
                      We own hidden lake..
                    </p>
                  </div>
                </div>

                <div className="px-5 py-4 flex items-center cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500"
                    className="h-12 w-12 border-2 border-white rounded-full"
                    alt=""
                  />
                  <div className="ml-4">
                    <p className="text-md font-semibold text-slate-600 m-0 p-0">
                      Yaroslav Zubkp
                    </p>
                    <p className="text-xs text-slate-400 -mt-0.5 font-semibold">
                      is is long ipsum avaliable...
                    </p>
                  </div>
                </div>

                <div className="px-5 py-4 flex items-center cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1499887142886-791eca5918cd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500 "
                    className="h-12 w-12 border-2 border-white rounded-full"
                    alt=""
                  />
                  <div className="ml-4">
                    <p className="text-md font-semibold text-slate-600 m-0 p-0">
                      {" "}
                      Alison Alison
                    </p>
                    <p className="text-xs text-slate-400 -mt-0.5 font-semibold">
                      Hello
                    </p>
                  </div>
                </div>

                <div className="px-5 py-4 flex items-center cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500"
                    className="h-12 w-12 border-2 border-white rounded-full"
                    alt=""
                  />
                  <div className="ml-4">
                    <p className="text-md font-semibold text-slate-600 m-0 p-0">
                      Yaroslav Zubkp
                    </p>
                    <p className="text-xs text-slate-400 -mt-0.5 font-semibold">
                      is is long ipsum avaliable...
                    </p>
                  </div>
                </div>

                <div className="px-5 py-4 flex items-center cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1499887142886-791eca5918cd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500 "
                    className="h-12 w-12 border-2 border-white rounded-full"
                    alt=""
                  />
                  <div className="ml-4">
                    <p className="text-md font-semibold text-slate-600 m-0 p-0">
                      {" "}
                      Alison Alison
                    </p>
                    <p className="text-xs text-slate-400 -mt-0.5 font-semibold">
                      Hello
                    </p>
                  </div>
                </div>

                <div className="px-5 py-4 flex items-center cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500"
                    className="h-12 w-12 border-2 border-white rounded-full"
                    alt=""
                  />
                  <div className="ml-4">
                    <p className="text-md font-semibold text-slate-600 m-0 p-0">
                      Yaroslav Zubkp
                    </p>
                    <p className="text-xs text-slate-400 -mt-0.5 font-semibold">
                      is is long ipsum avaliable...
                    </p>
                  </div>
                </div>

                <div className="px-5 py-4 flex items-center cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1499887142886-791eca5918cd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500 "
                    className="h-12 w-12 border-2 border-white rounded-full"
                    alt=""
                  />
                  <div className="ml-4">
                    <p className="text-md font-semibold text-slate-600 m-0 p-0">
                      {" "}
                      Alison Alison
                    </p>
                    <p className="text-xs text-slate-400 -mt-0.5 font-semibold">
                      Hello
                    </p>
                  </div>
                </div>

                <div className="px-5 py-4 flex items-center cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500"
                    className="h-12 w-12 border-2 border-white rounded-full"
                    alt=""
                  />
                  <div className="ml-4">
                    <p className="text-md font-semibold text-slate-600 m-0 p-0">
                      Yaroslav Zubkp
                    </p>
                    <p className="text-xs text-slate-400 -mt-0.5 font-semibold">
                      is is long ipsum avaliable...
                    </p>
                  </div>
                </div>

                <div className="px-5 py-4 flex items-center cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1499887142886-791eca5918cd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500 "
                    className="h-12 w-12 border-2 border-white rounded-full"
                    alt=""
                  />
                  <div className="ml-4">
                    <p className="text-md font-semibold text-slate-600 m-0 p-0">
                      {" "}
                      Alison Alison
                    </p>
                    <p className="text-xs text-slate-400 -mt-0.5 font-semibold">
                      Hello Bello Cello Mello
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-20 w-full"></div>
            </div>
            <div className="w-full h-full flex flex-col">
              <div className="h-16 border-b flex justify-between items-center w-full px-5 py-2 shadow-sm">
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 overflow-hidden rounded-full"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
                    alt=""
                  />
                  <p className="font-semibold ml-3 text-slate-600">
                    Mircel Jones
                  </p>
                </div>
                <div className="flex items-center space-x-5">
                 <icons.FaUserPlus className="w-5 h-5 text-gray-300" />

                  <icons.FaEllipsisV className="w-5 h-5 text-gray-300" />
                </div>
              </div>
              <div className="h-full px-10 py-4 overflow-auto">
                {/*<!-- message container -->*/}
                <div className="text-center  my-5">
                  <hr className="-mb-3" />
                  <span className="text-xs text-slate-300 font-medium bg-white px-3 -mt-3">
                    Wednesday, Feburary 5
                  </span>
                </div>
                {/*<!-- messages -->*/}
                <div className="w-full flex flex-start overflow-y-auto">
                  <div className="w-1/2">
                    <div className="flex items-center">
                      <img
                        className="h-5 w-5 overflow-hidden rounded-full"
                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
                        alt=""
                      />
                      <p className="font-semibold ml-3 text-sm text-slate-600">
                        Mircel Jones{" "}
                        <span className="text-slate-400 text-xs">3:21 PM</span>
                      </p>
                    </div>

                    <div className="mt-3 w-full bg-slate-50 p-4 rounded-b-xl rounded-tr-xl">
                      <p className=" text-sm text-slate-500">
                        Hey all, <br />
                        There are many variation of passages of Lorem ipsum
                        avaliable, but the jority have alternation in some form
                        , by injected humor, or randomise words which don&apos;t
                        look even slightly believable.
                      </p>
                    </div>
                  </div>
                </div>
                {/*<!-- me -->*/}
                <div className="w-full flex justify-end mt-3">
                  <div className="w-1/2 ">
                    <div className="flex items-center justify-end">
                      <p className="font-semibold mr-3 text-sm text-slate-600">
                        Me{" "}
                        <span className="text-slate-400 text-xs">3:25 PM</span>
                      </p>

                      <img
                        className="h-5 w-5 overflow-hidden rounded-full"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
                        alt=""
                      />
                    </div>
                    <div className="mt-3 w-full bg-blue-500 p-4 rounded-b-xl rounded-tl-xl">
                      <p className=" text-sm text-white">
                        Hey, <br />
                        we are own hidden lake forest which is netural lake are
                        generaly found in mountain.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-center  my-5">
                  <hr className="-mb-3" />
                  <span className="text-xs text-slate-300 font-medium bg-white px-3 -mt-3">
                    Today, 2:15 AM 5
                  </span>
                </div>
                {/*<!-- messages -->*/}
                <div className="w-full flex flex-start">
                  <div className="w-1/2">
                    <div className="flex items-center">
                      <img
                        className="h-5 w-5 overflow-hidden rounded-full"
                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
                        alt=""
                      />
                      <p className="font-semibold ml-3 text-sm text-slate-600">
                        Mircel Jones{" "}
                        <span className="text-slate-400 text-xs">3:21 PM</span>
                      </p>
                    </div>

                    <div className="mt-3  bg-slate-50 p-4 rounded-b-xl rounded-tr-xl">
                      <p className=" text-sm text-slate-500">ok, Thanks</p>
                    </div>
                  </div>
                </div>
                {/*<!-- me -->*/}
                <div className="w-full flex justify-end mt-3">
                  <div className="w-1/2 ">
                    <div className="flex items-center justify-end">
                      <p className="font-semibold mr-3 text-sm text-slate-600">
                        Me{" "}
                        <span className="text-slate-400 text-xs">3:25 PM</span>
                      </p>

                      <img
                        className="h-5 w-5 overflow-hidden rounded-full"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
                        alt=""
                      />
                    </div>
                    <div className="mt-3 w-full bg-blue-500 p-4 rounded-b-xl rounded-tl-xl">
                      <p className=" text-sm text-white">
                        Hey, <br />
                        we are own hidden lake forest which is netural lake are
                        generaly found in mountain.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-center  my-5">
                  <hr className="-mb-3" />
                  <span className="text-xs text-slate-300 font-medium bg-white px-3 -mt-3">
                    Today, 2:15 AM 5
                  </span>
                </div>
                {/*<!-- messages -->*/}
                <div className="w-full flex flex-start">
                  <div className="w-1/2">
                    <div className="flex items-center">
                      <img
                        className="h-5 w-5 overflow-hidden rounded-full"
                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
                        alt=""
                      />
                      <p className="font-semibold ml-3 text-sm text-slate-600">
                        Mircel Jones{" "}
                        <span className="text-slate-400 text-xs">3:21 PM</span>
                      </p>
                    </div>

                    <div className="mt-3  bg-slate-50 p-4 rounded-b-xl rounded-tr-xl">
                      <p className=" text-sm text-slate-500">ok, Thanks</p>
                    </div>
                  </div>
                </div>
                {/*<!-- me -->*/}
                <div className="w-full flex justify-end mt-3">
                  <div className="w-1/2 ">
                    <div className="flex items-center justify-end">
                      <p className="font-semibold mr-3 text-sm text-slate-600">
                        Me{" "}
                        <span className="text-slate-400 text-xs">3:25 PM</span>
                      </p>

                      <img
                        className="h-5 w-5 overflow-hidden rounded-full"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
                        alt=""
                      />
                    </div>
                    <div className="mt-3 w-full bg-blue-500 p-4 rounded-b-xl rounded-tl-xl">
                      <p className=" text-sm text-white">
                        Hey, <br />
                        we are own hidden lake forest which is netural lake are
                        generaly found in mountain.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-center  my-5">
                  <hr className="-mb-3" />
                  <span className="text-xs text-slate-300 font-medium bg-white px-3 -mt-3">
                    Today, 2:15 AM 5
                  </span>
                </div>
                {/*<!-- messages -->*/}
                <div className="w-full flex flex-start">
                  <div className="w-1/2">
                    <div className="flex items-center">
                      <img
                        className="h-5 w-5 overflow-hidden rounded-full"
                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
                        alt=""
                      />
                      <p className="font-semibold ml-3 text-sm text-slate-600">
                        Mircel Jones{" "}
                        <span className="text-slate-400 text-xs">3:21 PM</span>
                      </p>
                    </div>

                    <div className="mt-3  bg-slate-50 p-4 rounded-b-xl rounded-tr-xl">
                      <p className=" text-sm text-slate-500">ok, Thanks</p>
                    </div>
                  </div>
                </div>
                {/*<!-- me -->*/}
                <div className="w-full flex justify-end mt-3">
                  <div className="w-1/2 ">
                    <div className="flex items-center justify-end">
                      <p className="font-semibold mr-3 text-sm text-slate-600">
                        Me{" "}
                        <span className="text-slate-400 text-xs">3:25 PM</span>
                      </p>

                      <img
                        className="h-5 w-5 overflow-hidden rounded-full"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
                        alt=""
                      />
                    </div>
                    <div className="mt-3 w-full bg-blue-500 p-4 rounded-b-xl rounded-tl-xl">
                      <p className=" text-sm text-white">
                        Hey, <br />
                        we are own hidden lake forest which is netural lake are
                        generaly found in mountain.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-center  my-5">
                  <hr className="-mb-3" />
                  <span className="text-xs text-slate-300 font-medium bg-white px-3 -mt-3">
                    Today, 2:15 AM 5
                  </span>
                </div>
                {/*<!-- messages -->*/}
                <div className="w-full flex flex-start">
                  <div className="w-1/2">
                    <div className="flex items-center">
                      <img
                        className="h-5 w-5 overflow-hidden rounded-full"
                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
                        alt=""
                      />
                      <p className="font-semibold ml-3 text-sm text-slate-600">
                        Mircel Jones{" "}
                        <span className="text-slate-400 text-xs">3:21 PM</span>
                      </p>
                    </div>

                    <div className="mt-3  bg-slate-50 p-4 rounded-b-xl rounded-tr-xl">
                      <p className=" text-sm text-slate-500">ok, Thanks</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*Message Box*/}
              <div className="w-full h-[220px] px-5 py-3">
                <div className="h-20 flex justify-between px-3 py-3 items-center border border-transparent bg-slate-50 focus-within:border-slate-300 rounded-lg">
                <div className="flex items-center space-x-4">
                    <icons.FaPaperclip className="w-4 h-4 text-gray-400" />

                    <icons.FaImage className="w-4 h-4 text-gray-400" />
                  </div>
                  <textarea
                    className="w-full px-3 py-3 bg-transparent outline-none resize-none placeholder:text-slate-400"
                    rows={2}
                    placeholder="Type your message" aria-multiline="true"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
