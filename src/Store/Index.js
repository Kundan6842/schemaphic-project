import { configureStore } from '@reduxjs/toolkit';

import cartSlice from '../Store/cartSlice';

const store = configureStore({
  reducer: {cart: cartSlice.reducer, },
});

export default store;