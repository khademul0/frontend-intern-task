import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products', // Ensure this matches the key in your store.js
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    // You might have other reducers here
  },
});

export const { setProducts, setLoading, setError } = productSlice.actions;

export default productSlice.reducer;