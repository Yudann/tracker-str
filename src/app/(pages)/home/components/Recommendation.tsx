export default function RecommendationActivity() {
  return (
    <div className="w-full mt-10 flex flex-col">
      <h1 className="text-xl font-bold mb-4 px-5">
        Rekomendasi Kegiatan Hari Ini
      </h1>
      {/* Slider */}
      <div className="flex gap-6 overflow-x-auto py-5 no-scrollbar px-5">
        {/* Card 1 */}
        <div
          className="min-w-[300px] h-48 bg-cover bg-center backdrop-blur-md rounded-lg shadow-lg flex items-end p-4 text-white hover:scale-[1.02] transition-all duration-300"
          style={{
            backgroundImage: "url('/membaca.png')",
          }}
        >
          <h2 className="text-lg font-semibold">Membaca</h2>
        </div>
        {/* Card 2 */}
        <div
          className="min-w-[300px] h-48 bg-cover bg-center backdrop-blur-md rounded-lg shadow-lg flex items-end p-4 text-white hover:scale-[1.01] transition-all duration-300"
          style={{
            backgroundImage: "url('/mendengar.png')",
          }}
        >
          <h2 className="text-lg font-semibold">Mendengar</h2>
        </div>
        {/* Card 3 */}
        <div
          className="min-w-[300px] h-48 bg-cover bg-center backdrop-blur-md rounded-lg shadow-lg flex items-end p-4 text-white hover:scale-[1.01] transition-all duration-300"
          style={{
            backgroundImage: "url('/menalar.png')",
          }}
        >
          <h2 className="text-lg font-semibold">Menalar</h2>
        </div>
        <div
          className="min-w-[300px] h-48 bg-cover bg-center backdrop-blur-md rounded-lg shadow-lg flex items-end p-4 text-white hover:scale-[1.01] transition-all duration-300"
          style={{
            backgroundImage: "url('/menulis.png')",
          }}
        >
          <h2 className="text-lg font-semibold">Menulis</h2>
        </div>
      </div>
    </div>
  );
}
