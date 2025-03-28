import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';
import usersReducer from './slices/usersSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    users: usersReducer,
    
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;