import * as React from 'react';
import { Card, Box, Typography, CardContent, Chip, Stack } from '@mui/joy';
import { useAppDispatch, useAppSelector } from '../../store';
import { useEffect } from 'react';
import { getActionGpgListKeys } from '../../store/gpg/creators';

export default function GPG() {
  const dispatch = useAppDispatch();
  const store = useAppSelector((state) => state.gpg.gpg);

  useEffect(() => {
    dispatch(getActionGpgListKeys({ input: '' }));
  }, []);

  function isExpired(time: number) {
    return Date.now() > time * 1000;
  }

  return (
    <Stack direction={'column'} spacing={2}>
      <Typography level="h1" sx={{ fontWeight: 800 }}>
        GPG
      </Typography>
      <Box
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 2,
        }}
      >
        {store.keys.map((key) => (
          <Card variant="outlined" key={key.pub.keyid}>
            <CardContent>
              <Stack spacing={2}>
                <Typography level="title-sm" id="card-description">
                  {key.uid.uid}
                </Typography>
                <Chip
                  variant="outlined"
                  color={isExpired(key.pub.expires) ? 'danger' : 'primary'}
                  size="sm"
                  sx={{ pointerEvents: 'none', padding: '0.25rem' }}
                >
                  {isExpired(key.pub.expires) ? 'Expirado ' : 'Expira '}
                  em{' '}
                  {new Date(key.pub.expires * 1000).toISOString().slice(0, 10)}
                </Chip>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Stack>
  );
}
