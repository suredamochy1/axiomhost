import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MessageCircle, Download, Edit2, ChevronDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface WebsiteContent {
  title: string;
  description: string;
  textContent: string;
}

// Sound utilities
const playSound = (type: "open" | "send" | "receive") => {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    if (type === "open") {
      // Chat open: ascending tone
      oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.3);
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    } else if (type === "send") {
      // Message sent: higher beep
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.15);
    } else if (type === "receive") {
      // Message received: lower beep
      oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
      gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.2);
    }
  } catch (e) {
    // Audio context not available in some browsers
    console.log("Audio not supported");
  }
};

const defaultResponses = [
  "That's a great question! Let me help you with that based on our services.",
  "I'd be happy to help! Here's what I know about that:",
  "Let me share some relevant information from our platform:",
];

const humanTransferSuggestions = [
  "I'm not entirely sure about that. Would you like to speak with one of our human representatives who can give you a more detailed answer?",
  "That's a complex question that might be better answered by our support team. Would you like me to transfer you to a human representative?",
  "I don't have enough information to answer that accurately. Would you prefer to chat with one of our specialists?",
];

// Smart response generator based on website content
const generateSmartResponse = (userMessage: string, websiteContent: WebsiteContent | null): { response: string; offerHumanTransfer: boolean } => {
  const userQuery = userMessage.toLowerCase();
  
  // Keywords for website-related content
  const hostingKeywords = ["hosting", "plan", "server", "vps", "shared", "dedicated", "pricing", "price", "cost", "cheap"];
  const builderKeywords = ["website", "build", "builder", "create", "design", "site"];
  const blackfridayKeywords = ["black friday", "discount", "offer", "sale", "promo", "off", "%"];
  const migrateKeywords = ["migrate", "migration", "transfer", "move"];
  const supportKeywords = ["support", "help", "contact", "issue", "problem", "error"];
  
  const hasHostingKeyword = hostingKeywords.some(kw => userQuery.includes(kw));
  const hasBuilderKeyword = builderKeywords.some(kw => userQuery.includes(kw));
  const hasBlackfridayKeyword = blackfridayKeywords.some(kw => userQuery.includes(kw));
  const hasMigrateKeyword = migrateKeywords.some(kw => userQuery.includes(kw));
  const hasSupportKeyword = supportKeywords.some(kw => userQuery.includes(kw));
  
  let response = "";
  let offerHumanTransfer = false;
  
  // Generate context-aware responses
  if (hasBlackfridayKeyword) {
    response = "🎉 Yes! We're having an amazing Black Friday sale with up to 85% off on hosting and website builder plans. This is a limited-time offer, so I'd recommend claiming your deal before it expires! Would you like to know more about any specific plan?";
  } else if (hasHostingKeyword) {
    response = "Our hosting plans are flexible and affordable - perfect for everyone from beginners to enterprises. We offer shared hosting for small projects, VPS for more control, and dedicated servers for high-traffic sites. Which one interests you?";
  } else if (hasBuilderKeyword) {
    response = "Great! You can either use our Website Builder for a visual, drag-and-drop experience, or code your own site. Both are included with most of our hosting plans. Do you have any experience with website building?";
  } else if (hasMigrateKeyword) {
    response = "We offer free migrations with our hosting plans! The process typically takes just a few hours and our team handles everything for you. It's completely stress-free. Are you looking to migrate from another provider?";
  } else if (hasSupportKeyword) {
    response = "Our support team is available 24/7 to help you with any issues. For specific technical support, I'd recommend connecting with our specialists who can dive deeper into your problem. Would you like me to transfer you to a human representative?";
    offerHumanTransfer = true;
  } else if (websiteContent && websiteContent.textContent) {
    // Check if the query might be answerable from website content
    const contentLowercase = websiteContent.textContent.toLowerCase();
    const relevantContent = contentLowercase.includes(userQuery.split(" ")[0]);
    
    if (relevantContent) {
      response = defaultResponses[Math.floor(Math.random() * defaultResponses.length)] + " Based on our information, we can help with that. Can you be more specific about what you'd like to know?";
    } else {
      response = humanTransferSuggestions[Math.floor(Math.random() * humanTransferSuggestions.length)];
      offerHumanTransfer = true;
    }
  } else {
    // Fallback response
    response = defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  }
  
  return { response, offerHumanTransfer };
};

