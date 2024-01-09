import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CONFIG } from '../../config';
import { authSlice, UserAccountResponse } from '../../store/auth.slice';

type AuthUserRequest = {
  username: string,
  password: string
}

type AuthResponse = {
  access: string | null;
  refresh: string | null;
  user: UserAccountResponse | null;
}

export const userAuthApi = createApi({
    reducerPath: 'userAuth',
    baseQuery: fetchBaseQuery({
      baseUrl: CONFIG.BASE_URL
    }),
    endpoints: build => ({
      login: build.mutation<AuthResponse, AuthUserRequest>({
        query: (body) => ({
          url: '/auth/login/',
          method: 'POST',
          body
        }),
        async onQueryStarted(request, { dispatch, queryFulfilled }) {
          try {
            const { data : response } = await queryFulfilled

            dispatch(authSlice.actions.setAuthTokens({
              access: response.access,
              refresh: response.refresh,
            }))

            dispatch(authSlice.actions.setAccount(response.user));
          } catch (err) {
            console.log("Error while login!")
          }
        }
      }),
    })
  }
)

export const { useLoginMutation } = userAuthApi