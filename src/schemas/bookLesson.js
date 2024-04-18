import * as Yup from "yup";

export const BookingLessonSchema = Yup.object().shape({
  picked: Yup.string().required(
    "Kindly choose a purpose for learning English."
  ),
  fullName: Yup.string()
    .min(2, "At least 2 characters!")
    .max(20, "Less than 20 characters!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.number()
    .min(8, "At least 8 characters!")
    .required("Required"),
});
