import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CONFIG } from '../../config';
import { Client, Contact } from '../../types/types';

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
      getClients: build.query<UserAccountsResponse, void>({
        query: () => ({
            url: 'users/',
          }
        )
      }),

    })
  }
)

export const { useGetClientsQuery } = userAccountsApi