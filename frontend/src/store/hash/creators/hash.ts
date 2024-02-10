import { createAsyncThunk } from '@reduxjs/toolkit';
import { Container } from 'inversify';
import { Types } from '../../../core/ports/types';
import { IMD5Hasher } from '../../../core/ports/ports';

export const getActionMd5Hash = createAsyncThunk(
  'hash.md5/hash',
  async (opts: { input: string }, { extra }) => {
    const container = (<any>extra).container as Container;
    const hasher = container.get<IMD5Hasher>(Types.IMd5Hasher);
    return hasher.hash(opts.input);
  },
);
