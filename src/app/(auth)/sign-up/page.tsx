"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const signUpClick = () => {
    if (!email || !username || !password || !confirmPassword) {
      alert("Semua field harus diisi!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Password dan Confirm Password harus sama!");
      return;
    }

    alert("Berhasil sign up");
    router.push("/sign-in");
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="w-[80%] h-fit flex flex-col justify-center items-center p-8 bg-white rounded-xl shadow-md">
        <div className="w-[200px] h-[200px] bg-black rounded-full mb-5" />
        <h2 className="py-4 text-xl font-bold">Daftar</h2>
        <div className="flex flex-col w-full gap-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-200 rounded-2xl p-4"
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-gray-200 rounded-2xl p-4"
          />
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-200 rounded-2xl p-4 pr-12"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-gray-200 rounded-2xl p-4 pr-12"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button
            onClick={signUpClick}
            className="py-3 bg-blue-400 text-center rounded-2xl mt-5 text-white font-bold text-base"
          >
            Sign up
          </button>
        </div>
        <div className="flex justify-center items-center mt-4">
          <p>Sudah Punya Akun? </p>
          <Link href="/sign-in" className="text-blue-500 ml-2">
            Sign-in
          </Link>
        </div>
      </div>
    </div>
  );
}
