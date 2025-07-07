import React from "react";

export function HelpButton() {
  return (
    <button className="hidden sm:block fixed bottom-6 right-6 z-30 text-gray-400 hover:text-black sm:bottom-6 sm:right-6">
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><circle cx="14" cy="14" r="12" /><text x="14" y="18" textAnchor="middle" fontSize="12" fill="currentColor">?</text></svg>
    </button>
  );
} 