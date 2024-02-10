import { createSlice } from '@reduxjs/toolkit';
import { getActionMd5Hash } from './creators';
import { initialState } from './state';
import { ActionStatus } from '../../core/entities/entities';

export const hashSlice = createSlice({
  name: 'hash',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getActionMd5Hash.pending, (state) => {
      state.md5.status = ActionStatus.PENDING;
    });
    builder.addCase(getActionMd5Hash.fulfilled, (state, action) => {
      state.md5.hashed = action.payload;
      state.md5.status = ActionStatus.FULFILLED;
    });
    builder.addCase(getActionMd5Hash.rejected, (state) => {
      state.md5.status = ActionStatus.REJECTED;
    });
  },
});
