import { ActionStatus } from '../../core/entities/entities';

export const initialState = {
  md5: {
    status: ActionStatus.IDLE,
    hashed: '',
  },
};
export type HashState = typeof initialState;
