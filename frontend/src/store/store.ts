import { configureStore } from '@reduxjs/toolkit';
import { container } from '../adapters/container';
import { hashSlice } from './hash';

export const store = configureStore({
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: { extraArgument: { container } },
    });
  },
  reducer: {
    hash: hashSlice.reducer,
  },
});
