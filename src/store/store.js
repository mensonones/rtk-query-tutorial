import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { middleware as jediOrderApiMiddleware } from '../services/api';
import reducers from './reducers';

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jediOrderApiMiddleware),
});

setupListeners(store.dispatch);