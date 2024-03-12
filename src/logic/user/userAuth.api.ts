import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CONFIG } from '../../config';
import { authSlice, UserAccountResponse } from '../../store/auth.slice';
import { getRefreshTokenFromLocalStorage } from '../../store/localStorage';

type AuthUserRequest = {
  username: string,
  password: string
}

type AuthResponse = {
  access: string | null;
  refresh: string | null;
  user: UserAccountResponse | null;
}

type TokenRequest = {
  refresh: string;
}

type UserTokensResponse = {
  access: string;
  refresh: string
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
          body,
        }),

        transformErrorResponse: async (baseQueryReturnValue) => {
          return {
            message: baseQueryReturnValue.data ?? 'Error while login',
            code: baseQueryReturnValue.status
          };
        },
        async onQueryStarted(request, { dispatch, queryFulfilled }) {
          try {
            const { data: response, meta: query } = await queryFulfilled

            if (query?.response?.ok) {
              dispatch(authSlice.actions.setAuthTokens({
                access: response.access,
                refresh: response.refresh,
              }))

              dispatch(authSlice.actions.setAccount(response.user));
            } else {
              throw new Error('Error! ' + response)
            }

          } catch (err) {
            if (err instanceof Error)
              console.log('Error while login! ' + err.message)
          }
        },
      }),

      register: build.mutation<AuthResponse, AuthUserRequest>({
        query: (body) => ({
          url: '/auth/register/',
          method: 'POST',
          body,
        }),

        async onQueryStarted(request, { dispatch, queryFulfilled }) {
          try {
            const { data: response, meta: query } = await queryFulfilled

            if (query?.response?.ok) {
              dispatch(authSlice.actions.setAuthTokens({
                access: response.access,
                refresh: response.refresh,
              }))

              dispatch(authSlice.actions.setAccount(response.user));
            } else {
              throw new Error('Error! ' + response)
            }

          } catch (err) {
            if (err instanceof Error)
              console.log('Error while register! ' + err.message)
          }
        },
      }),

      refreshTokens: build.mutation<UserTokensResponse, TokenRequest>({
          query: (body) => ({
            url: 'api/token/refresh/',
            method: 'POST',
            body
          }),

          async onQueryStarted(request, { dispatch, queryFulfilled }) {
            try {
              const { data: response } = await queryFulfilled

              dispatch(authSlice.actions.setAuthTokens({
                access: response.access,
                refresh: response.refresh,
              }))

            } catch (err) {
              console.log('Error while refreshing tokens! ' + err)
            }
          }

        }
      ),

      authUserInfo: build.query<UserAccountResponse, void>({
        query: () => ({
          url: '/auth/user/',
          headers: { Authorization: 'Bearer ' + getRefreshTokenFromLocalStorage() },
          method: 'GET',
        }),

        async onQueryStarted(request, { dispatch, queryFulfilled }) {
          try {
            const { data, meta: query } = await queryFulfilled

            if (!query?.response?.ok)
              throw new Error('Error! ' + data);

            dispatch(authSlice.actions.setAccount(data));

          } catch (err) {
            if (err instanceof Error)
              console.log('Error while getting user info! ' + err.message)
          }
        }
      }),


    })
  }
)

export const { useLoginMutation, useLazyAuthUserInfoQuery, useRefreshTokensMutation } = userAuthApi