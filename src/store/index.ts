import { configureStore } from '@reduxjs/toolkit';
import { userApi } from '../logic/user/user.api';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(userApi.middleware)
})