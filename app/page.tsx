/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";

import { useAuth } from "@/auth/hooks";
import Button from "@/components/button";
import { clientConfig } from "@/firebase/client-config";
import { useFirebaseAuth } from "@/firebase/firebase-auth";

const Home = () => {
  const { tenant } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (email: string, password: string) => {
    try {
      const { getFirebaseAuth } = useFirebaseAuth(clientConfig);
      const auth = await getFirebaseAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      // Handle successful sign-up
    } catch (error) {
      console.error("Error signing up:", error);
      // Handle sign-up error
    }
  };

  const handleLogin = async (email: string, password: string) => {
    try {
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

  const handleGoogleLogin = async () => {
    try {
      const { getFirebaseAuth } = useFirebaseAuth(clientConfig);
      const auth = await getFirebaseAuth();
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);

      // Handle successful Google login
    } catch (error) {
      console.error("Error logging in with Google:", error);
      // Handle Google login error
    }
  };

  const submitForm = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    handleLogin(email, password);
  };

  return (
    <section
      className="w-full h-screen container mx-auto flex
     justify-center items-center content-center"
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl pb-5 font-bold">
          Next Firebase Auth Edge
        </h1>
        <h1 className="text-center text-xl">
          Sign Up and Login In With Email And Password
          <br onClick={() => console.log("object")} />
          🟰🟰🟰🟰🟰
          <br />
        </h1>

        <hr className="w-full my-7" />
        <div className="flex justify-center items-center gap-5">
          <Button href="/signup" variant="default">
            Sign Up
          </Button>
          <Button href="/login" variant="primary">
            Login
          </Button>
          <Button variant="secondary">Google SignIn</Button>
        </div>
      </div>
    </section>
  );
};

export default Home;