const quickReplies = [
  "I want to migrate to AxiomHost",
  "I want to create a website",
  "I need help choosing the right hosting plan",
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const [botVisible, setBotVisible] = useState(true);
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const [websiteContent, setWebsiteContent] = useState<WebsiteContent | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize chatbot with greeting when opened
  const handleOpenChat = () => {
    playSound("open");
    setIsOpen(true);
    if (messages.length === 0) {
      const initialMessage: Message = {
        id: "1",
        text: "Hello 👋\nHow can I help you today?",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages([initialMessage]);
    }
  };

  // Fetch website content for chatbot knowledge
  useEffect(() => {
    const fetchWebsiteContent = async () => {
      try {
        // Fetch the current page (landing page)
        const response = await fetch(window.location.href);
        const html = await response.text();
        
        // Parse HTML to extract meaningful content
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        
        // Extract title
        const title = doc.title || "Axiomhost";
        
        // Extract meta description
        const metaDescription = doc.querySelector("meta[name='description']")?.getAttribute("content") || "";
        
        // Extract text content, removing scripts and styles
        const scripts = doc.querySelectorAll("script, style, noscript");
        scripts.forEach(el => el.remove());
        const textContent = doc.body.innerText || "";
        
        // Clean up text content - remove extra whitespace and trim
        const cleanedText = textContent
          .split("\n")
          .filter(line => line.trim().length > 0)
          .slice(0, 100) // Limit to first 100 lines for relevance
          .join("\n");
        
        setWebsiteContent({
          title,
          description: metaDescription,
          textContent: cleanedText
        });
        
        console.log("Website content loaded successfully");
      } catch (error) {
        console.log("Could not fetch website content:", error);
        // Fallback to default content
        setWebsiteContent({
          title: "Axiomhost",
          description: "Professional hosting platform",
          textContent: "Axiomhost - Black Friday Sale - Up to 85% off"
        });
      }
    };
    
    fetchWebsiteContent();
  }, []);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Flying bot animation - comes back at random intervals or on hover
  useEffect(() => {
    if (isOpen) return;

    if (botVisible) {
      // Bot is visible, set timer to hide it after 3 seconds
      const hideTimer = setTimeout(() => {
        setBotVisible(false);
      }, 3000);
      return () => clearTimeout(hideTimer);
    } else {
      // Bot is hidden, set timer to show it again randomly
      const randomDelay = Math.random() * 5000 + 3000; // 3-8 seconds
      const showTimer = setTimeout(() => {
        setBotVisible(true);
      }, randomDelay);
      return () => clearTimeout(showTimer);
    }
  }, [botVisible, isOpen]);

  // When user hovers, make bot visible immediately
  useEffect(() => {
    if (isHoveringButton && !botVisible && !isOpen) {
      setBotVisible(true);
    }
  }, [isHoveringButton]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    playSound("send");

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    setShowQuickReplies(false);

    // Simulate bot response with delay using smart response generator
    setTimeout(() => {
      playSound("receive");
      const { response, offerHumanTransfer } = generateSmartResponse(input, websiteContent);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
      
      // If offering human transfer, add follow-up message
      if (offerHumanTransfer) {
        setTimeout(() => {
          const followUp: Message = {
            id: (Date.now() + 2).toString(),
            text: "Yes, transfer me to a representative",
            sender: "bot",
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, followUp]);
        }, 500);
      }
      
      setIsTyping(false);
    }, 800);
  };

  const handleQuickReply = (text: string) => {
    playSound("send");

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);
    setShowQuickReplies(false);

    // Simulate bot response with delay using smart response generator
    setTimeout(() => {
      playSound("receive");
      const { response, offerHumanTransfer } = generateSmartResponse(text, websiteContent);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      
      // If offering human transfer, add follow-up message
      if (offerHumanTransfer) {
        setTimeout(() => {
          const followUp: Message = {
            id: (Date.now() + 2).toString(),
            text: "Yes, transfer me to a representative",
            sender: "bot",
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, followUp]);
        }, 500);
      }
      
      setIsTyping(false);
    }, 800);
  };

  const handleDownloadChat = () => {
    const chatContent = messages
      .map((msg) => `${msg.sender === "user" ? "You" : "Optimus"}: ${msg.text}`)
      .join("\n\n");

    const element = document.createElement("a");
    const file = new Blob([chatContent], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `optimus-chat-${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleNewChat = () => {
    const initialMessage: Message = {
      id: "1",
      text: "Hello 👋\nHow can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    };
    setMessages([initialMessage]);
    setInput("");
    setShowQuickReplies(true);
    setIsTyping(false);
  };

  return (
    <>
      {/* Flying Bot Animation */}
      <AnimatePresence>
        {!isOpen && botVisible && (
          <motion.div
            key="flying-bot"
            initial={{ x: -100, y: 100, opacity: 0 }}
            animate={{ 
              x: 0, 
              y: [0, -40, -30, -40, -30], 
              opacity: 1
            }}
            transition={{
              x: { duration: 0.6, ease: "easeOut" },
              y: { duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
              opacity: { duration: 0.6 }
            }}
            exit={{
              x: 0,
              y: 100,
              opacity: 0,
              transition: { duration: 0.8 }
            }}
            className="fixed bottom-28 right-8 z-50 cursor-pointer"
          >
            {/* Waving animation */}
            <motion.div
              animate={{
                rotate: [0, 20, 0, 20, 0]
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatDelay: 1.5
              }}
              style={{ transformOrigin: "70% 30%" }}
              className="text-5xl inline-block"
            >
              🤖
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Bubble Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={handleOpenChat}
            onMouseEnter={() => setIsHoveringButton(true)}
            onMouseLeave={() => setIsHoveringButton(false)}
            className="fixed bottom-6 right-6 bg-gradient-to-r from-[#673DE6] to-[#EC1C65] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 z-50"
            data-testid="chatbot-toggle"
          >
            <MessageCircle size={18} />
            <span className="text-sm font-semibold">Ask Optimus</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window - Premium Design */}
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed bottom-6 right-6 w-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border-4 border-[#673DE6]"
            style={{ maxHeight: "540px" }}
          >
            {/* Header - Clean */}
            <div className="flex-shrink-0 bg-white p-4 flex items-center justify-between border-b border-slate-100">
              <h3 className="font-bold text-lg text-[#1D1E2C]">Optimus</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownloadChat}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-[#1D1E2C]"
                  data-testid="chatbot-download"
                  title="Download chat"
                >
                  <Download size={18} />
                </button>
                <button
                  onClick={handleNewChat}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-[#1D1E2C]"
                  data-testid="chatbot-new"
                  title="New chat"
                >
                  <Edit2 size={18} />
                </button>
                <button
                  onClick={() => setIsMinimized(true)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-[#1D1E2C]"
                  data-testid="chatbot-minimize"
                  title="Hide chat"
                >
                  <ChevronDown size={18} />
                </button>
              </div>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white min-h-0">
              {/* Initial Greeting - Centered */}
              {showQuickReplies && messages.length === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center text-center space-y-3 mb-4"
                >
                  {/* Logo Icon */}
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 bg-gradient-to-br from-[#673DE6] to-[#EC1C65] rounded-lg flex items-center justify-center text-lg"
                  >
                    ✨
                  </motion.div>
                  <div>
                    <h2 className="text-lg font-bold text-[#1D1E2C] mb-1">Hello 👋</h2>
                    <p className="text-sm text-slate-600">How can I help you today?</p>
                  </div>
                </motion.div>
              )}

              {/* Regular Messages */}
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs px-4 py-3 rounded-xl text-sm ${
                      message.sender === "user"
                        ? "bg-[#673DE6] text-white rounded-br-none"
                        : "bg-slate-100 text-[#1D1E2C] rounded-bl-none"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-slate-100 text-[#1D1E2C] px-4 py-3 rounded-xl border border-slate-200 rounded-bl-none">
                    <div className="flex gap-2">
                      <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                        className="w-2 h-2 bg-[#673DE6] rounded-full"
                      />
                      <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.1 }}
                        className="w-2 h-2 bg-[#673DE6] rounded-full"
                      />
                      <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        className="w-2 h-2 bg-[#673DE6] rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Quick Reply Buttons */}
              {showQuickReplies && messages.length === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="space-y-2 mt-3"
                >
                  {quickReplies.map((reply, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuickReply(reply)}
                      className="w-full text-left px-3 py-2 bg-slate-50 hover:bg-slate-100 text-[#1D1E2C] rounded-lg text-xs font-medium transition-colors border border-slate-200 flex items-center gap-2 group"
                      data-testid={`quick-reply-${idx}`}
                    >
                      <ArrowUpRight size={14} className="text-slate-400 group-hover:text-[#673DE6] transition-colors flex-shrink-0" />
                      <span>{reply}</span>
                    </button>
                  ))}
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <div className="flex-shrink-0 p-3 border-t border-slate-100 bg-white">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask Optimus anything..."
                  className="flex-1 px-3 py-2 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#673DE6] text-sm"
                  data-testid="chatbot-input"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="bg-gradient-to-r from-[#673DE6] to-[#EC1C65] text-white p-2 rounded-full hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                  data-testid="chatbot-send"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>

            {/* Footer Disclaimer */}
            <div className="flex-shrink-0 px-3 py-2 bg-slate-50 border-t border-slate-100 text-center">
              <p className="text-xs text-slate-500">Optimus can make mistakes. Double-check replies.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Minimized Tab */}
      <AnimatePresence>
        {isOpen && isMinimized && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            onClick={() => {
              setIsMinimized(false);
              if (messages.length === 0) {
                const initialMessage: Message = {
                  id: "1",
                  text: "Hello 👋\nHow can I help you today?",
                  sender: "bot",
                  timestamp: new Date(),
                };
                setMessages([initialMessage]);
              }
            }}
            className="fixed bottom-6 right-6 bg-gradient-to-r from-[#673DE6] to-[#EC1C65] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 z-50"
            data-testid="chatbot-expand"
          >
            <MessageCircle size={18} />
            <span className="text-sm font-semibold">Ask Optimus</span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
