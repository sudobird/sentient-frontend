import React from "react";
import Image from "next/image";

export function ChatList({ messages = [] }: {
  messages: { id: string; role: "user" | "assistant"; content: string }[];
}) {
  return (
    <div className="flex flex-col gap-6 py-4">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={
            msg.role === "assistant"
              ? "flex items-start gap-3"
              : "flex items-end gap-3 justify-end"
          }
        >
          {msg.role === "assistant" && (
            <div className="flex-shrink-0 mt-1">
              <Image src="/logo.svg" alt="AI" width={28} height={28} className="rounded-full" />
            </div>
          )}
          <div
            className={
              "rounded-2xl px-5 py-4 text-base whitespace-pre-line " +
              (msg.role === "assistant"
                ? "bg-[#FAFAFA] border border-[#E5E5E5] text-gray-900"
                : "bg-[#E5E5E5] text-gray-800")
            }
            style={{ maxWidth: "90%" }}
          >
            {msg.content}
          </div>
          {msg.role === "user" && (
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#E5E5E5] text-white flex items-center justify-center font-semibold text-base">
              U
            </div>
          )}
        </div>
      ))}
    </div>
  );
}