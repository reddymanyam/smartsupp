import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import FlashOnRoundedIcon from '@mui/icons-material/FlashOnRounded';

export default function Left({handleSelectList, selectedList}) {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List >
          <ListItem disablePadding>
            <ListItemButton onClick={()=>{handleSelectList('Profile')}} style={{backgroundColor: selectedList === 'Profile'? "lightblue":"transparent" }}>
              <ListItemIcon>
                <PersonOutlineRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" primaryTypographyProps={{ sx: {fontWeight:'bold'}}}  />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>{handleSelectList('ShortCuts')}} style={{backgroundColor: selectedList === "ShortCuts" ? "lightblue" :"transparent"}}>
              <ListItemIcon>
                <FlashOnRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="ShortCuts" primaryTypographyProps={{sx:{fontWeight:'bold'}}} />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
     
      
    </Box>
  );
}

