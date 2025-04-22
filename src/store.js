import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/productSlice';

export const store = configureStore({
  reducer: {
    products: productReducer, // Ensure the key 'products' matches the slice name
    // ... other reducers if you have them
  },
});