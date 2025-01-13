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
    {
      question: "15 - 7 = ?",
      options: ["7", "8", "9", "10"],
      correctAnswer: "8",
    },
    {
      question: "4 × 3 = ?",
      options: ["10", "11", "12", "13"],
      correctAnswer: "12",
    },
    {
      question: "25 ÷ 5 = ?",
      options: ["4", "5", "6", "7"],
      correctAnswer: "5",
    },
    {
      question: "8 + 7 = ?",
      options: ["14", "15", "16", "17"],
      correctAnswer: "15",
    },
    {
      question: "30 - 15 = ?",
      options: ["10", "12", "13", "15"],
      correctAnswer: "15",
    },
    {
      question: "3 × 5 = ?",
      options: ["12", "13", "14", "15"],
      correctAnswer: "15",
    },

    // Soal sulit (16-25)
    {
      question: "45 ÷ 9 + 3 × 2 = ?",
      options: ["9", "11", "13", "15"],
      correctAnswer: "13",
    },
    {
      question: "12 + 18 ÷ 6 × 4 = ?",
      options: ["16", "18", "20", "24"],
      correctAnswer: "24",
    },
    {
      question: "50 - (3 × 5) + 12 ÷ 4 = ?",
      options: ["34", "35", "36", "37"],
      correctAnswer: "34",
    },
    {
      question: "(8 × 7) ÷ 4 + 6 = ?",
      options: ["18", "20", "22", "24"],
      correctAnswer: "20",
    },
    {
      question: "75 ÷ 5 - 2 × 6 = ?",
      options: ["7", "9", "11", "13"],
      correctAnswer: "9",
    },
    {
      question: "(14 × 3) ÷ (7 - 3) + 5 = ?",
      options: ["10", "11", "12", "13"],
      correctAnswer: "12",
    },
    {
      question: "100 ÷ (4 × 5) + 16 = ?",
      options: ["20", "21", "22", "23"],
      correctAnswer: "21",
    },
    {
      question: "45 - 25 ÷ (5 + 5) × 4 = ?",
      options: ["15", "25", "35", "40"],
      correctAnswer: "35",
    },
    {
      question: "(12 × 5) ÷ (6 ÷ 2) + 7 = ?",
      options: ["15", "17", "19", "21"],
      correctAnswer: "19",
    },
    {
      question: "(9 × 6) ÷ (12 ÷ 3) - 5 = ?",
      options: ["12", "14", "16", "18"],
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
