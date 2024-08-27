/* eslint-disable no-unused-vars */
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signin } from "../helpers/validation";
import * as ant from "react-icons/ai";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Signin = () => {
  const initialValues = {
    username: "",
    password: "",
    remember: false,
  };
  const formik = useFormik({
    initialValues,
    onSubmit: () => {},
    validationSchema: signin,
  });

  const [passType, setPassType] = useState("password");

  const passVisibility = () => {
    setPassType((passType) => (passType == "password" ? "text" : "password"));
  };

  return (
    <>
      <div className="font-[sans-serif] bg-white">
        <div className="min-h-screen flex fle-col items-center justify-center px-4">
          <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
            <div className="lg:h-[400px] md:h-[250px] max-md:mt-8 max-sm:hidden">
              <DotLottieReact src="../assets/anim/signin.json" loop autoplay />
            </div>
            <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
              <form className="space-y-4" onSubmit={formik.handleSubmit}>
                <div className="mb-8">
                  <h3 className="text-gray-800 text-3xl font-extrabold font-SerifRegular">
                    Sign in
                  </h3>
                  <p className="text-gray-500 text-sm mt-4 leading-relaxed font-SerifRegular">
                    Sign in to your account and explore a world of
                    possibilities. Your journey begins here.
                  </p>
                </div>

                <div>
                  <label className="text-gray-800 text-sm mb-2 block font-SerifRegular">
                    Username/ Email
                  </label>
                  <div className="relative flex items-center flex-col">
                    <input
                      name="username"
                      type="text"
                      required
                      className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                      placeholder="Enter username"
                      onChange={formik.handleChange}
                      value={formik.values.username}
                    />
                    {formik.errors.username && formik.touched.username && (
                      <p className="text-red-600 p-2 rounded-md bg-red-300 mt-1 w-[100%]">
                        {formik.errors.username}
                      </p>
                    )}
                    <ant.AiOutlineUser className="w-[18px] h-[18px] absolute right-4 top-3 cursor-pointer" />
                  </div>
                </div>
                <div>
                  <label className="text-gray-800 text-sm mb-2 block font-SerifRegular">
                    Password
                  </label>
                  <div className="relative flex items-center flex-col">
                    <input
                      name="password"
                      type={passType}
                      required
                      className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                      placeholder="Enter password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                    {formik.errors.password && formik.touched.password && (
                      <p className="text-red-600 p-2 rounded-md bg-red-300 mt-1 w-[100%]">
                        {formik.errors.password}
                      </p>
                    )}
                    <button
                      type="button"
                      className="w-[18px] h-[18px] absolute right-4 top-3 cursor-pointer"
                      onClick={passVisibility}
                    >
                      {passType == "text" ? (
                        <ant.AiOutlineEye />
                      ) : (
                        <ant.AiOutlineEyeInvisible />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center">
                    <label className="ml-3 block text-sm text-gray-800">
                      <input
                        id="remember-me"
                        name="remember"
                        type="checkbox"
                        className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        onChange={formik.handleChange}
                        value={formik.values.remember}
                      />{" "}
                      &nbsp; Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <Link
                      to="/forgot-password"
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>

                <div className="!mt-8">
                  <button
                    type="submit"
                    className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                  >
                    Log in
                  </button>
                </div>

                <p className="text-sm !mt-8 text-center text-gray-800">
                  Don&apos;t have an account{" "}
                  <Link
                    to="/signup"
                    className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                  >
                    Register here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
