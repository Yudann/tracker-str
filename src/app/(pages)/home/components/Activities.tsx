export default function Activities() {
  return (
    <div className="w-full mt-10 flex flex-col  rounded-lg ">
      <h2 className="text-xl font-bold text-gray-800 mb-6 px-5">
        Explore Menus
      </h2>
      <div className="grid grid-cols-1 gap-6 w-full px-5">
        {/* Button Menu */}
        <button className="w-full text-3xl font-bold text-black py-8 rounded-lg shadow hover:bg-purple-400 transition duration-300">
          Terapi Kognitif
        </button>
        <button className="w-full text-3xl font-bold text-black py-8 rounded-lg shadow hover:bg-purple-400 transition duration-300">
          Terapi Motorik
        </button>
        <button className="w-full text-3xl font-bold text-black py-8 rounded-lg shadow hover:bg-purple-400 transition duration-300">
          Edukasi
        </button>
        <button className="w-full text-3xl font-bold text-black py-8 rounded-lg shadow hover:bg-purple-400 transition duration-300">
          Catatan
        </button>
        <button className="w-full text-3xl font-bold text-black py-8 rounded-lg shadow hover:bg-purple-400 transition duration-300">
          Alarm
        </button>
      </div>
    </div>
  );
}
