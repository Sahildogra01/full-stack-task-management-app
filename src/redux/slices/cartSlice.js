import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.push(action.payload);
      }
    },
    updateCartItem(state, action) {
      const index = state.findIndex(item => item.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
    removeCartItem(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
    clearCart(state) {
      return [];
    },
  },
});

export const { addToCart, updateCartItem, removeCartItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
