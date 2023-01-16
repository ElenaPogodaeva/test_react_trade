import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TURN_TIME } from 'constants/constants';
import { IUser } from 'types/types';
import { USERS_DATA } from '../../constants/data';

export type AuctionState = {
  users: IUser[];
  counter: number;
  turn: number;
  isComplete: boolean;
};

const initialState: AuctionState = {
  users: USERS_DATA,
  counter: TURN_TIME,
  turn: 0,
  isComplete: false,
};

export const auctionSlice = createSlice({
  name: 'auction',
  initialState,
  reducers: {
    updateTime: (state) => {
      if (state.counter >= 1) {
        state.counter -= 1;
      } else {
        state.counter = TURN_TIME;
      }
    },
    updateTurn: (state) => {
      if (state.turn < state.users.length - 1) {
        state.turn += 1;
      } else {
        state.turn = 0;
      }
    },
    updateStatus: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const user = state.users.find((item) => item.id === id) as IUser;
      user.isOnline = !user.isOnline;
    },
    completeAuction: (state) => {
      state.isComplete = true;
    },
  },
});

export const { updateTime, updateTurn, updateStatus, completeAuction } = auctionSlice.actions;

export default auctionSlice.reducer;
