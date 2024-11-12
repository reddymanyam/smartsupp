import React, { useEffect, useState } from 'react'
import LeftBar from './LeftBar'
import RightBar from './RightBar'
import { Box, Stack } from '@mui/material'
import axios from 'axios'

export default function Chats() {

    const [userData, setUserData] = useState([]);
    const [openchat, setOpenchat] = useState('');
   

    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/users");
            const data = response.data;
            console.log("Api data = ", data)
            setUserData(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getData();
    }, [])

    return (
        <Stack flexDirection="row" sx={{ height: '100vh', width:"100%", marginLeft:"7%" }} >

            <Box sx={{ width: "20%", borderRight: '1px solid #e0e0e0' }}>
                <LeftBar userData={userData} setOpenchat={setOpenchat} />
            </Box>

            <Box sx={{ width: "80%", overflowY: 'auto' }}>
                <RightBar openchat={openchat} setOpenchat={setOpenchat} />
            </Box>
        </Stack>

    )
}

