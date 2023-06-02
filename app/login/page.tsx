"use client";

import { useState } from "react";

import AuthForm from "@/components/from/AuthForm";

import { signInWithEmailAndPassword } from "firebase/auth";

import { useAuth } from "@/auth/hooks";
import { clientConfig } from "@/firebase/client-config";
import { useFirebaseAuth } from "@/firebase/firebase-auth";

export interface ISubmitForm {
  preventDefault: () => void;
}

const Login = () => {
  const { tenant } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = async (event: ISubmitForm) => {
    event.preventDefault();
    console.log({ email, password });

    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { getFirebaseAuth } = useFirebaseAuth(clientConfig);
      const auth = await getFirebaseAuth();
      await signInWithEmailAndPassword(auth, email, password);

      // Handle successful login
      console.log("Sign In With Email And Password", tenant);
    } catch (error) {
      // Handle login error
      console.error("Sign In With Email And Password Error❌❌❌:", error);
    }
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
