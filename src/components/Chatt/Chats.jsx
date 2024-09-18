import React, { useState } from 'react';
import { Box, Typography, Tabs, Tab, TextField, InputAdornment, IconButton, List, ListItem, ListItemText, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DownloadIcon from '@mui/icons-material/Download';

// Data for Open and Resolved sections
const openConversations = [
 
];

const resolvedConversations = [
 
];

const Chats = () => {
  const [mainTab, setMainTab] = useState(0); // Open or Resolved
  const [openTab, setOpenTab] = useState(0); // Sub-tabs for Open: All, Primary, New, Mine
  const [resolvedTab, setResolvedTab] = useState(0); // Sub-tabs for Resolved: Agents, Chatbots

  const handleMainTabChange = (event, newValue) => {
    setMainTab(newValue);
  };

  const handleOpenTabChange = (event, newValue) => {
    setOpenTab(newValue);
  };

  const handleResolvedTabChange = (event, newValue) => {
    setResolvedTab(newValue);
  };

  // Render conversation list
  const renderConversations = (conversations) => (
    <List>
      {conversations.map((conv) => (
        <React.Fragment key={conv.id}>
          <ListItem>
            <ListItemText
              primary={conv.name}
              secondary={
                <>
                  <Typography component="span" variant="body2">
                    {conv.message}
                  </Typography>
                  <Typography component="span" variant="caption" sx={{ display: 'block', color: '#666' }}>
                    {conv.time}
                  </Typography>
                </>
              }
            />
            <IconButton>
              <DownloadIcon />
            </IconButton>
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );

  return (
    <Box p={3}>
      {/* Main Tabs for Open and Resolved */}
      <Tabs
        value={mainTab}
        onChange={handleMainTabChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Open" />
        <Tab label="Resolved" />
      </Tabs>

      {/* Open Section Tabs: All, Primary, New, Mine */}
      {mainTab === 0 && (
        <>
          <Tabs
            value={openTab}
            onChange={handleOpenTabChange}
            indicatorColor="primary"
            textColor="primary"
            sx={{ mt: 2 }}
          >
            <Tab label="All" />
            <Tab label="Primary" />
            <Tab label="New" />
            <Tab label="Mine" />
          </Tabs>

          <Box mt={3}>
            <Typography variant="body2" sx={{ color: '#666' }}>
              {openConversations.length} conversations
            </Typography>
            {/* Display Open Conversations */}
            {renderConversations(openConversations)}
          </Box>
        </>
      )}

      {/* Resolved Section Tabs: Agents, Chatbots, and Search */}
      {mainTab === 1 && (
        <>
          <Tabs
            value={resolvedTab}
            onChange={handleResolvedTabChange}
            indicatorColor="primary"
            textColor="primary"
            sx={{ mt: 2 }}
          >
            <Tab label="Agents" />
            <Tab label="Chatbots" />
          </Tabs>

          {/* Search bar with calendar icon */}
          <Box display="flex" alignItems="center" mt={2}>
            <TextField
              variant="outlined"
              placeholder="Search..."
              size="small"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <CalendarTodayIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box mt={3}>
            <Typography variant="body2" sx={{ color: '#666' }}>
              {resolvedConversations.length} conversations
            </Typography>
            {/* Display Resolved Conversations */}
            {renderConversations(resolvedConversations)}
          </Box>
        </>
      )}

      {/* Footer */}
      <Box textAlign="center" mt={2}>
        <Typography variant="caption" sx={{ color: '#666' }}>
          No agents available
        </Typography>
      </Box>
    </Box>
  );
};

export default Chats;
