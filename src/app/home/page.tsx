"use client";

import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { CenteredLogo } from "@/components/CenteredLogo";
import { ChatInput } from "@/components/ChatInput";
import { HelpButton } from "@/components/HelpButton";
import { MobileHeader } from "@/components/MobileHeader";
import { v4 as uuidv4 } from "uuid";
import { ChatList } from "@/components/ChatList";
import { SuggestedQuestions } from "@/components/SuggestedQuestions";
import { Loader } from "@/components/Loader";
import clsx from 'clsx';


export default function HomePage() {
  const [messages, setMessages] = useState<
    { id: string; role: "user" | "assistant"; content: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async (msg?: string) => {
    const value = (msg ?? input).trim();
    if (!value) return;

    const userMessage = {
      id: uuidv4(),
      role: "user" as const,
      content: value,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: value }),
      });
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      const assistantMessage = {
        id: uuidv4(),
        role: "assistant" as const,
        content: data.response,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      // setError("Something went wrong. Please try again.");
      console.log('error')
    } finally {
      setLoading(false);
    }
  };

  const handleQuestionClick = (inp: string = '') => {
    setInput(inp);
    handleSend(inp);
  }

  return (
    <div className="flex h-screen w-screen bg-background">
      {/* Sidebar (desktop/tablet) */}
      <Sidebar />
      {/* Mobile header */}
      <MobileHeader />
      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center relative pb-20 sm:pb-0 pt-14 sm:pt-0">
        <div className="flex flex-1 flex-col items-center justify-end sm:justify-center w-full px-2 py-6 sm:px-0">
          {
            messages.length ? null : <CenteredLogo />
          }

          <div className={clsx(messages.length || loading ? 'flex-1 w-full max-w-4xl mx-auto' : '')}>
            {
              messages.length ? <ChatList messages={messages}/> : null
            }
            {
              loading && <Loader />
            }
          </div>
          
          <ChatInput input={input} setInput={setInput} handleSend={handleSend} />
          {
            !messages.length && <SuggestedQuestions handleSend={handleQuestionClick}/>
          }   
         
        </div>
        <HelpButton />
      </main>
      {/* Mobile bottom nav */}
      <MobileNav />
    </div>
  );
}