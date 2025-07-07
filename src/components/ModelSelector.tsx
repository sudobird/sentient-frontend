import { useState } from "react";

export function ModelSelector() {
  const [selectedModal, setSelectedModal] = useState("4s - mini");

  const handleModalChange = (modal: string) => {
    setSelectedModal(modal);
  };

  return (
    <div className="flex items-center gap-2 justify-center bg-[#F5F5F5] rounded-full px-1 py-1 cursor-pointer">
      <div className={`text-xs px-3 py-1 rounded-full bg-[#F5F5F5] font-medium ${selectedModal === "4s - mini" ? "bg-white" : ""}`} onClick={() => handleModalChange("4s - mini")}>4s - mini</div>
      <div className={`text-xs px-3 py-1 rounded-full bg-[#F5F5F5] text-gray-400 font-medium ${selectedModal === "s1 - preview" ? "bg-white" : ""}`} onClick={() => handleModalChange("s1 - preview")}>s1 - preview</div>
    </div>
  );
}