import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductCounterState {
  [productId: string]: number; // Map of product IDs to their counts
}

const initialState: ProductCounterState = {}; // Default initial state

const counterSlice = createSlice({
  name: "productCounter",
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      if (state[productId]) {
        // If already liked, decrement (remove like)
        state[productId] -= 1;
        if (state[productId] < 0) state[productId] = 0; // Prevent negative likes
      } else {
        // If not liked yet, increment (add like)
        state[productId] = 1;
      }
    },
  },
});


export const { toggleLike } = counterSlice.actions;
export default counterSlice.reducer;
