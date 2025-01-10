import Link from "next/link";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1>Homepage</h1>
      <Link
        href="/sign-in"
        className="px-16 py-4 rounded-lg bg-black text-white"
      >
        Start
      </Link>
    </div>
  );
};

export default Home;
