import React, { useState } from "react";
import CTPromptInput from "@src/components/Ai/PromptInput/CTPromptInput"; // Import the CTPromptInput component
import { useNavigate } from "react-router-dom";

const demoPrompts = [
  { label: "Thumbnail Generator", value: "Generate a stunning thumbnail" },
  { label: "Video Script Generator", value: "Create a script for your videos" },
  { label: "Content Analyzer", value: "Analyze your content's performance" },
  { label: "Video Editor", value: "Edit your videos with ease" },
];

const AIDashboardEntry = () => {
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

  const handleStartCreating = () => {
    navigate("/ai-dashboard");
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
      />
    </div>
  );
};

export default AIDashboardEntry;
