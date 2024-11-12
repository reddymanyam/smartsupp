import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import OpenChats from './OpenChats';
import ResolvedChats from './ResolvedChats';

export default function LeftBar({ userData, setOpenchat, onUserselct }) {

    const [mainTab, setMainTab] = useState(0); 
    const [resolvedTab, setResolvedTab] = useState(0); 

    const handleMainTabChange = (event, newValue) => {
        setMainTab(newValue);
    };
 
    const handleResolvedTabChange = (event, newValue) => {
        setResolvedTab(newValue);
    };

    return (
        <Box >
            {/* Main Tabs for Open and Resolved */}
            <Tabs
                value={mainTab}
                onChange={handleMainTabChange}
                indicatorColor="primary"
                textColor="primary"
                centered
               
            >
                <Tab label="Open"  sx={{ fontWeight: 'bold' }} />
                <Tab label="Resolved"  sx={{ fontWeight: 'bold' }} />
            </Tabs>

            {/* Open Section Tabs: All, New */}
            {mainTab === 0 ?
                <OpenChats userData={userData} setOpenchat={setOpenchat} onUserselct={onUserselct}/>
                :
                <ResolvedChats 
                    value={resolvedTab} userData={userData} onUserselct={onUserselct}
                    onChange={handleResolvedTabChange}
                    setOpenchat={setOpenchat}
                    indicatorColor="primary"
                    textColor="primary"
                >
                </ResolvedChats>
            }
        </Box>
    )
}
