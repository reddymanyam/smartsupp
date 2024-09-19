import React, { useEffect, useState } from 'react';
import { ChatContainer, MessageList, Message, MessageInput } from '@chatscope/chat-ui-kit-react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import axios from 'axios';

const ChatComponent = ({ openchat }) => {
  const [messages, setMessages] = useState([
    {
      message: "Hello! How can I assist you today?",
      sender: "bot",
      direction: "incoming"
    }
  ]);

  useEffect(() => {
      axios.get("http://localhost:4000/users")
      .then((res)=>{
        const chatObj = res.data.find((chat)=>chat.id === openchat);
        setMessages(chatObj.messages);
      })
      .catch((err)=>{
        console.log("ERr = ", err);
      })
  },[openchat])

  const handleSend = (message) => {
    setMessages([...messages, { message, sender: "user", direction: "outgoing" }]);
  };

  return (
    <div style={{ height: "500px", width: "700px" }}>
      <ChatContainer>
        <MessageList>
          {messages.map((msg, index) => (
            <Message
              key={msg.timestamp}
              model={{
                message: msg.text,
                sentTime: msg.timestamp,
                sender: msg.sentBy,
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
