import { createSlice } from '@reduxjs/toolkit';

export const reduxSlice = createSlice({
  name: 'redux',
  initialState: {
    number: 0,
  },
  reducers: {
    increment: (state) => {
      state.number += 1;
    },
  },
});

export const { increment } = reduxSlice.actions;

export default reduxSlice.reducer;
