import { useEffect, useRef, useState } from "react";

export const StreamingMarkdown = ({ content }: { content: string }) => {
  const [displayed, setDisplayed] = useState("");
  const i = useRef(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (i.current < content.length) {
        setDisplayed(prev => prev + content[i.current]);
        i.current += 1;
        requestAnimationFrame(() => {
          ref.current?.scrollIntoView({ behavior: "smooth" });
        });
      } else {
        clearInterval(interval);
      }
    }, 8); // speed per character
    return () => clearInterval(interval);
  }, [content]);

  return (
    <div
      ref={ref}
      className="ct-markdown-content whitespace-pre-wrap text-sm text-white"
    >
      {displayed}
    </div>
  );
};
