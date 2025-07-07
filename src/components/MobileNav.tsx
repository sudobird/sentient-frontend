import React from "react";
import Image from "next/image";
import Link from "next/link";

export function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 flex sm:hidden justify-around items-center h-16 bg-[#f7f7f8] border-t border-border">
      <Link href="/home" className="flex flex-col items-center text-black">
        <Image src="/home.svg" alt="Home" width={28} height={28} className="mb-1" />
        <span className="text-xs">Home</span>
      </Link>
      <Link href="/history" className="flex flex-col items-center text-gray-400 hover:text-black">
        <Image src="/sandglass.svg" alt="History" width={28} height={28} className="mb-1" />
        <span className="text-xs">History</span>
      </Link>
      <Link href="/discover" className="flex flex-col items-center text-gray-400 hover:text-black">
        <Image src="/globe.svg" alt="Discover" width={28} height={28} className="mb-1" />
        <span className="text-xs">Discover</span>
      </Link>
    </nav>
  );
} 