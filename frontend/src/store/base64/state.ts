import { ActionStatus } from '../../core/entities/entities';

export const initialState = {
  base64: {
    status: ActionStatus.IDLE,
    error: '',
    encoded: '',
    plainText: '',
  },
};
export type Base64State = typeof initialState;
