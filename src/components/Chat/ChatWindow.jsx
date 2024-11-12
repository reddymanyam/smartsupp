import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';

const ChatWindow = ({ user, messages, onSendMessage }) => {
    const [message, setMessage] = useState('');

    const handleSend = () => {
        if (message.trim()) {
            onSendMessage(message);
            setMessage('');
        }
    };

    return (
        <Paper elevation={2} sx={styles.paper}>
            <Box sx={styles.header}>
                <Typography variant="h6">Chat with {user || 'Select a user'}</Typography>
            </Box>
            <Box sx={styles.messagesContainer}>
                {messages.map((msg, index) => (
                    <Box key={index} sx={styles.message}>
                        {msg}
                    </Box>
                ))}
            </Box>
            <Box sx={styles.inputContainer}>
                <TextField
                    variant="outlined"
                    size="small"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    sx={styles.input}
                    placeholder="Type a message..."
                />
                <Button onClick={handleSend} variant="contained" sx={styles.button}>Send</Button>
            </Box>
        </Paper>
    );
};

const styles = {
    paper: {
        flex: 1,
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        height: '100%',
        overflow: 'hidden',
    },
    header: {
        marginBottom: '10px',
    },
    messagesContainer: {
        flex: 1,
        overflowY: 'auto',
        marginBottom: '10px',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        backgroundColor: '#fafafa',
    },
    message: {
        padding: '5px 10px',
        margin: '5px 0',
        borderRadius: '4px',
        backgroundColor: '#e0e0e0',
    },
    inputContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        marginRight: '10px',
    },
    button: {
        flexShrink: 0,
    }
};

export default ChatWindow;