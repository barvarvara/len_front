import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CONFIG } from '../../config';
import { Client, Contact } from '../../types/types';

type ClientsResponse = Client[]
type ClientContactsResponse = Contact[]
type ClientRequest = Client

export const clientsApi = createApi({
    reducerPath: 'clients',
    baseQuery: fetchBaseQuery({
      baseUrl: CONFIG.BASE_URL
    }),
    endpoints: build => ({
      getClients: build.query<ClientsResponse, void>({
        query: () => ({
            url: 'api/clients/',
          }
        )
      }),

      getClientContacts: build.query<ClientContactsResponse, number>({
        query: (client_id) => ({
          url: `api/client-contacts/${client_id}/`
        })
      }),

      createClient: build.mutation<any, ClientRequest>({
        query: (body) => ({
          url: 'api/clients/',
          method: 'POST',
          body
        })
      })


    })
  }
)

export const { useGetClientsQuery, useLazyGetClientContactsQuery, useCreateClientMutation } = clientsApi