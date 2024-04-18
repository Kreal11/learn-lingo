import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(8, "At least 8 characters!").required("Required"),
});

export const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "At least 2 characters!")
    .max(20, "Less than 20 characters!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(8, "Too Short!").required("Required"),
});
