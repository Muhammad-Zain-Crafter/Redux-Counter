import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const CounterSlice = createSlice({
  name: 'counter',
  initialState,
  // increment, decrement, reset, incrementByAmount are actions
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    reset: (state) => {
        state.value = 0
    },
    incrementByAmount: (state, action) => {
      state.value += Number(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, reset} = CounterSlice.actions

export default CounterSlice.reducer