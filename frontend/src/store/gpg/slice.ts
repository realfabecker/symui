import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './state';
import { ActionStatus } from '../../core/entities/entities';
import { getActionGpgListKeys } from './creators';

export const gpgSlice = createSlice({
  name: 'gpgSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getActionGpgListKeys.pending, (state) => {
      state.gpg.status = ActionStatus.PENDING;
    });
    builder.addCase(getActionGpgListKeys.fulfilled, (state, action) => {
      state.gpg.keys = action.payload;
      state.gpg.status = ActionStatus.FULFILLED;
    });
    builder.addCase(getActionGpgListKeys.rejected, (state, payload) => {
      state.gpg.status = ActionStatus.REJECTED;
      state.gpg.error = payload?.error?.message || 'unexpected gpg list error';
    });
  },
});
