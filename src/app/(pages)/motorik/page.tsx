import Image from "next/image";
import Link from "next/link";
import kognitifImage from "../../../../public/assets/header/motorik.png";
import gerakankaki from "../../../../public/assets/kaki.png";
import gerakanTangan from "../../../../public/assets/tangan.png";
import gerakanBadan from "../../../../public/assets/badan.png";
import berhitung from "../../../../public/assets/berhitung.png";
import berbicara from "../../../../public/assets/berbicara.png";
import mengenalWarna from "../../../../public/assets/mengenal-warna.png";

export default function MotorikPage() {
  return (
    <div className="w-full h-fit flex flex-col items-center my-16">
      {/* Header Image */}
      <Image
        height={300}
        width={300}
        className="w-full max-w-md"
        src={kognitifImage}
        alt="Kognitif Header"
      />

      {/* Menu Grid */}
      <div className="grid grid-cols-1 gap-6 w-full max-w-lg px-5 mt-8">
        <Link
          href="/motorik/gerakan-kaki"
          className="w-full flex items-center justify-between gap-4 text-center text-2xl font-bold text-black px-4 rounded-lg shadow hover:bg-purple-400 transition duration-300"
        >
          <Image
            src={gerakankaki}
            alt="gerakan kaki"
            height={150}
            width={150}
          />
          <span>Gerakan Kaki</span>
        </Link>

        <Link
          href="/motorik/gerakan-tangan"
          className="w-full flex items-center justify-between gap-4 text-center text-2xl font-bold text-black px-4 rounded-lg shadow hover:bg-purple-400 transition duration-300"
        >
          <span>Gerakan Tangan</span>
          <Image
            src={gerakanTangan}
            alt="gerakan tangan"
            height={150}
            width={150}
          />
        </Link>

        <Link
          href="/motorik/gerakan-badan"
          className="w-full flex items-center justify-between gap-4 text-center text-2xl font-bold text-black px-4 rounded-lg shadow hover:bg-purple-400 transition duration-300"
        >
          <Image
            src={gerakanBadan}
            alt="gerakan badan"
            height={150}
            width={150}
          />
          <span>Gerakan Badan</span>
        </Link>

        <Link
          href="/motorik/berhitung"
          className="w-full flex items-center justify-between gap-4 text-center text-2xl font-bold text-black px-4 rounded-lg shadow hover:bg-purple-400 transition duration-300"
        >
          <span>Berhitung</span>
          <Image src={berhitung} alt="Berhitung" height={150} width={150} />
        </Link>

        <Link
          href="/motorik/berbicara"
          className="w-full flex items-center justify-between gap-4 text-center text-2xl font-bold text-black px-4 rounded-lg shadow hover:bg-purple-400 transition duration-300"
        >
          <Image src={berbicara} alt="Berbicara" height={150} width={150} />
          <span>Berbicara</span>
        </Link>
        <Link
          href="/motorik/mengenal-warna"
          className="w-full flex items-center justify-between gap-4 text-center text-2xl font-bold text-black px-4 rounded-lg shadow hover:bg-purple-400 transition duration-300"
        >
          <span>Mengenal Warna</span>
          <Image
            src={mengenalWarna}
            alt="mengenal warna"
            height={150}
            width={150}
          />
        </Link>
      </div>
    </div>
  );
}
