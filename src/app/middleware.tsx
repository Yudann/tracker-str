import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Ambil username dari cookies
  const username = req.cookies.get("username");

  // Jika tidak ada username di cookies, arahkan ke halaman login
  if (!username) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // Jika ada username, lanjutkan permintaan
  return NextResponse.next();
}

// Tentukan rute yang membutuhkan autentikasi
export const config = {
  matcher: ["/home", "/dashboard", "/profile"], // Tambahkan rute yang ingin diawasi
};
