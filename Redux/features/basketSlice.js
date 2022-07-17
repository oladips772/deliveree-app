/** @format */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasktet: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const selectBasktetItems = (state) => state.basket.items;
export const { removeFromBasket, addToBasktet } = basketSlice.actions;
export default basketSlice.reducer;
