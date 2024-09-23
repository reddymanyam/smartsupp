import React, { useState } from 'react';
import { Box, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Select, MenuItem, Button, FormControlLabel, Checkbox } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function UserProfile() {
  const [showPassword, setShowPassword] = useState(false);
  const [language, setLanguage] = useState('English');
  const [subscribed, setSubscribed] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleLanguageChange = (event) => setLanguage(event.target.value);
  const handleSubscriptionChange = (event) => setSubscribed(event.target.checked);

  return (
    <Box sx={{ width: '100%', maxWidth: 600, marginLeft:'310px'}}>
      <h2>User Profile</h2>
    
      <InputLabel htmlFor="name" sx={{ fontWeight: 'bold', marginTop: '10px' }}>Name *</InputLabel>
      <TextField fullWidth id="name" defaultValue="Enter your Name" required sx={{ marginBottom: '15px' }} />

      <InputLabel htmlFor="email" sx={{ fontWeight: 'bold', marginTop: '10px' }}>Email *</InputLabel>
      <TextField fullWidth id="email" defaultValue="Enter your email" required sx={{ marginBottom: '15px' }} />

      <InputLabel htmlFor="password" sx={{ fontWeight: 'bold', marginTop: '10px' }}>Password</InputLabel>
      <FormControl fullWidth variant="outlined" sx={{ marginBottom: '15px' }}>
        <OutlinedInput
          id="password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
         
        />
      </FormControl>
      <Button variant="text" sx={{ textTransform: 'none' }}>Change password</Button>

      <InputLabel htmlFor="language" sx={{ fontWeight: 'bold', marginTop: '10px' }}>Dashboard Language</InputLabel>
      <FormControl fullWidth sx={{ marginBottom: '15px' }}>
        <Select
          id="language"
          value={language}
          onChange={handleLanguageChange}
        >
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="Spanish">Spanish</MenuItem>
          <MenuItem value="French">French</MenuItem>
        </Select>
      </FormControl>

      <InputLabel htmlFor="description" sx={{ fontWeight: 'bold', marginTop: '10px' }}>Description</InputLabel>
      <TextField
        id="description"
        placeholder="e.g., a job position or personal motto"
        multiline
        rows={4}
        fullWidth
        variant="outlined"
        sx={{ marginBottom: '15px' }}
      />

      <FormControlLabel
        control={
          <Checkbox checked={subscribed} onChange={handleSubscriptionChange} color="primary" />
        }
        label="Yes, I want to be in the loop about Smartsupp news"
        sx={{ marginBottom: '15px' }}
      />

      <Button variant="contained" color="primary" fullWidth>
        Save
      </Button>
    </Box>
  );
}
