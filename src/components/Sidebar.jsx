import React from 'react';
import { Home, Chat, SmartToy, People, BarChart, Settings, HelpOutline, AccountCircle } from '@mui/icons-material';
import { Box, IconButton, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: '80px', bgcolor: '#2f365f', height: '120vh', position: "fixed", display: 'flex', flexDirection: 'column', justifyContent:'space-between', alignItems: 'center',top:0, left:0 }}>
      {/* User Icon */}
      <Stack>
        <IconButton sx={{ color: '#ffffff', margin: '10px 0' }} onClick={() => navigate('/user')}>
          <AccountCircle />
        </IconButton>
        {/* <IconButton sx={{ color: '#ffffff', margin: '10px 0' }} onClick={() => navigate('/')}>
          <Home />
        </IconButton> */}
        <IconButton sx={{ color: '#ffffff', margin: '10px 0' }} onClick={() => navigate('/chat')}>
          <Chat />
        </IconButton>
        {/* <IconButton sx={{ color: '#ffffff', margin: '10px 0' }} onClick={() => navigate('/robot')}>
          <SmartToy />
        </IconButton> */}
        {/* <IconButton sx={{ color: '#ffffff', margin: '10px 0' }} onClick={() => navigate('/users')}>
          <People />
        </IconButton> */}
        {/* <IconButton sx={{ color: '#ffffff', margin: '10px 0' }} onClick={() => navigate('/stats')}>
          <BarChart />
        </IconButton> */}
        <IconButton sx={{ color: '#ffffff', margin: '10px 0 ' }} onClick={() => navigate('/settings')}>
          <Settings />
        </IconButton>
        {/* <IconButton sx={{ color: '#ffffff', margin: '10px 0' }} onClick={() => navigate('/help')}>
          <HelpOutline />
        </IconButton> */}
      </Stack>
    </Box>
  );
};

export default Sidebar;

