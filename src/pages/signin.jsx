/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signin } from "../helpers/validation";
import * as ant from "react-icons/ai";
import Lottie from "lottie-react";
import signinCover from "../assets/anim/signin.json";
import PasswordChecklist from "react-password-checklist";
import BeatLoader from "react-spinners/BeatLoader";

import {
  getAuth,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from "firebase/auth";

import Alert from "../components/alert";
import firebaseErrors from "../database/firebaseErrors";
import { useDispatch } from "react-redux";
import { LoggedInUser } from "../features/Slices/userSlice";

const resendVerificationEmail = ({ auth, setMessage }) => {
  const sendEmail = () => {
    sendEmailVerification(auth.user);
    setMessage(
      <Alert
        alert="info"
        title="Verification"
        message="Email sent! Please, check your mail inbox/junk/spam folder."
      />
    );
  };

  return (
    <>
      <a className="text-blue-50" onClick={sendEmail}>
        Resend
      </a>
    </>
  );
};

const Signin = () => {
  const [message, setMessage] = useState("");
  let [loading, setLoading] = useState(false);
  const [isStrong, setIsStrong] = useState(false);

  const auth = getAuth();

  const initialValues = {
    username: "",
    password: "",
    remember: false,
  };
  const formik = useFormik({
    initialValues,
    onSubmit: () => {
      login();
    },
    validationSchema: signin,
  });

  const dispatch = useDispatch();

  const login = () => {
    setLoading(true);

    if (isStrong) {
      signInWithEmailAndPassword(
        auth,
        formik.values.username,
        formik.values.password
      )
        .then((userCredential) => {
          console.log("User Credential", userCredential.user.emailVerified);

          if (!userCredential.user.emailVerified) {
            setMessage(
              <Alert
                alert="error"
                title="Error"
                message={`Please, verify your email first. ${(
                  <resendVerificationEmail
                    auth={userCredential.user}
                    setMessage={setMessage}
                  />
                )} verification mail again?`}
              />
            );
            signOut(auth);
          } else {
            dispatch(LoggedInUser(userCredential.user));
          }
        })
        .catch((error) => {
          setMessage(
            <Alert alert="error" title="Error" message={error.code} />
          );
        });
    }

    setLoading(false);
  };

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
              <Lottie
                animationData={signinCover}
                loop={true}
                autoplay={true}
                className="h-[450px]"
              />
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

                {message}

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
                    <PasswordChecklist
                      rules={[
                        "minLength",
                        "maxLength",
                        "specialChar",
                        "number",
                        "capital",
                        "lowercase",
                        //"match",
                      ]}
                      minLength={8}
                      maxLength={20}
                      value={formik.values.password}
                      //valueAgain={formik.values.cpa}
                      onChange={(isValid) => {
                        if (isValid) setIsStrong(true);
                        else setIsStrong(false);
                      }}
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
                    disabled={loading}
                    className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none disabled:cursor-not-allowed"
                  >
                    {loading ? <BeatLoader size={5} color="#fff" /> : "Sign In"}
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
