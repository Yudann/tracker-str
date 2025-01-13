"use client";

import KognitifCard from "@/components/KognitifCard";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

export default function MengenalWarnaPage() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const questions = [
    {
      question: "Pilih warna Merah:",
      options: ["🟢 Hijau", "🔵 Biru", "🔴 Merah", "🟡 Kuning"],
      correctAnswer: "🔴 Merah",
    },
    {
      question: "Pilih warna Biru:",
      options: ["🟢 Hijau", "🔵 Biru", "🟡 Kuning", "🔴 Merah"],
      correctAnswer: "🔵 Biru",
    },
    {
      question: "Pilih warna Hijau:",
      options: ["🔵 Biru", "🟡 Kuning", "🔴 Merah", "🟢 Hijau"],
      correctAnswer: "🟢 Hijau",
    },
    {
      question: "Langit pada siang hari berwarna apa?",
      options: ["🔵 Biru", "🟡 Kuning", "🟢 Hijau", "🔴 Merah"],
      correctAnswer: "🔵 Biru",
    },
    {
      question: "Pilih warna Matahari:",
      options: ["🟡 Kuning", "🟢 Hijau", "🔴 Merah", "🔵 Biru"],
      correctAnswer: "🟡 Kuning",
    },
    {
      question: "Apel biasanya berwarna apa?",
      options: ["🔴 Merah", "🟢 Hijau", "🔵 Biru", "🟡 Kuning"],
      correctAnswer: "🔴 Merah",
    },
    {
      question: "Daun pohon biasanya berwarna apa?",
      options: ["🟢 Hijau", "🔴 Merah", "🟡 Kuning", "🔵 Biru"],
      correctAnswer: "🟢 Hijau",
    },
    {
      question: "Pelangi memiliki warna apa saja?",
      options: [
        "🔴 Merah, 🟡 Kuning, 🟢 Hijau",
        "🔵 Biru, 🟡 Kuning, 🔴 Merah",
        "Semua di atas",
        "Tidak ada",
      ],
      correctAnswer: "Semua di atas",
    },
    {
      question: "Pilih warna api:",
      options: ["🔴 Merah", "🟡 Kuning", "🟠 Oranye", "Semua di atas"],
      correctAnswer: "Semua di atas",
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(
    Array(questions.length).fill("")
  );

  const handleAnswerSelection = (questionIndex: number, answer: string) => {
    setSelectedAnswers((prev) => {
      const updatedAnswers = [...prev];
      updatedAnswers[questionIndex] = answer;
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

      <KognitifCard
        initialValue="1"
        minValue="1"
        maxValue={questions.length.toString()}
        renderContent={(currentIndex) => {
          const questionIndex = parseInt(currentIndex, 10) - 1;

          if (
            isNaN(questionIndex) ||
            questionIndex < 0 ||
            questionIndex >= questions.length
          ) {
            return <p className="text-red-500">Soal tidak ditemukan.</p>;
          }

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
                    disabled={!!selectedAnswer} // Disable tombol jika jawaban sudah dipilih
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
