import Box from "@/components/box";
import Title from "@/components/title";
import LoginForm from "./LoginForm";

export default async function Home() {
  return (
    <main className="w-1/3 mx-auto">
      <Box>
        <Title>Login</Title>
        <LoginForm />
      </Box>
    </main>
  )
}
