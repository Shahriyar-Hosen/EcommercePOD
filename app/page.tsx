/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { clientConfig } from "@/firebase/client-config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { useAuth } from "../auth/hooks";
import { useFirebaseAuth } from "../firebase/firebase-auth";
import styles from "./page.module.css";

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
      console.log("login", tenant);
    } catch (error) {
      console.error("Error logging in:", error);
      // Handle login error
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
    <div className={styles.container}>
      <form onSubmit={submitForm}>
        <Input
          label="E-mail"
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          label="Password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button type="submit">Login</Button>
      </form>
      <hr className="my-5" />
      <Button onClick={() => handleSignUp(email, password)}>Sign Up</Button>
      <Button onClick={handleGoogleLogin}>Log in with Google</Button>
    </div>
  );
};

export default Home;
