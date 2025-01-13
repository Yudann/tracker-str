"use client";

import KognitifCard from "@/components/KognitifCard";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export default function MembacaPage() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div className="w-full h-[90%] flex flex-col items-center mt-16 px-5">
      {/* Header */}
      <button
        onClick={goBack}
        className="w-full my-5 flex items-center justify-start gap-4 text-center text-xl font-bold text-black"
      >
        <FaArrowLeft />
        <span>Terapi Kognitif</span>
      </button>

      {/* Kognitif Card dengan Huruf sebagai Konten */}
      <KognitifCard
        initialValue="A"
        minValue="A"
        maxValue="Z"
        renderContent={(currentValue) => (
          <h1 className="text-[10rem] font-bold">{currentValue}</h1>
        )}
      />
    </div>
  );
}
