import { FC, useContext, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import CTPromptInput from "@src/components/Ai/PromptInput/CTPromptInput";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import UserProfile from "@src/shared/User/UserProfile";
import { ArrowDown } from "@mynaui/icons-react";
import { ThemeContext } from "@src/Context/Theme/ThemeContext";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  streaming?: boolean;
};

const CenterPromptArea: FC = () => {
  const { darkMode } = useContext(ThemeContext);
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handlePromptChange = (value: string) => setPrompt(value);

  const handleSend = (prompt: string) => {
    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: prompt,
    };

    const botMsg: Message = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: "",
      streaming: true,
    };

    setMessages(prev => [...prev, userMsg, botMsg]);
    setPrompt("");

    simulateOpenAIStreamResponse(
      token => {
        setMessages(prev =>
          prev.map(msg =>
            msg.id === botMsg.id
              ? { ...msg, content: msg.content + token }
              : msg,
          ),
        );
        setTimeout(() => {
          requestAnimationFrame(() => {
            scrollRef.current?.scrollIntoView({
              behavior: "smooth",
            });
          });
        }, 10);
      },
      () => {
        setMessages(prev =>
          prev.map(msg =>
            msg.id === botMsg.id ? { ...msg, streaming: false } : msg,
          ),
        );
      },
    );
  };

  const handleFileUpload = (file: File | null) => {
    if (!file) return;
    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: `📎 Uploaded file: **${file.name}**`,
    };
    setMessages(prev => [...prev, userMsg]);
  };

  const [showScrollButton, setShowScrollButton] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  console.log(containerRef);

  useEffect(() => {
    const handleScroll = () => {
      console.log("Scrolled");
      const container = containerRef.current;
      if (!container) return;

      const isAtBottom =
        container.scrollHeight - container.scrollTop <=
        container.clientHeight + 40;

      console.log(isAtBottom);
      setShowScrollButton(!isAtBottom);
    };

    const current = containerRef.current;
    if (current) {
      current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (current) {
        current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const renderMessage = (msg: Message, index: number) => {
    const isUser = msg.role === "user";

    return (
      <div
        key={msg.id}
        style={
          {
            "--gradient-end": msg.streaming
              ? "transparent"
              : darkMode
              ? "#27272a"
              : "#e4e4e7",
            transition: "--gradient-end 0.5s",
            background: `linear-gradient(${
              darkMode ? "#27272a" : "#e4e4e7"
            } max(calc(100% - 100vh), 30%), var(--gradient-end) 100%)`,
          } as any
        }
        className="fade-in-markdown relative mx-10 flex flex-col rounded-[calc(0.75rem-1px)] bg-zinc-800"
      >
        <div className="overflow-hidden rounded-[calc(0.75rem-1px)]">
          <div className="flex w-full gap-4 p-6 py-5">
            <div className="flex size-8 shrink-0 select-none items-center justify-center overflow-hidden rounded-full text-black dark:text-white">
              {isUser ? <UserProfile /> : "CT"}
            </div>
            <div className="grid-col-1 grid w-full">
              <div className="overflow-hidden py-1">
                <div
                  className="fade-in-markdown ct-markdown-content prose dark:prose-invert w-full break-words"
                  style={
                    { "--delay": `${index * 0.3}s` } as React.CSSProperties
                  }
                >
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight]}
                    components={{
                      code({ inline, children, className: cls }: any) {
                        const text = String(children).trim();
                        if (inline) {
                          return (
                            <code className="rounded bg-zinc-200 px-1 py-0.5 dark:bg-zinc-700">
                              {text}
                            </code>
                          );
                        }
                        return (
                          <div className="group relative">
                            <pre className="overflow-x-auto rounded-md">
                              <code className={cls}>{text}</code>
                            </pre>
                            <button
                              onClick={() =>
                                navigator.clipboard.writeText(text)
                              }
                              className="absolute right-2 top-2 hidden rounded bg-zinc-600 px-2 py-1 text-xs text-white group-hover:inline-flex"
                            >
                              Copy
                            </button>
                          </div>
                        );
                      },
                    }}
                  >
                    {msg.content}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const isLoading = useMemo(() => {
    return Boolean(messages?.some(m => m.streaming));
  }, [messages]);

  return (
    <div className="relative flex h-full flex-col transition-all duration-500">
      {/* Message Section */}
      <section
        ref={containerRef}
        area-label="Chat"
        className="max-w-chat z-1 no-scrollbar mx-auto flex w-full flex-1 flex-col gap-5 overflow-auto py-6 text-sm"
      >
        <AnimatePresence initial={false}>
          {messages.map(renderMessage)}
        </AnimatePresence>

        {/* Loader while streaming */}

        <div ref={scrollRef} />
      </section>

      {isLoading && (
        <div className="sticky my-3 flex justify-center">
          <div>
            <span className="ct-loader text-zinc-500"></span>
          </div>
        </div>
      )}

      {showScrollButton && !isLoading && (
        <div
          className="z-scroller sticky mx-auto h-0 opacity-100"
          style={{
            bottom: "205px",
            opacity: 1,
            transform: "none",
          }}
        >
          <button
            onClick={() =>
              scrollRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex size-8 items-center justify-center rounded-full bg-zinc-800 text-zinc-300 shadow-xl transition-all"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      )}

      {/* Input */}
      <div className="max-w-chat z-prompt sticky bottom-0 mx-auto mb-4 w-full px-[var(--chat-padding)]">
        <CTPromptInput
          onStartCreating={handleSend}
          prompt={prompt}
          onPromptChange={handlePromptChange}
          onFileUpload={e => handleFileUpload(e?.target?.files?.[0] || null)}
          loading={isLoading}
          enableBlurEffect={true}
        />
      </div>
    </div>
  );
};

export default CenterPromptArea;

const simulateOpenAIStreamResponse = (
  onToken: (token: string) => void,
  onComplete: () => void,
) => {
  const stream = [
    "Here's a simulated response for you.\n\n",
    "1. Markdown support\n",
    "- With **bold** and *italic*\n",
    "- `inline code`\n",
    "2. Code blocks:\n",
    "```tsx\nconsole.log('Hello World');\n```\n",
    "3. Bullet lists, headings, and more.\n\n",
    "This mimics token-by-token delivery.",
    "Here's a simulated response for you.\n\n",
    "1. Markdown support\n",
    "- With **bold** and *italic*\n",
    "- `inline code`\n",
    "2. Code blocks:\n",
    "```tsx\nconsole.log('Hello World');\n```\n",
    "3. Bullet lists, headings, and more.\n\n",
    "This mimics token-by-token delivery.",
    "Here's a simulated response for you.\n\n",
    "1. Markdown support\n",
    "- With **bold** and *italic*\n",
    "- `inline code`\n",
    "2. Code blocks:\n",
    "```tsx\nconsole.log('Hello World');\n```\n",
    "3. Bullet lists, headings, and more.\n\n",
    "This mimics token-by-token delivery.",

    "Here's a simulated response for you.\n\n",
    "1. Markdown support\n",
    "- With **bold** and *italic*\n",
    "- `inline code`\n",
    "2. Code blocks:\n",
    "```tsx\nconsole.log('Hello World');\n```\n",
    "3. Bullet lists, headings, and more.\n\n",
    "This mimics token-by-token delivery.",
    "Here's a simulated response for you.\n\n",
    "1. Markdown support\n",
    "- With **bold** and *italic*\n",
    "- `inline code`\n",
    "2. Code blocks:\n",
    "```tsx\nconsole.log('Hello World');\n```\n",
    "3. Bullet lists, headings, and more.\n\n",
    "This mimics token-by-token delivery.",
    "Here's a simulated response for you.\n\n",
    "1. Markdown support\n",
    "- With **bold** and *italic*\n",
    "- `inline code`\n",
    "2. Code blocks:\n",
    "```tsx\nconsole.log('Hello World');\n```\n",
    "3. Bullet lists, headings, and more.\n\n",
    "This mimics token-by-token delivery.",
    "Here's a simulated response for you.\n\n",
    "1. Markdown support\n",
    "- With **bold** and *italic*\n",
    "- `inline code`\n",
    "2. Code blocks:\n",
    "```tsx\nconsole.log('Hello World');\n```\n",
    "3. Bullet lists, headings, and more.\n\n",
    "This mimics token-by-token delivery.",
    "Here's a simulated response for you.\n\n",
  ];

  let i = 0;
  const interval = setInterval(() => {
    if (i < stream.length) {
      onToken(stream[i]);
      i++;
    } else {
      clearInterval(interval);
      onComplete();
    }
  }, 300);
};
