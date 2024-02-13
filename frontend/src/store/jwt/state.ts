import { ActionStatus } from '../../core/entities/entities';

export const initialState = {
  jwt: {
    status: ActionStatus.IDLE,
    error: '',
    key: '1234567890921456',
    plainText: '',
    encoded: '',
  },
};
export type JwtState = typeof initialState;
