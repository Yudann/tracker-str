import { FaHeart } from "react-icons/fa";
import HamburgerMenu from "../HamburgerMenu";

export default function Navbar() {
  return (
    <nav className="fixed z-[99] backdrop-blur-sm top-0 right-0 left-0 px-4 py-5 flex items-center justify-between">
      <HamburgerMenu />
      <div className="flex items-center gap-2">
        <FaHeart className="fill-red-600" />
        30 Hari
      </div>
    </nav>
  );
}
