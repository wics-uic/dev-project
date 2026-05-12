
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="w-full h-fit flex justify-center">
      <nav
        className={`
      fixed top-5 w-100 ml-auto h-13 z-50 transition-all duration-500 ease-in-out
      translate-y-0 opacity-100 text-black
      bg-white/70 backdrop-blue-md shadow-[0_5px_5px_rgba(0,0,0,0.20)] rounded-4xl
    `}
      >
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">
          <Link
            href="/"
            className="font-bold text-xl tracking-tighter hover:opacity-70 transition-opacity"
          >
            WiCS <span className="text-[#ECB0B9]">WIRED</span>
          </Link>

          <div className="font-bold flex gap-8 z-50 text-md">
            <Link
              href="/projects"
              className="hover:text-[#ECB0B9] transition-colors"
            >
              PROJECTS
            </Link>
            <Link
              href="/apply"
              className="hover:text-[#ECB0B9] transition-colors"
            >
              APPLY
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
