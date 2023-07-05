import { useState } from "react";
import { BiChevronUp } from "react-icons/bi";
import ChatBubble from "./ChatBubble";

interface ChatbotWrapperProps {}

export default function ChatbotWrapper({}: ChatbotWrapperProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <div className="fixed z-[40] right-4 bottom-4 p-4 pb-2 bg-slate-100 shadow-md rounded-lg w-[320px]">
      <div
        className="flex justify-between items-center cursor-pointer pb-2"
        onClick={() => setIsChatOpen((prev) => !prev)}
      >
        <div className="flex justify-start gap-3 items-center text-sm">
          <span className="h-3 w-3 rounded-full bg-green-600 block"></span> Have
          any questions?
        </div>
        <BiChevronUp className="text-xl" />
      </div>
      <div
        className={`${isChatOpen ? "h-full" : "h-0"} overflow-hidden relative`}
      >
        <div className="pt-4 w-full max-h-[200px] overflow-scroll">
          <ChatBubble content={"How are you"} isSender />
          <ChatBubble content={"I'm good, how can I help you today"} />
          <ChatBubble
            isSender
            content={
              "I'm having trouble filling the form, can you tell me how can I use my location"
            }
          />
          <ChatBubble
            content={
              "Sure, there is button named 'use my location', you can click that button to enter your current location automatically"
            }
          />
          <ChatBubble isSender content={"oh, thankyou"} />
        </div>
        <input
          type="text"
          placeholder="Enter your text"
          className="text-xs w-full py-2 px-4 rounded-sm outline-none"
        />
      </div>
    </div>
  );
}
