import * as React from 'react';
import {
  Card,
  Box,
  Typography,
  Divider,
  Stack,
  Textarea,
  FormControl,
  FormLabel,
  CardContent,
  CardActions,
  Button,
} from '@mui/joy';
import { useAppDispatch, useAppSelector } from '../../store';
import { getActionMd5Hash } from '../../store/hash/creators';
import { useState } from 'react';
import { ActionStatus } from '../../core/entities/entities';

export default function MD5() {
  const dispatch = useAppDispatch();
  const store = useAppSelector((state) => state.hash.md5);
  const [plainText, setPlainText] = useState('');
  return (
    <Card>
      <CardContent>
        <Box sx={{ mb: 1, display: 'flex' }}>
          <Typography level="h1" sx={{ fontWeight: 800 }}>
            MD5
          </Typography>
        </Box>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel sx={{ fontWeight: 600 }}>Entrada</FormLabel>
            <Textarea
              size="sm"
              minRows={4}
              sx={{ mt: 1.5 }}
              placeholder={'Forneça o valor a ser aplicado o Hash'}
              value={plainText}
              onChange={(e) => setPlainText(e.target.value)}
            />
          </FormControl>
          <Divider />

          {store.status === ActionStatus.REJECTED && (
            <p>Erro inesperado ao realizar o HASH</p>
          )}

          <FormControl>
            <FormLabel sx={{ fontWeight: 600 }}>Resultado</FormLabel>
            <Textarea
              size="sm"
              minRows={4}
              sx={{ mt: 1.5 }}
              readOnly
              disabled
              value={store.hashed}
            />
          </FormControl>
        </Stack>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          color="neutral"
          onClick={() => {
            dispatch(getActionMd5Hash({ input: plainText }));
          }}
        >
          Hash
        </Button>
      </CardActions>
    </Card>
  );
}
