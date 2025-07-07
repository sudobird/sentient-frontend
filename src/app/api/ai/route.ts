import { NextResponse } from 'next/server';

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function POST(request: Request) {
  const { message } = await request.json();

  // Mocked AI response logic
  let aiResponse = "";
  if (message.toLowerCase().includes("life")) {
    aiResponse = "The meaning of life is a philosophical question that has intrigued humanity for centuries.";
  } else if (message.toLowerCase().includes("love")) {
    aiResponse = "Love is a complex set of emotions, behaviors, and beliefs associated with strong feelings of affection.";
  } else if (message.toLowerCase().includes("ai")) {
    aiResponse = "AI stands for Artificial Intelligence, the simulation of human intelligence in machines.";
  } else {
    aiResponse = `You said: ${message}`;
  }

  await sleep(2000); // 2 second delay

  return NextResponse.json({ response: aiResponse });
}