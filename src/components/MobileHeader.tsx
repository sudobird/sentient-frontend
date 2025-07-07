import React from "react";

export function MobileHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between h-14 px-4 bg-white border-b border-[#E5E5E5] sm:hidden">
      <button className="flex items-center justify-center h-9 w-9 text-black text-2xl font-light">
        +
      </button>
      <button className="flex items-center justify-center h-8 w-8 rounded-full border border-[#212222] bg-white text-black font-semibold text-base">
        S
      </button>
    </header>
  );
} 