
export function SuggestedQuestions({handleSend}: {handleSend: (input?: string) => void}) {

  const questions = [
    'Whats the meaning of life?',
    'How do you define love?',
    'Whats the meaning of AI?'
  ]

  return (
    <div className="flex flex-wrap gap-4 justify-center w-full max-w-4xl mx-auto mt-4">
      {/* <button className="flex-1 min-w-[220px] p-4 rounded-2xl bg-[#F5F5F5] text-gray-600 text-base font-normal border border-[#E5E5E5] transition hover:bg-gray-200" onClick={() => handleSend()}>
        
      </button>
      <button className="flex-1 min-w-[220px] p-4 rounded-2xl bg-[#F5F5F5] text-gray-600 text-base font-normal border border-[#E5E5E5] transition hover:bg-gray-200">
        
      </button>
      <button className="flex-1 min-w-[220px] p-4 rounded-2xl bg-[#F5F5F5] text-gray-600 text-base font-normal border border-[#E5E5E5] transition hover:bg-gray-200">
        
      </button> */}
      {
        questions.map(question => (
          <button 
            className="flex-1 min-w-[220px] p-4 rounded-2xl bg-[#F5F5F5] text-gray-600 text-base font-normal border border-[#E5E5E5] transition hover:bg-gray-200"
            key={question}
            onClick={() => handleSend(question)}
            >
            {question}
          </button>
        ))
      }
    </div>
  );
}