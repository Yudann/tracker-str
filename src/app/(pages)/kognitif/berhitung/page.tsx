"use client";

import KognitifCard from "@/components/KognitifCard";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

export default function BerhitungPage() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const questions = [
    // Soal mudah (1-15)
    {
      question: "5 + 3 = ?",
      options: ["6", "7", "8", "9"],
      correctAnswer: "8",
    },
    {
      question: "10 - 4 = ?",
      options: ["4", "5", "6", "7"],
      correctAnswer: "6",
    },
    {
      question: "3 × 4 = ?",
      options: ["10", "11", "12", "13"],
      correctAnswer: "12",
    },
    {
      question: "16 ÷ 2 = ?",
      options: ["6", "7", "8", "9"],
      correctAnswer: "8",
    },
    {
      question: "7 + 6 = ?",
      options: ["12", "13", "14", "15"],
      correctAnswer: "13",
    },
    {
      question: "18 - 9 = ?",
      options: ["7", "8", "9", "10"],
      correctAnswer: "9",
    },
    {
      question: "2 × 6 = ?",
      options: ["10", "11", "12", "13"],
      correctAnswer: "12",
    },
    {
      question: "20 ÷ 4 = ?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "5",
    },
    {
      question: "9 + 5 = ?",
      options: ["13", "14", "15", "16"],
      correctAnswer: "14",
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
