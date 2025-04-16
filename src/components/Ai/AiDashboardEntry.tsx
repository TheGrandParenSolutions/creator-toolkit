import React, { useState } from "react";
import CTPromptInput from "@src/components/Ai/PromptInput/CTPromptInput"; // Import the CTPromptInput component
import { useNavigate } from "react-router-dom";
import { ListType } from "@src/PropTypes.ts/CommonTypes";
import { DEMO_PROMPTS } from "@src/components/constants/Constants";

const AIDashboardEntry = () => {
  const [demoPrompts] = useState<ListType[]>(DEMO_PROMPTS);
  const [prompt, setPrompt] = useState("");
  const navigate = useNavigate();

  const handlePromptChange = (newPrompt: string) => {
    setPrompt(newPrompt);
  };

  const handleDemoPromptSelect = (demoPrompt: string) => {
    setPrompt(demoPrompt);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("File uploaded", e.target.files);
  };

  const handleStartCreating = (e: string) => {
    navigate("/creation/" + crypto.randomUUID(), {
      state: {
        promptDetails: e,
      },
    });
  };

  return (
    <div className="flex items-center justify-center">
      <CTPromptInput
        prompt={prompt}
        demoPrompts={demoPrompts}
        onPromptChange={handlePromptChange}
        onDemoPromptSelect={handleDemoPromptSelect}
        onFileUpload={handleFileUpload}
        showSuggestions
        onStartCreating={handleStartCreating}
        enableBorderAnimation
      />
    </div>
  );
};

export default AIDashboardEntry;
