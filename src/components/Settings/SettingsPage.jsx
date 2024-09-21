import React from 'react'
import Left from './Left'
import Right from './Right'
import { Stack } from '@mui/material'
import Divider from '@mui/material/Divider';

const SettingsPage = () => {
    return (
        <>

            <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2} sx={{width:'100%'}}>
              <div style={{width:"15%"}}>

                <Left />
              </div>

              <div style={{width:"85%"}}>

                <Right />
              </div>
            </Stack>

        </>
    )
}

export default SettingsPage
