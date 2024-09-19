import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import UserList from './UserList';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function OpenChats({ userData, setOpenchat }) {

    const [value, setValue] = React.useState(0);
    const [filterData, setFilterData] = useState(userData);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (newValue === 1) {
            const newChats = userData.filter((data) => data.read == 0);
            setFilterData(newChats);
        } else {
            setFilterData(userData);
        }
    };

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="All" {...a11yProps(0)} />
                        <Tab label="New" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <UserList filterData={filterData} setOpenchat={setOpenchat} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <UserList filterData={filterData} setOpenchat={setOpenchat} />
                </CustomTabPanel>
            </Box>
        </>
    )
}
