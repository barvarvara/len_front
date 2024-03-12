import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/types';
import {
  deleteRefreshTokenFromLocalStorage, setIsAuthInLocalStorage,
  saveRefreshTokenToLocalStorage,
} from './localStorage';
import { jwtDecode } from "jwt-decode";

export type UserAccountResponse = User

type AuthState = {
  access: string | null;
  user: UserAccountResponse | null;
  accessTokenExpDate: number | null;
};

const initialState: AuthState = {
  access: null,
  user: null,
  accessTokenExpDate: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthTokens(
      state: AuthState,
      action: PayloadAction<{ access: string | null; refresh: string | null }>
    ) {
      state.access = action.payload.access
      saveRefreshTokenToLocalStorage(action.payload.refresh)
      setIsAuthInLocalStorage(true)

      if (action.payload.access) {
        const dateAccessExpires = jwtDecode(action.payload.access);
        let accessTokenExpDate = dateAccessExpires.exp;

        if (accessTokenExpDate) {
          accessTokenExpDate -= 10;
          state.accessTokenExpDate = accessTokenExpDate
        }
      }
    },

    setAccount(state: AuthState, action: PayloadAction<UserAccountResponse | null>) {
      state.user = action.payload;
      setIsAuthInLocalStorage(true)
    },

    logout(state: AuthState) {
      deleteRefreshTokenFromLocalStorage();
      setIsAuthInLocalStorage(false);
      // POST: api/auth/logout c refreshToken в куке

      state.user = null;
      state.access = null;
    },
  }
});


export default authSlice;