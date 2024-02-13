import { ActionStatus } from '../../core/entities/entities';

export const initialState = {
  aes: {
    status: ActionStatus.IDLE,
    error: '',
    key: '1234567890921456',
    cipherText: '',
    plainText: '',
  },
};
export type CryptoState = typeof initialState;
