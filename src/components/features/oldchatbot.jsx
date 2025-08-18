import React, { useState, useEffect, useRef } from "react";
import "../styles/Chatbot.css";

// Gemini API
const API_KEY = "AIzaSyC8CnLwARRo18_kLxOkKPv-0GLcN52Io-E";
const GEMINI_API_URL =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" +
    API_KEY;


const SYSTEM_PROMPT = `
You are Josiah Danielle Gallenero's personal portfolio assistant.
Always answer questions based on the following information:

- Portfolio: Josiah’s personal portfolio showcases his experience, projects, and skills as a web developer.
- Projects: 
  1) A website built with HTML, CSS, JavaScript, and PHP
  2) A task management app using HTML, CSS, JavaScript, and Bootstrap 5
  3) A blog site using PHP, MySQL, and Bootstrap 5
- Skills: HTML5, CSS3, JavaScript, Bootstrap 5, MySQL, PHP
- Experience: Almost 2 years in front-end development and 1.5 years in back-end development
- Education: 2nd-year Information Technology student at PHINMA University of Iloilo
- Contact: josiahdanielle09gallenero@gmail.com

If a user asks something unrelated (like politics or random stuff), politely redirect them back to portfolio-related topics.
`;

const Chatbot = () => {
    const [chatOpened, setChatOpened] = useState(false);
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const inputRef = useRef(null);
    const chatBoxRef = useRef(null);

    const suggestions = [
        { text: "Tell me about your portfolio", value: "What is this portfolio about?" },
        { text: "Show me your projects", value: "Can you show me your projects?" },
        { text: "What are your skills?", value: "What skills do you have?" },
        { text: "Work experience", value: "Tell me about your work experience" },
        { text: "Contact information", value: "How can I contact you?" },
    ];

    useEffect(() => {
        if (chatOpened) {
            inputRef.current?.focus();

            setTimeout(() => {
                appendMessage("bot", "🤖 Hello, I’m powered by Gemini AI! How can I help you today?");
                setShowSuggestions(true);
            }, 500);
        } else {
            setMessages([]);
        }
    }, [chatOpened]);

    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [messages]);

    const toggleChat = () => {
        setChatOpened(!chatOpened);
    };

    const appendMessage = (sender, text) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { sender, text, timestamp: new Date() },
        ]);
    };

    const handleUserInput = (inputText) => {
        setUserInput(inputText);
    };

    const sendMessage = async () => {
        const trimmedInput = userInput.trim();
        if (!trimmedInput) return;

        appendMessage("user", trimmedInput);
        setUserInput("");
        setShowSuggestions(false);
        setIsTyping(true);

        try {
            const response = await fetch(GEMINI_API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: trimmedInput }] }],
                }),
            });

            const data = await response.json();
            const botReply =
                data?.candidates?.[0]?.content?.parts?.[0]?.text ||
                "⚠️ Sorry, I couldn’t get a response.";

            setIsTyping(false);
            appendMessage("bot", botReply);
            setShowSuggestions(true);
        } catch (error) {
            setIsTyping(false);
            appendMessage("bot", "⚠️ Error: Unable to connect to Gemini AI.");
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setUserInput(suggestion);
        setTimeout(() => {
            sendMessage();
        }, 100);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    };

    return (
        <>
            <button
                className={`chat-button ${!chatOpened && messages.length > 0 ? "has-notification" : ""}`}
                onClick={toggleChat}
                aria-label="Chat with Gemini assistant"
            >
                {chatOpened ? "✕" : "💬"}
            </button>

            {chatOpened && (
                <div className="chat-modal">
                    <div className="chat-header">
                        <div className="chat-title">
                            <div className="bot-avatar">🤖</div>
                            <div>
                                <div className="bot-name">Gemini Assistant</div>
                                <div className="bot-status">Online</div>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={toggleChat}
                            aria-label="Close chat"
                        ></button>
                    </div>

                    <div className="chat-box" ref={chatBoxRef}>
                        {messages.map((message, index) => (
                            <div key={index} className={`message ${message.sender}`}>
                                {message.text}
                                <div className="message-time">
                                    {message.timestamp?.toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="message bot typing">
                                <div className="typing-indicator">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="chat-footer">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                value={userInput}
                                onChange={(e) => handleUserInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Type a message..."
                                ref={inputRef}
                                aria-label="Type your message"
                            />
                            <button
                                className="btn btn-primary send-button"
                                onClick={sendMessage}
                                disabled={!userInput.trim()}
                                aria-label="Send message"
                            >
                                Send
                            </button>
                        </div>

                        {showSuggestions && (
                            <div className="suggestions-container">
                                {suggestions.map((suggestion, index) => (
                                    <button
                                        key={index}
                                        className="suggestion-chip"
                                        onClick={() => handleSuggestionClick(suggestion.value)}
                                    >
                                        {suggestion.text}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;