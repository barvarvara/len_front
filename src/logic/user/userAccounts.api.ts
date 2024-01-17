import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CONFIG } from '../../config';
import { Client, Contact } from '../../types/types';
import { getAccessTokenFromLocalStorage } from '../../store/localStorage';

type UserAccountsResponse = {
  username: string,
  email: string,
  phone: string,
  is_staff: boolean
}

export const userAccountsApi = createApi({
    reducerPath: 'userAccounts',
    baseQuery: fetchBaseQuery({
      baseUrl: CONFIG.BASE_URL
    }),
    endpoints: build => ({
      getUsers: build.query<UserAccountsResponse, void>({
        query: () => ({
            headers: {Authorization: 'Bearer ' + getAccessTokenFromLocalStorage()},
            url: 'users/'
          }
        )
      }),

    })
  }
)

export const { useGetUsersQuery } = userAccountsApi