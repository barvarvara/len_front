import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CONFIG } from '../../config';
import { Client, Contact } from '../../types/types';

type ClientsResponse = Client[]
type ClientContactsResponse = Contact[]

export const userApi = createApi({
    reducerPath: 'clients',
    baseQuery: fetchBaseQuery({
      baseUrl: CONFIG.BASE_URL
    }),
    endpoints: build => ({
      getClients: build.query<ClientsResponse, void>({
        query: () => ({
            url: 'clients/',
          }
        )
      }),

      getClientContacts: build.query<ClientContactsResponse, number>({
        query: (client_id) => ({
          url: `clients/${client_id}/contacts/`
        })
      })


    })
  }
)

export const { useGetClientsQuery, useLazyGetClientContactsQuery } = userApi