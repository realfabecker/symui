import { configureStore } from '@reduxjs/toolkit';
import { container } from '../adapters/container';
import { hashSlice } from './hash';
import { cryptoSlice } from './crypto';

export const store = configureStore({
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: { extraArgument: { container } },
    });
  },
  reducer: {
    hash: hashSlice.reducer,
    crypto: cryptoSlice.reducer,
  },
});
