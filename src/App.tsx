import { Box, Paper } from '@mui/material';
import React from 'react';
import './app.css';

import Routes from './routes';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: 2,
        background: '#f2f2f2',
        height: '100%'
      }}
    >
      <Box component={Paper} sx={{ width: '50%' }} p={2}>
        <Routes />
      </Box>
    </Box>
  );
}

export default App;
