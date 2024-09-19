import React from 'react'
import { Avatar } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';;
import Typography from '@mui/material/Typography';


export default function UserList({ filterData, setOpenchat }) {

    console.log("filterData = ", filterData);

    return (
        <>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {
                    filterData.map((chat) => {
                        console.log("Map = ", chat.messages);

                        return (
                            <>
                                <ListItem alignItems="flex-start" sx={{cursor:'pointer'}}  onClick={()=>setOpenchat(chat.id)}>
                                    <ListItemAvatar>
                                        <Avatar alt="UserImg" src={`${chat.profilePic}`} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={chat.name}
                                        secondary={
                                            <>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    sx={{ color: 'text.primary', display: 'inline' }}
                                                >
                                                    {chat.messages.map((msg, index) => {
                                                        if (index === chat.messages.length - 1) {
                                                            return msg.text
                                                        }
                                                    })}
                                                </Typography>

                                            </>
                                        }
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </>
                        )
                    })
                }

            </List>
        </>
    )
}
