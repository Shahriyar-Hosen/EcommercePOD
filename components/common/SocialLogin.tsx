"use client";

import Button from "../button";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { clientConfig } from "@/firebase/client-config";
import { useFirebaseAuth } from "@/firebase/firebase-auth";

export const handleGoogleLogin = async () => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { getFirebaseAuth } = useFirebaseAuth(clientConfig);
    const auth = await getFirebaseAuth();
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    return true;
    // Handle successful Google login
  } catch (error) {
    console.error("Error logging in with Google:", error);
    // Handle Google login error
    return false;
  }
};

export const SocialLogin = () => {
  //   const { tenant } = useAuth();

  //   const handleSubmit = async () => {
  //     const user = await handleGoogleLogin();
  //     if (user) {
  //       console.log(tenant);
  //     }
  //   };

  return (
    <div>
      <div className="my-5 text-center   w-full">
        ------------------ Or ------------------
      </div>
      <Button
        onClick={handleGoogleLogin}
        variant="secondary"
        className="w-full"
      >
        Google SignIn
      </Button>
    </div>
  );
};
