import Image from "next/image";
import Link from "next/link";
import kognitifImage from "../../../../public/assets/header/kognitif.png";
import membaca from "../../../../public/assets/membaca.png";
import penalaran from "../../../../public/assets/penalaran.png";
import pemahaman from "../../../../public/assets/pemahaman.png";

export default function KognitifPage() {
  return (
    <div className="w-full h-fit flex flex-col items-center my-8">
      {/* Header Image */}
      <Image
        height={300}
        width={300}
        className="w-full max-w-md px-5"
        src={kognitifImage}
        alt="Kognitif Header"
      />

      {/* Menu Grid */}
      <div className="grid grid-cols-1 gap-6 w-full max-w-lg px-5 mt-8">
        {/* Membaca */}
        <Link
          href="/membaca"
          className="w-full flex items-center justify-between gap-4 text-center text-2xl font-bold text-black px-4 rounded-lg shadow hover:bg-purple-400 transition duration-300"
        >
          <Image src={membaca} alt="Membaca" height={150} width={150} />
          <span>Membaca</span>
        </Link>

        {/* Pemahaman */}
        <Link
          href="/pemahaman"
          className="w-full flex items-center justify-between gap-4 text-center text-2xl font-bold text-black px-4 rounded-lg shadow hover:bg-purple-400 transition duration-300"
        >
          <span>Pemahaman</span>
          <Image src={penalaran} alt="Penalaran" height={150} width={150} />
        </Link>

        {/* Penalaran */}
        <Link
          href="/penalaran"
          className="w-full flex items-center justify-between gap-4 text-center text-2xl font-bold text-black px-4 rounded-lg shadow hover:bg-purple-400 transition duration-300"
        >
          <Image src={pemahaman} alt="Pemahaman" height={150} width={150} />
          <span>Penalaran</span>
        </Link>
      </div>
    </div>
  );
}