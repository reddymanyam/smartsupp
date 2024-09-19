import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import OpenChats from './OpenChats';
import ResolvedChats from './ResolvedChats';
// import ResolvedChats from './ResolvedChats';

export default function LeftBar({ userData, setOpenchat, onUserselct }) {

    const [mainTab, setMainTab] = useState(0); // Open or Resolved
    const [resolvedTab, setResolvedTab] = useState(0); // Sub-tabs for Resolved: Agents, Chatbots

    const handleMainTabChange = (event, newValue) => {
        setMainTab(newValue);
    };

    const handleResolvedTabChange = (event, newValue) => {
        setResolvedTab(newValue);
    };

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
            {mainTab === 0 ?
                <OpenChats userData={userData} setOpenchat={setOpenchat} onUserselct={onUserselct}/>
                :
                <ResolvedChats 
                    value={resolvedTab} userData={userData} onUserselct={onUserselct}
                    onChange={handleResolvedTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                >
                </ResolvedChats>
            }
        </Box>
    )
}
