"use client";

import { useState } from "react";

import AuthForm from "@/components/from/AuthForm";

export interface ISubmitForm {
  preventDefault: () => void;
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (event: ISubmitForm) => {
    event.preventDefault();
    console.log({ email, password });
  };

  return (
    <AuthForm
      submitForm={submitForm}
      title="LogIn"
      setEmail={setEmail}
      setPassword={setPassword}
    />
  );
};

export default Login;
