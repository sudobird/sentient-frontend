import React from "react";
import { ModelSelector } from "./ModelSelector";

type ChatInputProps = {
  input: string;
  setInput: (v: string) => void;
  handleSend: () => void;
}

export function ChatInput({ input, setInput, handleSend }: ChatInputProps) {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-4">
      {/* Input and controls section */}
      <div className="rounded-2xl border border-[#E5E5E5] bg-white shadow-sm flex flex-col px-4 pt-4 pb-2 sm:shadow-[0_0_0_6px_rgba(0,0,0,0.08)]">
        <form onSubmit={(e) => {e.preventDefault(); handleSend()}}>
          <div className="flex items-center justify-center gap-2">

            <button className="sm:hidden flex items-center justify-center w-9 h-9 rounded-full border border-[#E5E5E5] bg-white text-gray-400 hover:text-black transition">
              +
            </button>

            <input
              className="flex-1 bg-transparent outline-none text-lg placeholder:text-gray-400 px-2"
              placeholder="Ask me anything..."
              value={input}
              onChange={e => setInput(e.target.value)}
            />

          </div>
          <div className="flex items-center justify-between gap-2 mt-3 mb-1">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-gray-400 text-sm">
                <button className="hidden sm:block flex items-center justify-center w-6 h-6 rounded-full border border-[#E5E5E5] bg-white text-gray-400 hover:text-black transition">
                  +
                </button>
                <span className="hidden sm:block">Attach</span>
              </span>
              <ModelSelector />
              
            </div>
            {/* Send button */}
            <button type="submit" className="flex items-center justify-center w-9 h-9 rounded-full border border-[#E5E5E5] bg-white text-gray-400 hover:text-black transition">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M5 10h10M10 5l5 5-5 5" /></svg>
            </button>
          </div>
        </form>
      </div>
      

    </div>
  );
} 