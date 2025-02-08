import { ActionIcon, TextInput } from "@mantine/core";
import { X } from "@mynaui/icons-react";
import { Dispatch, useEffect, useState } from "react";

const AddTitles = ({
  setActiveTitle,
}: {
  setActiveTitle: Dispatch<string>;
}) => {
  const [titles, setTitles] = useState<string[]>([""]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleTitleChange = (value: string, index: number) => {
    const updatedTitles = [...titles];
    updatedTitles[index] = value;
    setTitles(updatedTitles);
  };

  const handleAddTitle = (index: number) => {
    if (titles[index].trim() !== "") {
      setTitles(prev => [...prev, ""]);
    }
  };

  const handleRemoveTitle = (index: number) => {
    setTitles(prev => prev.filter((_, i) => i !== index));
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === "Enter" && titles[index].trim() !== "") {
      handleAddTitle(index);
    }
  };

  const handleTitleClick = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (activeIndex !== null) {
      setActiveTitle(titles[activeIndex]);
    }
  }, [activeIndex, titles]);

  return (
    <div className="space-y-4">
      {/* Section Label */}
      <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
        Titles
      </h3>

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
              onChange={e => handleTitleChange(e.target.value, index)}
              onKeyDown={e => handleKeyDown(e, index)}
              placeholder={`Title ${index + 1}`}
              radius={"xl"}
              classNames={{
                input: `w-full p-5 rounded-full text-base text-sm font-medium dark:bg-zinc-800 ring-0 ring-[var(--main-yellow)] border dark:ring-black dark:border-black border-[var(--main-yellow)] text-zinc-600 dark:text-zinc-300 outline-none transition focus:ring-0 ${
                  activeIndex === index
                    ? "border-[3px] !border-[--main-yellow]"
                    : "ring-zinc-300 dark:ring-zinc-600"
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
                      style={{
                        backgroundColor: "var(--brand-dark-yellow)",
                      }}
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
