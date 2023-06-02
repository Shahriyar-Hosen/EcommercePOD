"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(email, password);
  };

  return (
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
      <Button variant="primary" type="submit">
        Login
      </Button>
    </form>
  );
}
