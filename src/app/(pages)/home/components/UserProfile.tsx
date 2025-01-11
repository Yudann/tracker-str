"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaBell, FaUserCircle } from "react-icons/fa";
import Cookies from "js-cookie";

export default function UserProfile() {
  const [username, setUsername] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Ambil username dari cookies saat komponen pertama kali dimuat
    const savedUsername = Cookies.get("username");

    if (savedUsername) {
      setUsername(savedUsername);
    } else {
      // Jika tidak ada username, arahkan ke halaman login
      router.push("/sign-in");
    }
  }, [router]);

  if (username === null) {
    // Menampilkan loading saat username belum tersedia
    return (
      <div className="w-full px-5">
        <div className="w-full mt-20 py-6 px-5 flex flex-col items-center bg-purple-300/70 rounded-lg shadow-md">
          {/* User Profile Section */}
          <h1 className="p-3">Loading... </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-5">
      <div className="w-full mt-20 py-6 px-5 flex flex-col items-center bg-purple-300/70 rounded-lg shadow-md">
        {/* User Profile Section */}
        <div className="flex items-center justify-between w-full">
          {/* Avatar dan Info User */}
          <div className="flex items-center gap-4">
            <FaUserCircle size={40} className="text-black" />
            <div>
              <h1 className="text-base font-bold text-gray-800">
                Good Morning, {username}!
              </h1>
              <p className="text-sm text-gray-600">How are you today?</p>
            </div>
          </div>
          <FaBell size={25} />
        </div>
      </div>
    </div>
  );
}
