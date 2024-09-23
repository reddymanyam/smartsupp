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

// // const HomePage = () => <div>Home Page</div>;
// // const ChatPage = () => <div>Chat Page</div>;
// const RobotPage = () => <div>Robot Page</div>;
// const StatsPage = () => <div>Stats Page</div>;
// // const SettingsPage = () => <div>Settings Page</div>;
// const HelpPage = () => <div>Help Page</div>;

const App = () => {
  return (
    
    <Router>
      
      <div style={{ display: 'flex'}}>
        <Sidebar />
        <div style={{ marginLeft: '80px' }}>
          <Routes>
          <Route path='/' element={<Auth />} />
            <Route path='/user' element={<Userpage />} />
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
