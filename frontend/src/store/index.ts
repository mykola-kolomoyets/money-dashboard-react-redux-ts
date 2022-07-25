import { configureStore } from '@reduxjs/toolkit';

import authService from './api/auth';
import expensesService from './api/expenses';

const store = configureStore({
  reducer: {
    [authService.reducerPath]: authService.reducer,
    [expensesService.reducerPath]: expensesService.reducer
  }
});

export default store;
