import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Card, Paper } from '@mui/material';
import Button from '@mui/material/Button';



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

export default function Auth() {
    const [value, setValue] = React.useState(0);
    const [name, setName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, SetConfirmPassword] = React.useState("");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#f5f5f5',
                width: "1260px"
            }}
        >
            <Paper elevation={6} sx={{ padding: 4, borderRadius: 2, width: '400px' }}>
                <Card sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="fullWidth" >
                            <Tab label="SignUp" {...a11yProps(0)} />
                            <Tab label="Login" {...a11yProps(1)} />
                        </Tabs>
                    </Box>

                    <CustomTabPanel value={value} index={0}>
                        <TextField
                            id="name-input"
                            label="Enter your Name"
                            variant="filled"
                            fullWidth
                            required
                            sx={{ mb: 2, mt: 2 }}
                        />
                        <TextField
                            id="email-input-login"
                            label="Enter your Email"
                            variant="filled"
                            fullWidth
                            required
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            id="password-input-login"
                            label="Enter your Password"
                            variant="filled"
                            fullWidth
                            required
                            type="password"
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            id="confirm-password-input"
                            label="Confirm your Password"
                            variant="filled"
                            fullWidth
                            required
                            type="password"
                            sx={{ mb: 2 }}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                            <Button variant="contained" sx={{ width: '150px', mb:2 }}>
                                SignUp
                            </Button>
                        </Box>
                    </CustomTabPanel>

                    <CustomTabPanel value={value} index={1}>
                        <TextField
                            id="email-input-signup"
                            label="Enter your Email"
                            variant="filled"
                            fullWidth
                            required
                            sx={{ mb: 2, mt: 2 }}
                        />
                        <TextField
                            id="password-input-signup"
                            label="Enter your Password"
                            variant="filled"
                            fullWidth
                            required
                            type="password"
                        />
                       <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <Button variant="contained" sx={{ width: '150px', mb:2  }}>
            Login
          </Button>
        </Box>
                    </CustomTabPanel>
                </Card>
            </Paper>
        </Box>
    );
}

