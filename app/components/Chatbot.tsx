"use client";

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import styles from './Chatbot.module.css';

type Message = { id: string; role: 'user' | 'assistant'; content: string };

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 350, height: 500 });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = dimensions.width;
    const startHeight = dimensions.height;

    const handlePointerMove = (moveEvent: PointerEvent) => {
      // Anchored at bottom-right, so moving top-left (negative delta) INCREASES size
      const newWidth = Math.max(300, Math.min(window.innerWidth * 0.9, startWidth - (moveEvent.clientX - startX)));
      const newHeight = Math.max(400, Math.min(window.innerHeight * 0.8, startHeight - (moveEvent.clientY - startY)));
      setDimensions({ width: newWidth, height: newHeight });
    };

    const handlePointerUp = () => {
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
    };

    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    const botMessageId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, { id: botMessageId, role: 'assistant', content: '' }]);

    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://backend-of-bot.vercel.app';
      const response = await fetch(`${backendUrl}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!response.body) throw new Error("No response body");
      
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        const chunk = decoder.decode(value, { stream: true });
        setMessages(prev => prev.map(m => 
          m.id === botMessageId ? { ...m, content: m.content + chunk } : m
        ));
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => prev.map(m => m.id === botMessageId ? { ...m, content: "Sorry, I encountered an error. Please try again or check if the API key is configured." } : m));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.chatbotContainer}>
      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={styles.toggleButton}
          aria-label="Open Chat"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div 
          className={styles.chatWindow}
          style={{ width: `${dimensions.width}px`, height: `${dimensions.height}px` }}
        >
          {/* Top-Left Resize Handle */}
          <div 
            className={styles.resizerHandle} 
            onPointerDown={handlePointerDown}
            aria-label="Resize chat window"
          />

          {/* Header */}
          <div className={styles.header}>
            <div className={styles.headerTitle}>
              <MessageCircle size={20} />
              <span>Asish's AI Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className={styles.closeButton}>
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className={styles.messagesContainer}>
            {messages.length === 0 ? (
              <div className={styles.emptyState}>
                Hi! I'm an AI assistant. Ask me anything about Asish, his projects, or his experience!
              </div>
            ) : (
              messages.map(m => (
                <div key={m.id} className={`${styles.messageRow} ${styles[m.role]}`}>
                  <div className={`${styles.messageBubble} ${styles[m.role]}`}>
                    {m.role === 'assistant' ? (
                      <ReactMarkdown>{m.content}</ReactMarkdown>
                    ) : (
                      m.content
                    )}
                  </div>
                </div>
              ))
            )}
            {isLoading && messages.length > 0 && messages[messages.length - 1].role === 'user' && (
              <div className={styles.messageRow}>
                <div className={styles.loadingBubble}>
                  <span>.</span><span>.</span><span>.</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className={styles.inputArea}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className={styles.input}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className={styles.submitButton}
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}