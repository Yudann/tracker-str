"use client";

import KognitifCard from "@/components/KognitifCard";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

export default function PenalaranPage() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const questions = [
    {
      question:
        "Di sebuah taman terdapat 15 pohon mangga dan 10 pohon jambu. Jika 5 pohon mangga ditebang, berapa jumlah total pohon yang tersisa di taman?",
      options: ["20", "15", "25", "10"],
      correctAnswer: "20",
    },
    {
      question:
        "Ani membaca buku sebanyak 120 halaman dalam 4 hari. Jika Ani membaca dengan kecepatan yang sama, berapa halaman yang dibaca Ani dalam 2 hari?",
      options: ["30", "60", "90", "120"],
      correctAnswer: "60",
    },
    {
      question:
        "Sebuah kereta memiliki 8 gerbong dengan kapasitas masing-masing 50 penumpang. Jika hanya 6 gerbong yang terisi penuh, berapa jumlah penumpang di kereta tersebut?",
      options: ["250", "300", "400", "450"],
      correctAnswer: "300",
    },
    {
      question:
        "Rina memiliki 6 bungkus cokelat. Setiap bungkus berisi 12 batang cokelat. Jika Rina memakan 15 batang cokelat, berapa cokelat yang tersisa?",
      options: ["57", "60", "63", "72"],
      correctAnswer: "57",
    },
    {
      question:
        "Di sebuah kelas terdapat 40 siswa. 25 siswa menyukai matematika, 18 siswa menyukai bahasa Inggris, dan 10 siswa menyukai keduanya. Berapa siswa yang tidak menyukai kedua mata pelajaran tersebut?",
      options: ["5", "7", "10", "15"],
      correctAnswer: "7",
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
