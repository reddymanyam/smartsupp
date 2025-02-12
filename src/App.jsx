import './App.css'
import Sidebar from './components/Sidebar'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatApp from './components/Chat/ChatApp';
import ChatComponent from './components/ChatComponent';
import Userpage from './components/User/Userpage';
import Homepage from './components/Home/HomePage';
import Chats from './components/Chatt/Chats';
import SettingsPage from './components/Settings/SettingsPage';
import Auth from './components/Auth/Auth';
import { Stack } from '@mui/material';


const UserRapper = () => {
  return (
    <Stack justifyContent='center' alignItems='center'  >
      <Stack width='80%' justifyContent='center' alignItems='center'>
        <Userpage />
      </Stack>
    </Stack>
  )
}

const App = () => {
  return (

    <Router>
 
      <div style={{ width: "100%", gap:"2%" }}>
        <div style={{width:"7%"}}>
          <Sidebar />
        </div>
        <div style={{ width: "93%" }}>
          <Routes>
            <Route path='/' element={<Auth />} />
            <Route path='/user' element={<UserRapper />} />
            {/* <Route path="/" element={<Homepage />} /> */}
            <Route path="/chat" element={<Chats />} />
            {/* <Route path="/robot" element={<RobotPage />} /> */}
            {/* <Route path="/users" element={<ChatComponent /> } /> */}
            {/* <Route path="/stats" element={<StatsPage />} /> */}
            <Route path="/settings" element={<SettingsPage />} />
            {/* <Route path="/help" element={<HelpPage />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
