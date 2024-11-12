import React, { useState } from 'react';
import { ChatContainer, MessageList, Message, MessageInput } from '@chatscope/chat-ui-kit-react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';

const ChatComponent = () => {
  const [messages, setMessages] = useState([
    {
      message: "Hello! How can I assist you today?",
      sender: "bot",
      direction: "incoming"
    }
  ]);

  const handleSend = (message) => {
    setMessages([...messages, { message, sender: "user", direction: "outgoing" }]);
  };

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <ChatContainer>
        <MessageList>
          {messages.map((msg, index) => (
            <Message
              key={index}
              model={{
                message: msg.message,
                sentTime: "just now",
                sender: msg.sender,
                direction: msg.direction
              }}
            />
          ))}
        </MessageList>
        <MessageInput placeholder="Type a message..." onSend={handleSend} />
      </ChatContainer>
    </div>
  );
};

export default ChatComponent;
