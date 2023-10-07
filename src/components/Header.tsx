import React, { ReactNode } from 'react';

import { Box, Button, Divider, Skeleton, Stack, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { navigate } from '@reach/router';

const Header = ({ title, backRoute, actions } : { title: string, backRoute?: string, actions?: ReactNode }) => {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" alignItems="center" width="75%">
          {backRoute && 
            <Button onClick={() => navigate(backRoute)}>
              <ChevronLeftIcon />
            </Button>
          }
          <Box pr={1} width="100%" sx={{ overflow: 'hidden' }}>
            {title? 
              <Typography noWrap align='left' variant='h4'>{title}</Typography> :
              <Skeleton variant='text' sx={{ fontSize: '2.125rem' }}/>
            }
          </Box>
        </Stack>
        {actions}
      </Stack>
      <Divider sx={{ my: 2 }}/>
    </Box>
  )
}

export default Header;