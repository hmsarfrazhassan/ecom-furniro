import { createSlice } from "@reduxjs/toolkit";

const calculateTotalPrice = (items) => {
  return items.reduce((total, item) => {
    const price = Number(item.originalPrice.replace(/,/g, ""));
    return total + price * item.quantity;
  }, 0);
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.totalPrice = calculateTotalPrice(state.items);
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      state.totalPrice = calculateTotalPrice(state.items);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
