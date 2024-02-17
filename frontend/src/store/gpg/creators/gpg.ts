import { createAsyncThunk } from '@reduxjs/toolkit';
import { Container } from 'inversify';
import { IGpgProvider } from '../../../core/ports/ports';
import { Types } from '../../../core/ports/types';

export const getActionGpgListKeys = createAsyncThunk(
  'gpg/list-keys',
  async (opts: { input: string }, { extra }) => {
    const container = (<any>extra).container as Container;
    const hasher = container.get<IGpgProvider>(Types.IGpgProvider);
    return hasher.listKeys();
  },
);
