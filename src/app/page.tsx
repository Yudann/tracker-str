import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/logo.png";


const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <Image src={logo} alt="logo" height={300} width={300} />
      <Link
        href="/sign-in"
        className="px-16 py-4 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition-all duration-200"
      >
        Start
      </Link>
    </div>
  );
};

export default Home;
