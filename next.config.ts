/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "www.healthline.com",
      "www.mayoclinic.org",
      "www.cdc.gov",
      "www.stroke.org",
      "www.webmd.com",
      "www.hopkinsmedicine.org",
      "www.strokeassociation.org",
      "www.nhs.uk",
      "www.bhf.org.uk",
      "www.verywellhealth.com",
      "img.youtube.com",
      "picsum.photos" // Perbaiki tanpa tanda koma
    ],
  },
};

module.exports = nextConfig;
