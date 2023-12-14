import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CONFIG } from '../../config';
import { Client } from '../../types/types';

type ClientsResponse = Client[]

export const userApi = createApi({
    reducerPath: 'clients',
    baseQuery: fetchBaseQuery({
      baseUrl: CONFIG.BASE_URL
    }),
    endpoints: build => ({
      getClients: build.query<ClientsResponse, void>({
        query: () => ({
            url: 'clients/',
            per_page: 10
          }
        )
      })
      // ,
      //
      // addClient: build.mutation(
      //
      // )
    })
  }
)

export const {useGetClientsQuery} = userApi