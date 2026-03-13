import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, User } from 'lucide-react';
import { generateKumarReply } from '../lib/ai/kumarBrain';
import { submitLead } from '../lib/leadService';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
};

type LeadState = 'idle' | 'collecting_industry' | 'collecting_team_size' | 'collecting_goal' | 'collecting_email';

const CHAT_GREETINGS = [
  "Hey there 👋 Welcome to SBCAIO.",
  "Hi! Glad you stopped by.",
  "Hello 👋 What brings you here today?",
  "Hey! Exploring AI today?"
];

const SUGGESTIONS = [
  "Automate my business",
  "Explore AI solutions",
  "See automation examples",
  "Book a consultation",
];

const BUBBLE_GREETINGS = [
  "Hi 👋",
  "Welcome to SBCAIO",
  "Got any AI questions today?",
  "I'm Kumar — feel free to ask anything."
];

const Mascot = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="25" y="30" width="50" height="50" rx="20" fill="currentColor" />
    <rect x="32" y="42" width="36" height="20" rx="10" fill="#0a0a0a" />
    <circle cx="42" cy="52" r="3.5" fill="#22c55e" />
    <circle cx="58" cy="52" r="3.5" fill="#22c55e" />
    <path d="M 50 30 L 50 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <circle cx="50" cy="15" r="5" fill="currentColor" />
    <motion.g 
      style={{ transformOrigin: "25px 60px" }}
      animate={{ rotate: [0, -30, 20, -30, 20, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
    >
      <rect x="10" y="55" width="15" height="12" rx="6" fill="currentColor" />
    </motion.g>
    <rect x="75" y="55" width="15" height="12" rx="6" fill="currentColor" />
  </svg>
);

const KumarAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => [{
    id: '1',
    text: CHAT_GREETINGS[Math.floor(Math.random() * CHAT_GREETINGS.length)],
    sender: 'assistant',
    timestamp: new Date(),
  }]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [greeting, setGreeting] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [leadState, setLeadState] = useState<LeadState>('idle');
  const [leadData, setLeadData] = useState({ industry: '', teamSize: '', automationGoal: '', email: '' });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setGreeting(null);
      return;
    }

    const showGreeting = () => {
      const randomGreeting = BUBBLE_GREETINGS[Math.floor(Math.random() * BUBBLE_GREETINGS.length)];
      setGreeting(randomGreeting);
      
      setTimeout(() => {
        setGreeting(null);
      }, 5000);
    };

    const initialTimer = setTimeout(showGreeting, 3000);
    const intervalTimer = setInterval(showGreeting, 15000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, [isOpen]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const newUserMsg: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    if (leadState === 'collecting_industry') {
      setLeadData(prev => ({ ...prev, industry: text }));
      setLeadState('collecting_team_size');
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: "Got it. How many employees are in your team?",
        sender: 'assistant',
        timestamp: new Date(),
      }]);
      setIsTyping(false);
      return;
    }

    if (leadState === 'collecting_team_size') {
      setLeadData(prev => ({ ...prev, teamSize: text }));
      setLeadState('collecting_goal');
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: "Thanks. What process would you like to automate first?",
        sender: 'assistant',
        timestamp: new Date(),
      }]);
      setIsTyping(false);
      return;
    }

    if (leadState === 'collecting_goal') {
      setLeadData(prev => ({ ...prev, automationGoal: text }));
      setLeadState('collecting_email');
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: "Great. Finally, what's your best email address so our team can reach out?",
        sender: 'assistant',
        timestamp: new Date(),
      }]);
      setIsTyping(false);
      return;
    }

    if (leadState === 'collecting_email') {
      const finalData = { ...leadData, email: text };
      setLeadData(finalData);
      setLeadState('idle');
      
      await submitLead({
        ...finalData,
        source: 'chatbot'
      });

      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: "Perfect. I've generated a basic automation strategy for your business. Our team will reach out soon with more details.",
        sender: 'assistant',
        timestamp: new Date(),
      }]);
      setIsTyping(false);
      return;
    }

    const allMessages = [...messages, newUserMsg];
    const recentMessages = allMessages.slice(-5);
    const conversationHistory = recentMessages.map(msg => 
      `${msg.sender === 'user' ? 'User' : 'Kumar'}: ${msg.text}`
    ).join('\n');

    try {
      let replyText = await generateKumarReply(conversationHistory);
      
      // Intercept Gemini's qualification questions to start our step-by-step flow
      const lowerReply = replyText.toLowerCase();
      if (lowerReply.includes('what industry') || (lowerReply.includes('industry') && lowerReply.includes('employees'))) {
        setLeadState('collecting_industry');
        replyText = "Great! To get started, what industry are you in?";
      }

      const newAssistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: replyText,
        sender: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newAssistantMsg]);
    } catch (error) {
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm having a little trouble connecting to my brain right now. Please try again in a moment!",
        sender: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .kumar-chat-container {
            position: fixed !important;
            left: 0 !important;
            right: 0 !important;
            margin: 0 auto !important;
            width: calc(100% - 20px) !important;
            max-width: 380px !important;
            bottom: 90px !important;
            z-index: 50 !important;
          }
        }
      `}</style>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="kumar-chat-container mb-4 w-[calc(100vw-2rem)] sm:w-[380px] h-[520px] max-h-[calc(100vh-8rem)] bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Header */}
            <div className="p-4 bg-gradient-to-r from-green-900/40 to-green-800/40 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-400 p-[1px]">
                  <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center">
                    <Mascot size={24} className="text-green-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm flex items-center">
                    Kumar
                  </h3>
                  <p className="text-green-400/80 text-xs">SBCAIO Automation Consultant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 ${
                      msg.sender === 'user' 
                        ? 'bg-white/10 ml-2' 
                        : 'bg-gradient-to-br from-green-500 to-green-400 mr-2'
                    }`}>
                      {msg.sender === 'user' ? <User size={16} className="text-white" /> : <Mascot size={20} className="text-white" />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm whitespace-pre-wrap ${
                      msg.sender === 'user'
                        ? 'bg-green-500 text-black rounded-tr-sm'
                        : 'bg-gradient-to-br from-green-900/20 to-green-800/20 border border-green-500/30 text-gray-200 rounded-tl-sm'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex max-w-[85%] flex-row">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-400 mr-2 flex items-center justify-center mt-1">
                      <Mascot size={20} className="text-white" />
                    </div>
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-green-900/20 to-green-800/20 border border-green-500/30 rounded-tl-sm flex space-x-1 items-center">
                      <motion.div className="w-1.5 h-1.5 bg-green-400 rounded-full" animate={{ y: [0, -3, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} />
                      <motion.div className="w-1.5 h-1.5 bg-green-400 rounded-full" animate={{ y: [0, -3, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} />
                      <motion.div className="w-1.5 h-1.5 bg-green-400 rounded-full" animate={{ y: [0, -3, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} />
                    </div>
                  </div>
                </motion.div>
              )}
              
              {messages.length === 1 && !isTyping && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col space-y-2 mt-4"
                >
                  {SUGGESTIONS.map((suggestion, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(suggestion)}
                      className="text-left px-4 py-2 text-xs text-green-300 bg-green-900/20 hover:bg-green-900/40 border border-green-500/30 hover:border-green-500/60 hover:shadow-[0_0_10px_rgba(34,197,94,0.2)] rounded-xl transition-all"
                    >
                      {suggestion}
                    </button>
                  ))}
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/10 bg-black/50">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(inputValue);
                }}
                className="relative flex items-center"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask Kumar about automating your business..."
                  className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-4 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 transition-all"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="absolute right-1 w-10 h-10 rounded-full bg-gradient-to-r from-green-600 to-green-500 flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_15px_rgba(34,197,94,0.5)] transition-all"
                >
                  <Send size={16} className="ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button and Greeting */}
      <div className="relative">
        <AnimatePresence>
          {greeting && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="absolute bottom-full right-0 mb-6 w-max max-w-[calc(100vw-4rem)] sm:max-w-[260px] px-4 py-3 bg-[#0a0a0a]/90 backdrop-blur-md border border-green-500/40 rounded-2xl shadow-[0_0_15px_rgba(34,197,94,0.35)] z-50 pointer-events-none"
            >
              <p className="text-green-300 text-sm tracking-wide font-medium leading-relaxed">
                {greeting}
              </p>
              {/* Speech Bubble Arrow */}
              <div className="absolute -bottom-[7px] right-6 w-3.5 h-3.5 bg-[#0a0a0a] border-b border-r border-green-500/40 transform rotate-45"></div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          animate={!isOpen ? { y: [0, -8, 0] } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setIsOpen(!isOpen);
            setGreeting(null);
          }}
          className={`w-14 h-14 rounded-full flex items-center justify-center transition-all relative ${
            isOpen 
              ? 'bg-white/10 text-white shadow-[0_0_20px_rgba(34,197,94,0.3)]' 
              : 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-[0_0_25px_rgba(34,197,94,0.6)]'
          }`}
          aria-label="Toggle chat"
        >
          {/* Soft green glow pulse */}
          {!isOpen && (
            <motion.div 
              className="absolute inset-0 rounded-full bg-green-500 opacity-50"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
          <div className="relative z-10 flex items-center justify-center">
            {isOpen ? <X size={24} /> : <Mascot size={32} className="text-white" />}
          </div>
        </motion.button>
      </div>
    </div>
    </>
  );
};

export default KumarAssistant;
