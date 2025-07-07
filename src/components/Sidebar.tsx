import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden sm:flex flex-col items-center w-16 bg-[#f7f7f8] border-r border-border py-4 h-full">
      <div className="flex flex-col justify-between h-full w-full items-center">
        {/* Logo at the top */}
        <div className="flex items-center justify-center h-10 w-10 mt-2 mb-4">
          <Image src="/logo.svg" alt="Logo" width={32} height={32} />
        </div>
        {/* Navigation in the center */}
        <nav className="flex flex-col items-center gap-6 flex-1 justify-center w-full">
          <Link href="/home" className={clsx(
            "text-gray-400 hover:text-black w-full flex items-center justify-center h-10 relative",
            pathname === "/home" && "text-black sidebar-active",
          )}>
            <span className="sr-only">Home</span>
            <Image src="/home.svg" alt="Home" width={28} height={28} />
          </Link>
          <Link href="/history" className={clsx(
            "text-gray-400 hover:text-black w-full flex items-center justify-center h-10",
            pathname === "/history" && "text-black sidebar-active"
          )}>
            <span className="sr-only">History</span>
            <Image src="/sandglass.svg" alt="History" width={28} height={28} />
          </Link>
          <Link href="/discover" className={clsx(
            "text-gray-400 hover:text-black w-full flex items-center justify-center h-10",
            pathname === "/discover" && "text-black sidebar-active"
          )}>
            <span className="sr-only">Discover</span>
            <Image src="/globe.svg" alt="Discover" width={28} height={28} />
          </Link>
        </nav>
        {/* + and Profile S at the bottom */}
        <div className="mb-4 flex flex-col items-center gap-4">
          <button className="flex items-center justify-center h-10 w-10 text-black text-2xl font-light">
            +
          </button>
          <button className="flex items-center justify-center h-5 w-5 rounded-full border border-[#212222] bg-white text-black font-semibold text-lg">
            S
          </button>
        </div>
      </div>
    </aside>
  );
} 