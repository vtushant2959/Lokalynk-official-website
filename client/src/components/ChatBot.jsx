import { useState, useEffect, useRef } from "react";
import api from "../utils/api";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

const SERVICES = [
  "Website Development", "Lead Generation", "SEO Services",
  "Social Media Marketing", "Performance Marketing", "AI Automation",
  "GEO Services", "App Development", "Other / Not Sure",
];

const BUDGETS = [
  "Under â‚¹10,000/mo", "â‚¹10,000 â€“ â‚¹25,000/mo",
  "â‚¹25,000 â€“ â‚¹50,000/mo", "â‚¹50,000+/mo",
];

const BOT_DELAY = 700;

function botMsg(text, options = null) {
  return { from: "bot", text, options, id: Date.now() + Math.random() };
}
function userMsg(text) {
  return { from: "user", text, id: Date.now() + Math.random() };
}

const INITIAL = [
  botMsg("Hi there! ðŸ‘‹ I'm Loka, your digital growth assistant.", null),
  botMsg("Which service are you looking for today?", SERVICES),
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL);
  const [step, setStep] = useState("service"); // service â†’ budget â†’ name â†’ phone â†’ done
  const [lead, setLead] = useState({ service: "", budget: "", name: "", phone: "" });
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(1);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // Show chat bubble notification after 8 seconds
  useEffect(() => {
    const t = setTimeout(() => setUnread(1), 8000);
    return () => clearTimeout(t);
  }, []);

  const addBotMsg = (text, options = null) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, botMsg(text, options)]);
    }, BOT_DELAY);
  };

  const handleOption = (option) => {
    setMessages(prev => [...prev, userMsg(option)]);

    if (step === "service") {
      setLead(prev => ({ ...prev, service: option }));
      setStep("budget");
      setTimeout(() => addBotMsg("Great choice! ðŸŽ¯ What's your approximate monthly budget?", BUDGETS), BOT_DELAY);
    } else if (step === "budget") {
      setLead(prev => ({ ...prev, budget: option }));
      setStep("name");
      setTimeout(() => addBotMsg("Perfect! May I know your name?"), BOT_DELAY);
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const val = input.trim();
    setInput("");
    setMessages(prev => [...prev, userMsg(val)]);

    if (step === "name") {
      setLead(prev => ({ ...prev, name: val }));
      setStep("phone");
      setTimeout(() => addBotMsg(`Nice to meet you, ${val}! ðŸ˜Š What's the best phone number to reach you?`), BOT_DELAY);
    } else if (step === "phone") {
      const updatedLead = { ...lead, phone: val };
      setLead(updatedLead);
      setStep("done");

      setTyping(true);
      setTimeout(async () => {
        try {
          await api.post("/api/leads", { ...updatedLead, source: "chatbot" });
        } catch { /* silent */ }
        setTyping(false);
        setMessages(prev => [...prev,
          botMsg(`Thank you, ${lead.name}! âœ…`),
        ]);
        setTimeout(() => addBotMsg("Our expert will call you within 2 hours to discuss your " + lead.service + " requirements. ðŸš€"), BOT_DELAY);
        setTimeout(() => addBotMsg("Meanwhile, you can also WhatsApp us at +91-9625046221 for instant help! ðŸ’¬"), BOT_DELAY * 2);
      }, BOT_DELAY);
    } else if (step === "done") {
      setTimeout(() => addBotMsg("Our team will be in touch shortly! You can also call us at +91-9625046221. ðŸ“ž"), BOT_DELAY);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => { setOpen(!open); setUnread(0); }}
        className="fixed bottom-24 right-5 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-transform md:bottom-6"
        aria-label="Chat with us"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        {!open && unread > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-black flex items-center justify-center border-2 border-white">
            {unread}
          </span>
        )}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-44 right-5 z-50 w-80 md:w-96 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col md:bottom-24"
          style={{ maxHeight: "70vh" }}>
          {/* Header */}
          <div className="bg-gradient-brand p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-white font-black text-sm">Loka â€” Growth Assistant</div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white/80 text-xs">Online now Â· replies instantly</span>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="ml-auto text-white/70 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg) => (
              <div key={msg.id}>
                <div className={`flex items-end gap-2 ${msg.from === "user" ? "flex-row-reverse" : ""}`}>
                  {msg.from === "bot" && (
                    <div className="w-7 h-7 rounded-full bg-gradient-brand flex items-center justify-center shrink-0 shadow-sm">
                      <Bot className="w-3.5 h-3.5 text-white" />
                    </div>
                  )}
                  <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.from === "bot"
                      ? "bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-sm"
                      : "bg-gradient-brand text-white rounded-br-sm"
                  }`}>
                    {msg.text}
                  </div>
                </div>
                {msg.options && (
                  <div className="ml-9 mt-2 flex flex-wrap gap-2">
                    {msg.options.map(opt => (
                      <button key={opt} onClick={() => handleOption(opt)}
                        className="text-xs bg-white border border-blue-200 text-primary font-semibold px-3 py-1.5 rounded-full hover:bg-blue-50 hover:border-primary transition-all">
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {typing && (
              <div className="flex items-end gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-brand flex items-center justify-center shrink-0">
                  <Bot className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="bg-white border border-gray-100 shadow-sm px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1.5">
                  {[0, 1, 2].map(i => (
                    <div key={i} className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          {["name", "phone", "done"].includes(step) && (
            <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
              <input
                type={step === "phone" ? "tel" : "text"}
                placeholder={step === "name" ? "Type your name..." : step === "phone" ? "Your phone number..." : "Type a message..."}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSend()}
                className="flex-1 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-primary bg-gray-50 focus:bg-white transition-all"
              />
              <button onClick={handleSend}
                className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center text-white hover:opacity-90 transition-opacity shrink-0">
                <Send className="w-4 h-4" />
              </button>
            </div>
          )}

          <div className="bg-gray-50 border-t border-gray-100 py-2 text-center">
            <span className="text-[10px] text-gray-400">Powered by <span className="font-bold text-primary">Lokalynk</span> Â· ðŸ”’ Your data is secure</span>
          </div>
        </div>
      )}
    </>
  );
}

