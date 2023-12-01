import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  counter: number
}

const initialState: CounterState = { counter: 10 }

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    incrementBy(state, action: PayloadAction<number>) {
      state.counter += action.payload;
    }
  },
})

export const { increment, decrement, incrementBy } = counterSlice.actions