import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/types';

export type UserAccountResponse = User

type AuthState = {
  access: string | null;
  refresh: string | null;
  user: UserAccountResponse | null;
};

const initialState: AuthState = {
  access: null,
  refresh: null,
  user: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthTokens(
      state: AuthState,
      action: PayloadAction<{ access: string | null; refresh: string | null }>
    ) {
      state.refresh = action.payload.refresh
      state.access = action.payload.access
    },

    setAccount(state: AuthState, action: PayloadAction<UserAccountResponse | null>) {
      state.user = action.payload;
    },

    logout(state: AuthState) {
      state.user = null;
      state.refresh = null;
      state.access = null;
    },

    // isAuth(state: AuthState) {
    //   return state.access != null
    // }
  }
})

export default authSlice;