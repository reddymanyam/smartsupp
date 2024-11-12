import React, { useState } from 'react'
import Left from './Left'
import Right from './Right'
import { Stack } from '@mui/material'
import Divider from '@mui/material/Divider';

const SettingsPage = () => {
      
        const[selectedList, setSelectedList] = useState('');
        

        const handleSelectList = (item) =>{
            setSelectedList(item)
           
        }
    return (
        <>

            <Stack direction="row" gap={8} justifyContent='space-between' sx={{ width: '100%',marginLeft:"7%" }}>
                <div style={{ width: "15%"}}>
                    <Left handleSelectList={handleSelectList} selectedList={selectedList} />
                </div>
                <Divider orientation='vertical' flexItem sx={{height:"auto", width:'1px'}} />
                <div style={{ width: "85%" }}>
                    <Right  selectedList={selectedList}/>
                </div>
            </Stack>

        </>
    )
}

export default SettingsPage
