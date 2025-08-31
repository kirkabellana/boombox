"use client";
import { useRouter } from "next/navigation";
import LoginForm from "@/app/components/auth/LoginForm"; 

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    sessionStorage.setItem("isAuthenticated", "true"); 
    router.push("/");
  };

  return <LoginForm onLogin={handleLogin} />;
}
