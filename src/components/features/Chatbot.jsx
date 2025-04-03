import React, { useState, useEffect, useRef } from 'react';
import '../styles/Chatbot.css';

const Chatbot = () => {
    const [chatOpened, setChatOpened] = useState(false);
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const inputRef = useRef(null);
    const chatBoxRef = useRef(null);

    const knowledgeBase = {
        'portfolio': 'This is my personal portfolio showcasing my experience, projects, and skills as a web developer.',
        'projects': 'My key projects include: 1) A website built with HTML, CSS, JavaScript, and PHP, 2) A task management app using HTML, CSS, JavaScript, and Bootstrap 5, 3) A blog site using PHP, MySQL, and Bootstrap 5.',
        'skills': 'My technical skills include: HTML5, CSS3, JavaScript, Bootstrap 5, MySQL, PHP. For more details, check the skills section.',
        'experience': 'I have almost 2 years of experience in front-end development and 1.5 years of experience in back-end development.',
        'education': 'I am a second-year student at PHINMA University of Iloilo, pursuing a degree in Information Technology. I am also gaining experience and skills in web development and UX/UI design.',
        'contact': 'You can reach me at josiahdanielle09gallenero@gmail.com or through the contact form on this portfolio.',
        'hello': 'Hello there! I\'m the portfolio assistant. How can I help you today?',
        'hi': 'Hi! Welcome to my portfolio. What would you like to know about my work?'
    };

    const suggestions = [
        { text: "Tell me about your portfolio", value: "What is this portfolio about?" },
        { text: "Show me your projects", value: "Can you show me your projects?" },
        { text: "What are your skills?", value: "What skills do you have?" },
        { text: "Work experience", value: "Tell me about your work experience" },
        { text: "Contact information", value: "How can I contact you?" }
    ];

    useEffect(() => {
        if (chatOpened) {
            inputRef.current?.focus();

            setTimeout(() => {
                appendMessage('bot', '🤖 Hello, welcome to my portfolio! How can I help you today?');
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

    const sendMessage = () => {
        const trimmedInput = userInput.trim();
        if (!trimmedInput) return;

        appendMessage('user', trimmedInput);
        setUserInput('');
        setShowSuggestions(false);
        setIsTyping(true);

        setTimeout(() => {
            setIsTyping(false);
            const response = getBotResponse(trimmedInput);
            appendMessage('bot', response);
            setShowSuggestions(true);
        }, Math.random() * 1000 + 500);
    };

    const getBotResponse = (message) => {
        const query = message.toLowerCase();

        for (const [key, value] of Object.entries(knowledgeBase)) {
            if (query.includes(key)) {
                return value;
            }
        }

        if (query.includes('who') && (query.includes('you') || query.includes('are'))) {
            return "I'm a virtual assistant for this portfolio, designed to help you learn about the developer's work and experience.";
        }

        if (query.includes('how') && query.includes('contact')) {
            return knowledgeBase.contact;
        }

        if (query.includes('when') && query.includes('available')) {
            return "The developer is currently available for freelance work and new opportunities. Would you like contact information?";
        }

        if (query.includes('thank')) {
            return "You're welcome! Is there anything else I can help you with?";
        }

        return "I'm not sure I understand. Could you try asking about my portfolio, projects, skills, or experience?";
    };

    const handleSuggestionClick = (suggestion) => {
        setUserInput(suggestion);
        setTimeout(() => {
            sendMessage();
        }, 100);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <>
            <button
                className={`chat-button ${!chatOpened && messages.length > 0 ? 'has-notification' : ''}`}
                onClick={toggleChat}
                aria-label="Chat with portfolio assistant"
            >
                {chatOpened ? '✕' : '💬'}
            </button>

            {chatOpened && (
                <div className="chat-modal">
                    <div className="chat-header">
                        <div className="chat-title">
                            <div className="bot-avatar">🤖</div>
                            <div>
                                <div className="bot-name">Portfolio Assistant</div>
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
                            <div
                                key={index}
                                className={`message ${message.sender}`}
                            >
                                {message.text}
                                <div className="message-time">
                                    {message.timestamp?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
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