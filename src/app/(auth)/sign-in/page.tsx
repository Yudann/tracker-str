import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="w-[80%] h-fit flex flex-col justify-center items-center p-8 bg-white rounded-xl shadow-md">
        <div className="w-[200px] h-[200px] bg-black rounded-full mb-5" />
        <h2 className="py-4 text-xl font-bold">Login</h2>
        <div className="flex flex-col w-full gap-5">
          <input
            placeholder="Username"
            className="w-full bg-gray-200 rounded-2xl p-4"
          />
          <input
            placeholder="Password"
            className="w-full bg-gray-200 rounded-2xl p-4"
          />
          <Link
            href="/home"
            className="py-3 bg-blue-400 text-center rounded-2xl mt-5 text-white font-bold text-base"
          >
            Login
          </Link>
        </div>
        <div className="flex justify-center items-center mt-4">
          <p>Belum punya akun? </p>
          <Link href="/sign-up" className="text-blue-500 ml-2">
            Daftar
          </Link>
        </div>
      </div>
    </div>
  );
}
