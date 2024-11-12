import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import ChatPersonIcons from './ChatPersonIcons';
import { Container, Box, Stack } from '@mui/material';

const ChatApp = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState({});

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const handleSendMessage = (message) => {
    setMessages((prevMessages) => ({
      ...prevMessages,
      [selectedUser]: [...(prevMessages[selectedUser] || []), message]
    }));
  };

  return (
    <Container>
      <Stack flexDirection='row' sx={styles.container}>
        <ChatPersonIcons onUserSelect={handleUserSelect} />
        <ChatWindow 
          user={selectedUser} 
          messages={messages[selectedUser] || []} 
          onSendMessage={handleSendMessage}
        />
      </Stack>
    </Container>
  );
};

const styles = {
  container: {
    height: '80vh',
    maxWidth: '1200px',
    margin: '0 auto',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#f9f9f9'
  }
};

export default ChatApp;