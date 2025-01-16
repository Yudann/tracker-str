"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

// List of YouTube video URLs
const videoData = [
  {
    url: "https://www.youtube.com/watch?v=ovbDfxR0CCQ",
    title: "TIPS & TRIK TERAPI WICARA: ORAL MOTOR EXERCISE",
  },
];

export default function BerbicaraPage() {
  const router = useRouter();

  const getEmbedUrl = (url: string) => {
    const videoId = url.split("v=")[1].split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const goBack = () => {
    router.back();
  };

  return (
    <div className="w-full h-fit flex flex-col items-center my-16 px-5">
      {/* Header */}
      <button
        onClick={goBack}
        className="w-full my-5 flex items-center justify-start gap-4 text-center text-xl font-bold text-black"
      >
        <FaArrowLeft />
        <span>Terapi Kognitif</span>
      </button>

      {/* Video Cards */}
      <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoData.map((video, index) => {
          const embedUrl = getEmbedUrl(video.url);

          return (
            <div
              key={index}
              className="w-full bg-purple-400 rounded-lg shadow-lg overflow-hidden"
            >
              <div>
                <iframe
                  src={embedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full aspect-[16/9]"
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Latihan Berbicara Yang efektif.
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <button
                    onClick={() => window.open(video.url, "_blank")}
                    className="py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300"
                  >
                    Tonton di YouTube
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
