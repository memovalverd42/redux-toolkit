import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  counter: number
}

const initialState: CounterState = { counter: 10 }

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++
    }
  },
})

export const { increment } = counterSlice.actions;