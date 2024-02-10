import * as React from 'react';
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Button from '@mui/joy/Button';
import LockIcon from '@mui/icons-material/Lock';

export default function Header() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'space-between',
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        sx={{ display: { sm: 'flex' } }}
      >
        <LockIcon />
        <Button
          variant="plain"
          color="neutral"
          aria-pressed="true"
          component="a"
          size="sm"
          sx={{ alignSelf: 'center' }}
        >
          Safe
        </Button>
      </Stack>
    </Box>
  );
}
