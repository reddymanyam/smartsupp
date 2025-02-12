// ChatPersonIcons.jsx
import React from 'react';
import { List, ListItem, ListItemText, Paper } from '@mui/material';

const users = ['Alice', 'Bob', 'Charlie'];

const ChatPersonIcons = ({ onUserSelect }) => {
  return (
    <Paper elevation={3} sx={styles.paper}>
      <List>
        {users.map((user) => (
          <ListItem 
            button 
            key={user} 
            onClick={() => onUserSelect(user)}
            sx={styles.listItem}
          >
            <ListItemText primary={user} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

const styles = {
  paper: {
    width: '300px',
    borderRight: '1px solid #ddd',
    backgroundColor: '#fff',
    padding: '10px',
    height: '100%',
  },
  listItem: {
    padding: '10px',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  }
};

export default ChatPersonIcons;