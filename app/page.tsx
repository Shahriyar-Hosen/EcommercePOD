/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Button from "@/components/button";
import { handleGoogleLogin } from "@/components/common";

const Home = () => {
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
          <Button onClick={handleGoogleLogin} variant="secondary">
            Google SignIn
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Home;
