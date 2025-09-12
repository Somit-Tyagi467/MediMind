import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Features from "../Home/Features";
import MessageBubble from "./MessageBubble";
import { motion } from "framer-motion";
import { Box, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "👋 Hello! I'm your MediMind Assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const apiUrl = "https://50rxl0z2-8000.inc1.devtunnels.ms/api/agents/chat/";
      const postData = { message: userMessage.text };
      
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      

      const data = await response.json();
      console.log(data);
      const aiMessage = {
        sender: "ai",
        text: data.ai_response || "No response from server.",
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "⚠️ Something went wrong. Please try again." },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#476EAE] via-[#48B3AF] to-[#A7E399]">
      <Navbar />
      <Features />

      <Box className="flex-1 flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-2xl h-[70vh] bg-white/15 backdrop-blur-lg rounded-3xl shadow-2xl p-6 flex flex-col border border-white/20 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-green-400/20 rounded-full blur-3xl"></div>

          {/* Chat header */}
          <div className="text-center mb-4 relative">
            <h2 className="text-white/90 text-xl font-semibold">MediMind Assistant</h2>
            <div className="w-16 h-1 bg-white/30 mx-auto mt-2 rounded-full"></div>
          </div>

          {/* Messages container with custom scrollbar */}
          <div className="flex-1 overflow-y-auto space-y-4 p-3 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <MessageBubble sender={msg.sender} text={msg.text} />
              </motion.div>
            ))}

            {/* Enhanced typing indicator */}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex justify-start mb-3"
              >
                <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg rounded-bl-none">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Enhanced input field */}
          <motion.div 
            className="flex items-center gap-3 mt-4 relative"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex-1 relative group">
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                InputProps={{
                  className: "bg-white/90 backdrop-blur-md rounded-2xl shadow-lg transition-all duration-300",
                  sx: {
                    '& .MuiOutlinedInput-root': {
                      height: '56px',
                      transition: 'all 0.3s ease',
                      '& input': {
                        padding: '16px 24px',
                        fontSize: '1rem',
                        color: '#1a1a1a',
                      },
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                        borderWidth: '2px',
                        transition: 'all 0.3s ease',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.8)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#fff',
                        borderWidth: '2px',
                        boxShadow: '0 0 20px rgba(255, 255, 255, 0.2)',
                      },
                    },
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconButton 
                onClick={handleSend}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 w-14 h-14 shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <SendIcon className="text-white transform -rotate-45 transition-transform group-hover:rotate-0" />
              </IconButton>
            </motion.div>
          </motion.div>
        </motion.div>
      </Box>
    </div>
  );
};

export default ChatPage;
