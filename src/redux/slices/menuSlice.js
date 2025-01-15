import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: [],
  reducers: {
    setMenuItems(state, action) {
      return action.payload;
    },
    addMenuItem(state, action) {
      state.push(action.payload);
    },
    updateMenuItem(state, action) {
      const index = state.findIndex(item => item.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
    deleteMenuItem(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { setMenuItems, addMenuItem, updateMenuItem, deleteMenuItem } = menuSlice.actions;
export default menuSlice.reducer;
