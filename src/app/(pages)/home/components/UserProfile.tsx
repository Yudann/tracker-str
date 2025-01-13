"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaBell, FaUserCircle } from "react-icons/fa";
import Cookies from "js-cookie";
import Link from "next/link";

export default function UserProfile() {
  const [username, setUsername] = useState<string | null>(null);
  const [greeting, setGreeting] = useState<string>("");
  // State untuk ucapan
  const router = useRouter();

  useEffect(() => {
    // Ambil username dari cookies saat komponen pertama kali dimuat
    const savedUsername = Cookies.get("username");

    if (savedUsername) {
      setUsername(savedUsername);
      setGreetingBasedOnTime(); // Panggil fungsi ucapan berdasarkan waktu
    } else {
      // Jika tidak ada username, arahkan ke halaman login
      router.push("/sign-in");
    }
  }, [router]);

  // Fungsi untuk menentukan ucapan berdasarkan waktu
  const setGreetingBasedOnTime = () => {
    const currentHour = new Date().getHours();
    let newGreeting = "";

    if (currentHour >= 5 && currentHour < 12) {
      newGreeting = "Good Morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      newGreeting = "Good Afternoon";
    } else if (currentHour >= 18 && currentHour < 22) {
      newGreeting = "Good Evening";
    } else {
      newGreeting = "Good Night";
    }

    setGreeting(newGreeting);
  };

  if (username === null) {
    return (
      <div className="w-full px-5">
        <div className="w-full mt-20 py-6 px-5 flex flex-col items-center bg-purple-300/70 rounded-lg shadow-md">
          <h1 className="p-3">Loading...</h1>
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
                {greeting}, {username}!
              </h1>
              <p className="text-sm text-gray-600">How are you today?</p>
            </div>
          </div>
          <Link href="/notifikasi">
            <FaBell size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
}
