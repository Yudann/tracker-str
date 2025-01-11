"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const signInClick = () => {
    if (!username || !password) {
      alert("Username dan Password tidak boleh kosong!");
      return;
    }

    // Simpan username di cookies
    Cookies.set("username", username, { expires: 7 }); // Username disimpan selama 7 hari
    alert("Berhasil login");
    router.push("/home"); // Navigasi ke halaman home
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="w-[80%] h-fit flex flex-col justify-center items-center p-8 bg-white rounded-xl shadow-md">
        <div className="w-[200px] h-[200px] bg-black rounded-full mb-5" />
        <h2 className="py-4 text-xl font-bold">Login</h2>
        <div className="flex flex-col w-full gap-5">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-gray-200 rounded-2xl p-4 mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-gray-200 rounded-2xl p-4 mb-4"
          />
          <button
            onClick={signInClick}
            className="py-3 bg-blue-400 text-center rounded-2xl mt-5 text-white font-bold text-base"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
