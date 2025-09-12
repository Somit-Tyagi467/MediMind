import React from "react";
import { motion } from "framer-motion";

const MessageBubble = ({ sender, text }) => {
  const isUser = sender === "user";

  return (
    <motion.div
      initial={{ opacity: 0, x: isUser ? 50 : -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`
          max-w-[70%] px-4 py-2 rounded-2xl shadow-md
          ${isUser 
            ? "bg-[#476EAE] text-white rounded-br-none" 
            : "bg-white/30 backdrop-blur-sm text-gray-900 rounded-bl-none"}
        `}
      >
        {text}
      </div>
    </motion.div>
  );
};

export default MessageBubble;
