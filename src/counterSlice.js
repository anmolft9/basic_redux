import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    increaseNumber: (state, payload) => {
      state.counter = state.counter + 1;
    },
    decreaseNumber: (state, payload) => {
      state.counter = state.counter - 1;
    },
  },
});

const { reducer, actions } = counterSlice;
export const { increaseNumber, decreaseNumber } = actions;

export default reducer;
