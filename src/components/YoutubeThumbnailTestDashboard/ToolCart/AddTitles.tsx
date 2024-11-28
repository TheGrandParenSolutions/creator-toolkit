import { ActionIcon, TextInput } from "@mantine/core";
import {  X } from "@mynaui/icons-react"; 
import { useState } from "react";

const AddTitles = () => {
  const [titles, setTitles] = useState<string[]>([""]); 
  const [activeIndex, setActiveIndex] = useState<number | null>(null); 

  const handleTitleChange = (value: string, index: number) => {
    const updatedTitles = [...titles];
    updatedTitles[index] = value;
    setTitles(updatedTitles);
  };

  const handleAddTitle = (index: number) => {
    if (titles[index].trim() !== "") {
      setTitles((prev) => [...prev, ""]);
    }
  };

  const handleRemoveTitle = (index: number) => {
    setTitles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === "Enter" && titles[index].trim() !== "") {
      handleAddTitle(index);
    }
  };

  const handleTitleClick = (index: number) => {
    setActiveIndex(index);
  };

  console.log({
    titles,
    activeIndex
  })
  return (
    <div className="space-y-4">
      {/* Section Label */}
      <h3 className="text-sm font-semibold text-gray-800">Titles</h3>

      <div className="space-y-2">
        {titles.map((title, index) => (
          <div
            key={index}
            onClick={() => handleTitleClick(index)}
            className={`relative w-full max-w-md cursor-pointer transition`}
          >
            <TextInput
              type="text"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              placeholder={`Title ${index + 1}`}
              radius={"xl"}
              classNames={{
                input: `w-full p-5 rounded-full text-base text-sm font-medium border-transparent bg-[var(--brand-main-bg)] ring-2 ring-gray-300 text-gray-600 outline-none transition focus:ring-2 ${
                  activeIndex === index
                    ? "ring-[var(--brand-dark-yellow)]"
                    : "ring-gray-300"
                }`,
              }}
              rightSection={
                <div className="flex items-center space-x-2">
                  {index !== 0 && (
                    <ActionIcon
                      className="mr-2"
                      radius="xl"
                      size={"sm"}
                      variant="light"
                      onClick={() => handleRemoveTitle(index)}
                      color="var(--brand-dark-yellow)"
                    >
                     <X size={14} stroke={2.5} color="black" />
                    </ActionIcon>
                  )}
                </div>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddTitles;
