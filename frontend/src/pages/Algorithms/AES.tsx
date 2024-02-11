import * as React from 'react';
import { useEffect, useState } from 'react';
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
  Input,
} from '@mui/joy';
import { useAppDispatch, useAppSelector } from '../../store';
import {
  getActionAesDecrypt,
  getActionAesEncrypt,
} from '../../store/crypto/creators';
import { cryptoSlice } from '../../store/crypto';

export default function AES() {
  const dispatch = useAppDispatch();
  const store = useAppSelector((state) => state.crypto.aes);

  return (
    <Card>
      <CardContent>
        <Box sx={{ mb: 1, display: 'flex' }}>
          <Typography level="h1" sx={{ fontWeight: 800 }}>
            AES
          </Typography>
        </Box>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel sx={{ fontWeight: 600 }}>AES Key</FormLabel>
            <Input
              placeholder="AES key"
              value={store.key}
              onChange={(e) =>
                dispatch(cryptoSlice.actions.aes_set_key(e.target.value))
              }
            />
          </FormControl>
          <Divider />
          <FormControl>
            <FormLabel sx={{ fontWeight: 600 }}>Plain Text</FormLabel>
            <Textarea
              size="sm"
              minRows={4}
              sx={{ mt: 1.5 }}
              value={store.plainText}
              onChange={(e) =>
                dispatch(cryptoSlice.actions.aes_set_plain(e.target.value))
              }
            />
          </FormControl>
          <Divider />
          <FormControl>
            <FormLabel sx={{ fontWeight: 600 }}>Cipher Text</FormLabel>
            <Textarea
              size="sm"
              minRows={4}
              sx={{ mt: 1.5 }}
              value={store.cipherText}
              onChange={(e) =>
                dispatch(cryptoSlice.actions.aes_set_cipher(e.target.value))
              }
            />
          </FormControl>
        </Stack>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          color="neutral"
          onClick={() => {
            dispatch(
              getActionAesEncrypt({
                plainText: store.plainText,
                key: store.key,
              }),
            );
          }}
        >
          Encrypt
        </Button>
        <Button
          variant="outlined"
          color="neutral"
          onClick={() => {
            dispatch(
              getActionAesDecrypt({
                cipherText: store.cipherText,
                key: store.key,
              }),
            );
          }}
        >
          Decrypt
        </Button>
      </CardActions>
    </Card>
  );
}
