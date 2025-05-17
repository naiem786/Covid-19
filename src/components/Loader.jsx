import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => (
  <Box
    sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1300
    }}
  >
    <CircularProgress sx={{ color: 'white' }} size={80} thickness={4} />
  </Box>
);

export default Loader;