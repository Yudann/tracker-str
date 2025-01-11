import HamburgerMenu from "../HamburgerMenu";

export default function Navbar() {
  return (
    <nav className="fixed  backdrop-blur-sm top-0 right-0 left-0 px-4 py-5 flex items-center justify-between">
      <HamburgerMenu />
      <div className="h-5 w-5 bg-black rounded-full"></div>
    </nav>
  );
}
