"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const goBack = () => {
    router.back(); // Kembali ke halaman sebelumnya
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="text-center p-6">
        <h1 className="text-[3rem] font-bold">404</h1>
        <h1 className="text-3xl font-bold text-gray-800">Page Not Found</h1>
        <p className="text-lg text-gray-600 mt-4">
          Sorry, the page you are looking for doesn`t exist.
        </p>
        <button
          onClick={goBack}
          className="mt-6 py-2 px-6 bg-purple-800 text-white rounded-xl hover:bg-purple-600"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
