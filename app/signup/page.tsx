"use client";

import { useState } from "react";

import AuthForm from "@/components/from/AuthForm";
import { ISubmitForm } from "../login/page";

import { createUserWithEmailAndPassword } from "firebase/auth";

import { clientConfig } from "@/firebase/client-config";
import { useFirebaseAuth } from "@/firebase/firebase-auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = async (event: ISubmitForm) => {
    event.preventDefault();
    console.log({ email, password });

    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { getFirebaseAuth } = useFirebaseAuth(clientConfig);
      const auth = await getFirebaseAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      // Handle successful sign-up
    } catch (error) {
      console.error("Error signing up:", error);
      // Handle sign-up error
    }
  };

  return (
    <AuthForm
      submitForm={submitForm}
      title="Sign Up"
      setEmail={setEmail}
      setPassword={setPassword}
    />
  );
};

export default SignUp;
