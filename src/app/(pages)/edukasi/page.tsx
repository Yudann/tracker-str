import Image from "next/image";
import edukasiImage from "../../../../public/assets/header/edukasi.png";

export default function EdukasiPage() {
  return (
    <div className="w-full h-fit flex flex-col items-center my-16">
      {/* Header Image */}
      <Image
        height={300}
        width={300}
        className="w-full max-w-md"
        src={edukasiImage}
        alt="Kognitif Header"
      />
    </div>
  );
}
