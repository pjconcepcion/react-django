import React from 'react';
import { Box, Typography } from '@mui/material';

const LessonResult = ({ result }) => {
  return (
    <Box>
      <Box>
        <Typography variant='h5'>Result: {result.result}</Typography>
        <Typography variant="h6">Score: {result.score} / {result.passing_score}</Typography>
      </Box>
    </Box>
  )
}

export default LessonResult