import React, { useEffect, useState } from 'react'
import LeftBar from './LeftBar'
import RightBar from './RightBar'
import { Box, Stack } from '@mui/material'
import axios from 'axios'

export default function Chats() {

    const [userData, setUserData] = useState([]);
    const [openchat, setOpenchat] = useState('');
    const [resolvedchat, setResolvedchat] = useState('');

    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:4000/users");
            const data = response.data;
            console.log("Api data = ", data)
            setUserData(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getData()
    }, [])

    return (
        <Stack flexDirection="row" sx={{ height: '100vh', overflow: 'hidden' }} >

            <Box sx={{ width: "30%", borderRight: '1px solid #e0e0e0', overflowY: 'auto' }}>
                <LeftBar userData={userData} setOpenchat={setOpenchat}  setResolvedchat={setResolvedchat} />
            </Box>

            <Box sx={{ width: "70%", overflowY: 'auto' }}>
                <RightBar openchat={openchat} resolvedchat={resolvedchat}/>
            </Box>
        </Stack>

    )
}

