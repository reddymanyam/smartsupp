import React, { useEffect, useState } from 'react';
import { ChatContainer, MessageList, Message, MessageInput } from '@chatscope/chat-ui-kit-react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import axios from 'axios';

const ChatComponent = ({ openchat }) => {
  const [messages, setMessages] = useState([
    {
      message: "Hello! How can I assist you today?",
      sender: "bot",
      direction: "incoming",
      timestamp: new Date().toISOString() 
    }
  ]);
  const [chat, setChat] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:4000/users")
      .then((res) => {
        const chatObj = res.data.find((chat) => chat.id === openchat);
        if (chatObj) {
          setMessages(chatObj.messages);
          setChat(chatObj);
        }
      })
      .catch((err) => {
        console.log("Error fetching messages: ", err);
      });
  }, [openchat]);

  const handleSend = (messageText) => {
    const newMessage = {
      messageId: Math.floor(Math.random() * 100000),
      text: messageText,
      timestamp: new Date().toISOString(),
      sentBy: "John Doe",
      status: "sent",
      direction: "outgoing"
    };

    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    chat.messages = updatedMessages
    
    axios.put(`http://localhost:4000/users/${openchat}`, chat)
      .then(() => {
        console.log("Messages updated successfully.");
      })
      .catch((err) => {
        console.log("Error updating messages: ", err);
      });
  };

  return (
    <div style={{ height: "500px", width: "700px" }}>
      <ChatContainer style={{height:"580px", width:"650px"}}>
        <MessageList style={{width:"650px"}}>
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
        <MessageInput placeholder="Type a message..." onSend={handleSend} style={{width:"650px"}} />
      </ChatContainer>
    </div>
  );
};

export default ChatComponent;
