import Link from "next/link";

export default function RecommendationActivity() {
  return (
    <div className="w-full mt-10 flex flex-col">
      <h1 className="text-xl font-bold mb-4 px-5">
        Rekomendasi Kegiatan Hari Ini
      </h1>
      {/* Slider */}
      <div className="flex gap-6 overflow-x-auto py-5 no-scrollbar px-5">
        {/* Card 1 */}
        <Link href="/kognitif/membaca">
          <div
            className="min-w-[300px] h-48 bg-cover bg-center backdrop-blur-md rounded-lg shadow-lg flex items-end p-4 text-white hover:scale-[1.02] transition-all duration-300"
            style={{
              backgroundImage: "url('/assets/membaca.png')",
            }}
          >
            <h2 className="text-lg font-semibold">Membaca</h2>
          </div>
        </Link>
        {/* Card 2 */}
        <Link href="/kognitif/berhitung">
          <div
            className="min-w-[300px] h-48 bg-cover bg-center backdrop-blur-md rounded-lg shadow-lg flex items-end p-4 text-white hover:scale-[1.01] transition-all duration-300"
            style={{
              backgroundImage: "url('/assets/berhitung.png')",
            }}
          >
            <h2 className="text-lg font-semibold">Berhitung</h2>
          </div>
        </Link>
        {/* Card 3 */}
        <Link href="/kognitif/penalaran">
          <div
            className="min-w-[300px] h-48 bg-cover bg-center backdrop-blur-md rounded-lg shadow-lg flex items-end p-4 text-white hover:scale-[1.01] transition-all duration-300"
            style={{
              backgroundImage: "url('/assets/penalaran.png')",
            }}
          >
            <h2 className="text-lg font-semibold">Penalaran</h2>
          </div>
        </Link>
        <Link href="motorik/gerakan-badan">
          <div
            className="min-w-[300px] h-48 bg-cover bg-center backdrop-blur-md rounded-lg shadow-lg flex items-end p-4 text-white hover:scale-[1.01] transition-all duration-300"
            style={{
              backgroundImage: "url('/assets/badan.png')",
            }}
          >
            <h2 className="text-lg font-semibold">Peregangan Badan</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}
