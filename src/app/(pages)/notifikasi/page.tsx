"use client";

import Link from "next/link";
import { FaArrowLeft, FaRunning, FaBook, FaHeartbeat } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function NotificationPage() {
  const router = useRouter();

  const goBack = () => {
    router.push("/home");
  };

  // List pemberitahuan
  const notifications = [
    {
      id: 1,
      title: "Yuk, lakukan peregangan badan sekarang!",
      icon: <FaRunning className="text-blue-500" />,
      link: "/motorik/gerakan-badan", // Halaman tujuan
    },
    {
      id: 2,
      title: "Lakukan peregangan kaki agar tubuh tetap bugar!",
      icon: <FaRunning className="text-green-500" />,
      link: "/motorik/gerakan-kaki", // Halaman tujuan
    },
    {
      id: 3,
      title: "Ayo, baca artikel menarik untuk meningkatkan kesehatanmu!",
      icon: <FaBook className="text-purple-500" />,
      link: "/edukasi", // Halaman tujuan
    },
    {
      id: 4,
      title: "Cara Mengelola Spastisitas Setelah Stroke",
      icon: <FaHeartbeat className="text-red-500" />,
      link: "https://www.healthline.com/health/stroke/managing-spasticity-after-stroke", // Halaman tujuan
    },
  ];

  return (
    <div className="w-full h-screen flex flex-col items-center px-5 my-16">
      {/* Header */}
      <button
        onClick={goBack}
        className="w-full my-5 flex items-center justify-start gap-4 text-center text-xl font-bold text-black"
      >
        <FaArrowLeft />
        <span>Notifikasi</span>
      </button>

      {/* List Notifikasi */}
      <div className="w-full flex flex-col gap-4">
        {notifications.map((notif) => (
          <Link
            href={notif.link}
            key={notif.id}
            className="w-full flex items-center p-4 border rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            {/* Icon */}
            <div className="mr-4 text-2xl">{notif.icon}</div>
            {/* Title */}
            <div className="text-lg font-medium">{notif.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
