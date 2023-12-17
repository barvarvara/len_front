import { configureStore } from '@reduxjs/toolkit';
import { clientsApi } from '../logic/user/clients.api';
import { userAccountsApi } from '../logic/user/userAccounts.api';
import authSlice from './auth.slice';
import { userAuthApi } from '../logic/user/userAuth.api';

export const store = configureStore({
  reducer: {
    [clientsApi.reducerPath]: clientsApi.reducer,
    [userAccountsApi.reducerPath]: userAccountsApi.reducer,
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    auth: authSlice.reducer
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(clientsApi.middleware, userAuthApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;