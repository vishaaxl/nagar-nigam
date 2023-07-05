interface ChatBubbleProps {
  isSender?: boolean;
  content: string;
}

export default function ChatBubble({ isSender, content }: ChatBubbleProps) {
  return (
    <div className={`flex ${isSender && "justify-end"}`}>
      <div
        className={`${
          isSender ? "bg-blue-400" : "bg-white"
        } max-w-[70%] py-2 px-4 ${
          isSender && "text-white"
        } rounded-xl text-xs mb-2`}
      >
        {content}
      </div>
    </div>
  );
}
