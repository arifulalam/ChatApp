/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../helpers/validation";
import * as ant from "react-icons/ai";

import { CaptchaBox, validateCaptcha, reloadCaptcha } from "react-captcha-lite";

import PasswordStrengthBar from 'react-password-strength-bar';

import BeatLoader from "react-spinners/BeatLoader";

import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

import Alert from "../components/alert";
import firebaseErrors from "../database/firebaseErrors";

const Signup = () => {
  const [message, setMessage] = useState("");
  const [captchaMessage, setCaptchaMessage] = useState("");
  let [loading, setLoading] = useState(false);

  const auth = getAuth();

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    cpassword: "",
    captcha: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: () => {
      registration();
    },
    validationSchema: signup,
  });

  const registration = () => {
    setLoading(!loading);

    if(validateCaptcha(formik.values.captcha)){
      setCaptchaMessage("");

      createUserWithEmailAndPassword(
        auth,
        formik.values.email,
        formik.values.password
      )
        .then((userCredential) => {
          // Signed up
          //const user = userCredential.user;
          sendEmailVerification(userCredential.user)
            .then((result) => {
              console.log(result);
              setMessage(
                <Alert
                  alert="success"
                  title="Success"
                  message="Account created successfully. Please, verify email address before login."
                />
              );
            })
            .catch((error) => {
              console.log(error.code);
            });
        })
        .catch((error) => {
          let values = firebaseErrors.find((key) => key.key == "auth").value;
          if (values[error.code]) {
            setMessage(
              <Alert alert="error" title="Error" message={values[error.code]} />
            );
          } else {
            let code = error.code;
            code.replace("auth/", "").replace("-", " ");
            setMessage(<Alert alert="error" title="Error" message={code} />);
          }
        });
    }else{
      setCaptchaMessage(<Alert alert="warning" title="Warning" message="Captcha is wrong." />);
      formik.values.user_captcha_input.value = "";
      componentDidMount();
    }
    setLoading(!loading);
  };

  const [passType, setPassType] = useState("password");
  const [cPassType, setCPassType] = useState("password");

  const passVisibility = () => {
    setPassType((passType) => (passType == "password" ? "text" : "password"));
  };

  const cPassVisibility = () => {
    setCPassType((passType) => (cPassType == "password" ? "text" : "password"));
  };

  return (
    <>
      <div className="font-[sans-serif] bg-white">
        <div className="min-h-screen flex fle-col items-center justify-center px-4">
          <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
            <div className="lg:h-[400px] md:h-[250px] max-md:mt-8 max-sm:hidden">
              <img
                src="https://readymadeui.com/login-image.webp"
                className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
                alt="Dining Experience"
              />
            </div>
            <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
              <form className="space-y-4" onSubmit={formik.handleSubmit}>
                <div className="mb-2">
                  <h3 className="text-gray-800 text-3xl font-extrabold font-SerifRegular">
                    Sign Up
                  </h3>
                  <p className="text-gray-500 text-sm mt-4 leading-relaxed font-SerifRegular">
                    Sign up to create an account and explore a world of
                    possibilities. Your journey begins here. Already have an
                    account? &nbsp;
                    <Link className="text-blue-600" to="/signin">
                      Sign In here
                    </Link>
                    .
                  </p>
                </div>
                {message}
                <div className="flex flex-row gap-3">
                  <div className="w-1/2">
                    <label
                      htmlFor="firstname"
                      className="text-gray-800 text-sm mb-2 block font-SerifRegular"
                    >
                      First Name
                    </label>
                    <div className="relative flex items-center flex-col">
                      <input
                        id="firstname"
                        name="firstname"
                        type="text"
                        required
                        className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                        placeholder="Enter first name"
                        onChange={formik.handleChange}
                        value={formik.values.firstname}
                      />
                      {formik.errors.firstname && formik.touched.firstname && (
                        <p className="text-red-600 p-2 rounded-md bg-red-300 mt-1 w-[100%]">
                          {formik.errors.firstname}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="w-1/2">
                    <label
                      htmlFor="lastname"
                      className="text-gray-800 text-sm mb-2 block font-SerifRegular"
                    >
                      Last Name
                    </label>
                    <div className="relative flex items-center flex-col">
                      <input
                        id="lastname"
                        name="lastname"
                        type="text"
                        required
                        className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                        placeholder="Enter last name"
                        onChange={formik.handleChange}
                        value={formik.values.lastname}
                      />
                      {formik.errors.lastname && formik.touched.lastname && (
                        <p className="text-red-600 p-2 rounded-md bg-red-300 mt-1 w-[100%]">
                          {formik.errors.lastname}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <label className="text-gray-800 text-sm mb-2 block font-SerifRegular">
                    Email
                  </label>
                  <div className="relative flex items-center flex-col">
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                      placeholder="Enter email address"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    {formik.errors.email && formik.touched.email && (
                      <p className="text-red-600 p-2 rounded-md bg-red-300 mt-1 w-[100%]">
                        {formik.errors.email}
                      </p>
                    )}
                    <ant.AiOutlineMail className="w-[18px] h-[18px] absolute right-4 top-3 cursor-pointer" />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="username"
                    className="text-gray-800 text-sm mb-2 block font-SerifRegular"
                  >
                    Username
                  </label>
                  <div className="relative flex items-center flex-col">
                    <input
                      id="username"
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
                    <PasswordStrengthBar password={formik.values.password} className="w-full" />
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

                <div>
                  <label className="text-gray-800 text-sm mb-2 block font-SerifRegular">
                    Confirm Password
                  </label>
                  <div className="relative flex items-center flex-col">
                    <input
                      name="cpassword"
                      type={cPassType}
                      required
                      className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                      placeholder="Retype password"
                      onChange={formik.handleChange}
                      value={formik.values.cpassword}
                    />
                    {formik.errors.cpassword && formik.touched.cpassword && (
                      <p className="text-red-600 p-2 rounded-md bg-red-300 mt-1 w-[100%]">
                        {formik.errors.cpassword}
                      </p>
                    )}
                    <button
                      type="button"
                      className="w-[18px] h-[18px] absolute right-4 top-3 cursor-pointer"
                      onClick={cPassVisibility}
                    >
                      {cPassType == "text" ? (
                        <ant.AiOutlineEye />
                      ) : (
                        <ant.AiOutlineEyeInvisible />
                      )}
                    </button>
                  </div>
                </div>

                <div className="!mt-8">
                  {captchaMessage}
                  <input
                    className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                    placeholder="Enter Captcha Value"
                    id="captcha"
                    name="captcha"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.captcha}
                  />
                  
                  <CaptchaBox boxBorder="0px" />
                </div>

                <div className="!mt-8">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none disabled:cursor-not-allowed"
                  >
                    {loading ? <BeatLoader size={5} color="#fff" /> : "Sign Up"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
