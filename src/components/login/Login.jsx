import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
// import toast from "react-hot-toast";
import { Formik } from "formik";

import { LoginSchema } from "../../schemas/auth";
import { auth } from "../../firebaseConfig";
import {
  Description,
  ErrorMessageWrapper,
  InputField,
  StyledForm,
  SubmitButton,
  Title,
} from "../../styles/Auth.styled";
import { toast } from "react-toastify";

export const Login = ({ closeModal }) => {
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);

  const handleSubmit = (values) => {
    const { email, password } = values;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        closeModal();
      })
      .catch(() => {
        toast.error("Email or password is wrong!");
      });
  };

  return (
    <div>
      <Title>Log In</Title>
      <Description>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </Description>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={LoginSchema}
      >
        {({ handleChange, handleBlur }) => (
          <StyledForm>
            <InputField
              type="email"
              name="email"
              placeholder={email ? "" : "Email"}
              onFocus={() => setEmail(true)}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessageWrapper name="email" component="div" />
            <InputField
              type="password"
              name="password"
              placeholder={password ? "" : "Password"}
              onFocus={() => setPassword(true)}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessageWrapper name="password" component="div" />
            <SubmitButton type="submit">Log in</SubmitButton>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
};
