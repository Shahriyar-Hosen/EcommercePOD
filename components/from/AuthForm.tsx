"use client";

import { Dispatch, SetStateAction } from "react";
import Box from "../box";
import Button from "../button";
import Input from "../input";
import Title from "../title";
import { SocialLogin } from "../common";

export interface IAuthForm {
  title: string;
  submitForm: (event: { preventDefault: () => void }) => void;
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
}

const AuthForm = ({ submitForm, title, setEmail, setPassword }: IAuthForm) => (
  <Box>
    <Title>{title}</Title>
    <form onSubmit={submitForm} className="flex flex-col justify-center">
      <Input label="E-mail" onChange={(e) => setEmail(e.target.value)} />
      <Input
        label="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button className="mt-5" variant="primary" type="submit">
        {title}
      </Button>
    </form>

    <SocialLogin />
  </Box>
);

export default AuthForm;
