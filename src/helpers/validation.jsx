/* eslint-disable no-unused-vars */
import * as yup from "yup";

export const signup = yup.object({
  firstname: yup
    .string()
    .min(2, "Must be between 2 to 15 characters.")
    .max(15, "Must be between 2 to 15 characters.")
    .required("First name is required"),
  lastname: yup
    .string()
    .min(2, "Must be between 2 to 15 characters.")
    .max(15, "Must be between 2 to 15 characters.")
    .required("Last name is required"),
  email: yup
    .string()
    .email("Enter a valid email address.")
    .required("Email address is required."),
  username: yup
    .string()
    .min(5, "Must be between 5 to 15 characters.")
    .max(15, "Must be between 5 to 15 characters.")
    .required("Username is required."),
  password: yup
    .string()
    .min(8, "Must be between 8 to 15 characters.")
    .max(20, "Must be between 8 to 15 characters.")
    .required("Password is required."),
  cpassword: yup
    .string()
    .min(8, "Must be between 8 to 15 characters.")
    .max(20, "Must be between 8 to 15 characters.")
    .required("Confirm password is required.")
    .test(
      "password-match",
      "Password and confirm password don't match",
      function (confirmPassword, context) {
        if (!confirmPassword) return false;

        return confirmPassword === context.parent.password;
      }
    ),
});

export const signin = yup.object({
  username: yup
    .string()
    .min(5, "Must be at least 5 characters/ valid email address.")
    .required("Username is required."),
  password: yup
    .string()
    .min(8, "Must be between 8 to 15 characters.")
    .max(20, "Must be between 8 to 15 characters.")
    .required("Password is required."),
});
