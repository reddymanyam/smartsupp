import React, { useState } from 'react'
import Left from './Left'
import Right from './Right'
import { Stack } from '@mui/material'
import Divider from '@mui/material/Divider';

const SettingsPage = () => {
      
        const[selectedList, setSelectedList] = useState('');
        const[color, setColor] = useState('');

        const handleSelectList = (item) =>{
            setSelectedList(item)
            setColor("lightblue")
        }
    return (
        <>

            <Stack direction="row"  sx={{ width: '100%' }}>
                <div style={{ width: "15%"}}>
                    <Left handleSelectList={handleSelectList} color={color} />
                </div>
                <Divider orientation='vertical' flexItem sx={{height:"650px", width:'1px',marginLeft:"50px"}} />
                <div style={{ width: "85%" }}>
                    <Right  selectedList={selectedList}/>
                </div>
            </Stack>

        </>
    )
}

export default SettingsPage
