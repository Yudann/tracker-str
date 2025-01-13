"use client";

import KognitifCard from "@/components/KognitifCard";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

export default function PemahamanPage() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  // Soal dengan jawaban
  const questions = [
    {
      question:
        "Nina mempunyai 5 buah apel. Lalu Cece meminta 2 apel. Berapa jumlah apel yang Nina punya?",
      options: ["3", "5", "2", "7"],
      correctAnswer: "3",
    },
    {
      question:
        "Hedy membeli 10 kue. Saat perjalanan, Hedy tersandung dan 4 kue terjatuh. Berapa kue yang ada di tangan Hedy?",
      options: ["10", "4", "6", "5"],
      correctAnswer: "6",
    },
    {
      question:
        "Uwi menjual 10 kantong pisang. Lalu beberapa menit kemudian, Uwi diberi 20 kantong pisang lagi oleh mamahnya. Berapa kantong pisang yang Uwi punya?",
      options: ["10", "30", "20", "25"],
      correctAnswer: "30",
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  const handleAnswerSelection = (questionIndex: number, answer: string) => {
    setSelectedAnswers((prev) => {
      const updatedAnswers = [...prev];
      updatedAnswers[questionIndex] = answer; // Simpan jawaban berdasarkan indeks soal
      return updatedAnswers;
    });
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

      {/* Kognitif Card dengan Soal dan Pilihan Jawaban */}
      <KognitifCard
        initialValue="1"
        minValue="1"
        maxValue={questions.length.toString()}
        renderContent={(currentIndex) => {
          const questionIndex = parseInt(currentIndex, 10) - 1;
          const currentQuestion = questions[questionIndex];
          const selectedAnswer = selectedAnswers[questionIndex];

          return (
            <div className="text-center">
              <h1 className="text-xl font-bold">Soal {currentIndex}</h1>
              <p className="text-lg mt-4">{currentQuestion.question}</p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    className={`p-3 border rounded-lg ${
                      selectedAnswer
                        ? option === currentQuestion.correctAnswer
                          ? "bg-green-500 text-white"
                          : option === selectedAnswer
                          ? "bg-red-500 text-white"
                          : "bg-gray-200"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                    disabled={!!selectedAnswer} // Tombol tidak bisa diklik ulang setelah jawaban dipilih
                    onClick={() => handleAnswerSelection(questionIndex, option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          );
        }}
      />
    </div>
  );
}
