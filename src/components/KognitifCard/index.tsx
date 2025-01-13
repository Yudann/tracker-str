import { ReactNode, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type KognitifCardProps = {
  renderContent: (
    currentValue: string,
    setCurrentValue: (value: string) => void
  ) => ReactNode;
  initialValue: string;
  minValue: string;
  maxValue: string;
};

export default function KognitifCard({
  renderContent,
  initialValue,
  minValue,
  maxValue,
}: KognitifCardProps) {
  const [currentValue, setCurrentValue] = useState<string>(initialValue);

  const handlePrevious = () => {
    setCurrentValue((prev) => {
      if (prev === minValue) return prev; // Tidak melampaui batas bawah
      return String.fromCharCode(prev.charCodeAt(0) - 1);
    });
  };

  const handleNext = () => {
    setCurrentValue((prev) => {
      if (prev === maxValue) return prev; // Tidak melampaui batas atas
      return String.fromCharCode(prev.charCodeAt(0) + 1);
    });
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* Konten Dinamis */}
      <div className="w-full h-96 rounded-lg bg-white/60 border-[8px] border-purple-600 flex items-center justify-center">
        {renderContent(currentValue, setCurrentValue)}
      </div>

      {/* Tombol Navigasi */}
      <div className="w-full flex items-center justify-center gap-16 p-4">
        <button
          className="p-4 bg-purple-600 rounded-lg text-white hover:bg-purple-700"
          onClick={handlePrevious}
          disabled={currentValue === minValue}
        >
          <FaArrowLeft />
        </button>
        <button
          className="p-4 bg-purple-600 rounded-lg text-white hover:bg-purple-700"
          onClick={handleNext}
          disabled={currentValue === maxValue}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
