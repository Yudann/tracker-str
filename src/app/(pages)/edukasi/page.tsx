"use client";

import Image from "next/image";
import edukasiImage from "../../../../public/assets/header/edukasi.png";

// Data berita
type Article = {
  url: string;
  title: string;
  thumbnail: string;
};

const beritaData: Article[] = [
  {
    url: "https://www.healthline.com/health/stroke/managing-spasticity-after-stroke",
    title: "Cara Mengelola Spastisitas Setelah Stroke",
    thumbnail: "https://picsum.photos/600/350?random=1",
  },
  {
    url: "https://www.mayoclinic.org/diseases-conditions/stroke/symptoms-causes/syc-20350113",
    title: "Apa Itu Stroke? Gejala dan Penyebabnya",
    thumbnail: "https://picsum.photos/600/350?random=2",
  },
  {
    url: "https://www.cdc.gov/stroke/prevention.htm",
    title: "Tips Pencegahan Stroke dari CDC",
    thumbnail: "https://picsum.photos/600/350?random=3",
  },
  {
    url: "https://www.stroke.org/en/about-stroke",
    title: "Panduan Dasar Tentang Stroke",
    thumbnail: "https://picsum.photos/600/350?random=4",
  },
  {
    url: "https://www.webmd.com/stroke/guide/stroke-rehabilitation",
    title: "Rehabilitasi Pasca Stroke",
    thumbnail: "https://picsum.photos/600/350?random=5",
  },
  {
    url: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/stroke",
    title: "Cara Mengelola Stroke dan Mencegah Komplikasi",
    thumbnail: "https://picsum.photos/600/350?random=6",
  },
  {
    url: "https://www.strokeassociation.org/en/stroke-treatments",
    title: "Perawatan dan Terapi untuk Stroke",
    thumbnail: "https://picsum.photos/600/350?random=7",
  },
  {
    url: "https://www.nhs.uk/conditions/stroke/recovery/",
    title: "Pemulihan dari Stroke: Apa yang Harus Dilakukan?",
    thumbnail: "https://picsum.photos/600/350?random=8",
  },
  {
    url: "https://www.bhf.org.uk/informationsupport/conditions/stroke",
    title: "Stroke dan Kesehatan Jantung",
    thumbnail: "https://picsum.photos/600/350?random=9",
  },
  {
    url: "https://www.verywellhealth.com/stroke-prevention-tips-5195787",
    title: "10 Tips untuk Mencegah Stroke",
    thumbnail: "https://picsum.photos/600/350?random=10",
  },
];

export default function EdukasiPage() {
  return (
    <div className="w-full h-fit flex flex-col items-center my-16 px-5">
      {/* Header Image */}
      <Image
        height={300}
        width={300}
        className="w-full max-w-md"
        src={edukasiImage}
        alt="Kognitif Header"
      />
      <h1 className="text-2xl font-bold text-center mt-8 text-gray-800">
        Berita Edukasi Seputar Stroke
      </h1>

      {/* Berita Cards */}
      <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {beritaData.map((berita, index) => (
          <div
            key={index}
            className="w-full bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={berita.thumbnail}
              alt={`Thumbnail of ${berita.title}`}
              width={600}
              height={350}
              className="w-full h-auto"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {berita.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Artikel tentang {berita.title.toLowerCase()}.
              </p>
              <div className="mt-4 flex justify-between items-center">
                <button
                  onClick={() => window.open(berita.url, "_blank")}
                  className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
