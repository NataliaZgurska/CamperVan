import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modalIsActive: false,
  },
  reducers: {
    updateModalIsActive(state, action) {
      state.modalIsActive = action.payload;
    },
  },
});

export const { updateModalIsActive } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
