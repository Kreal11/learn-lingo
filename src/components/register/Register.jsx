import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
// import toast from "react-hot-toast";
import { Formik } from "formik";

import { auth } from "../../firebaseConfig";
import { RegisterSchema } from "../../schemas/auth";
import {
  Description,
  ErrorMessageWrapper,
  InputField,
  StyledForm,
  SubmitButton,
  Title,
} from "../../styles/Auth.styled";

export const Register = ({ closeModal }) => {
  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);

  const handleSubmit = (values) => {
    const { email, password } = values;

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        closeModal();
      })
      .catch(() => {
        console.error("Apologies, an error occurred. Please try again later!");
      });
  };

  return (
    <div>
      <Title>Registration</Title>
      <Description>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </Description>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={RegisterSchema}
      >
        {({ handleChange, handleBlur }) => (
          <StyledForm>
            <InputField
              name="name"
              placeholder={name ? "" : "Name"}
              onFocus={() => setName(true)}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessageWrapper name="name" component="div" />
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
            <SubmitButton type="submit">Sign up</SubmitButton>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
};
