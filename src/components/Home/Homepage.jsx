import React from 'react';
import { Box, Typography, Button, Container, Grid, Paper } from '@mui/material';
import { Chat, Group, Settings, AccessTime } from '@mui/icons-material';

const FeatureCard = ({ icon, title, description }) => (
  <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center' }}>
    {icon}
    <Typography variant="h6" component="h3" gutterBottom>
      {title}
    </Typography>
    <Typography variant="body1">{description}</Typography>
  </Paper>
);

export default function Homepage() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '40px 20px',
          marginBottom: '40px',
        }}
      >
        <Typography variant="h1" component="h1" gutterBottom>
          Welcome to Novel's Smartsupp Application 
        </Typography>
        <Typography variant="h5" component="h2" >
          A modern communication platform designed for seamless interaction and support.
        </Typography>
        <Button variant="contained" color="primary" href="https://noveloffice.in/">
          Get Started
        </Button>
      </Box>

      <Typography variant="h4" component="h2" gutterBottom>
        Features
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <FeatureCard
            icon={<Chat fontSize="large" color="primary" />}
            title="Live Chat"
            description="Engage with customers in real-time through our live chat feature, providing instant support and assistance."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FeatureCard
            icon={<Group fontSize="large" color="primary" />}
            title="Team Collaboration"
            description="Collaborate with your team effortlessly using integrated tools and shared chat features."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FeatureCard
            icon={<Settings fontSize="large" color="primary" />}
            title="Customizable Settings"
            description="Tailor the platform to your needs with a range of customizable settings and options."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FeatureCard
            icon={<AccessTime fontSize="large" color="primary" />}
            title="24/7 Support"
            description="Our support team is available round the clock to assist with any issues or queries you might have."
          />
        </Grid>
      </Grid>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '40px 20px',
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          About Smartsupp
        </Typography>
        <Typography variant="body1" >
          Smartsupp is a comprehensive communication tool designed to enhance customer engagement and streamline support processes. Our platform offers real-time chat capabilities, team collaboration tools, customizable settings, and 24/7 support to ensure you and your team can provide the best service possible. With Smartsupp, you'll be equipped with all the tools you need to succeed in a modern, fast-paced business environment.
        </Typography>
        <Button variant="contained" color="secondary" href="https://www.smartsupp.com/?utm_source=google&utm_medium=cpc&utm_campaign=search_geo-WORLD_lng-ENG_brand&utm_adgroup=smartsupp-brand&utm_term=smartsupp&gclid=EAIaIQobChMImbCT75HMiAMVqSmDAx1f8BLCEAAYASAAEgKbffD_BwE&chnl=g&dvc=c&tmplt=template-3-eng&mt=e&gad_source=1">
          Learn More
        </Button>
      </Box>
    </Container>
  );
};


