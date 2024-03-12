import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CONFIG } from '../../config';



export const texturesApi = createApi({
  reducerPath: 'textures',
  baseQuery: fetchBaseQuery({
    baseUrl: CONFIG.BASE_URL
  }),
  endpoints: build => ({
    generate: build.mutation<any,
  })
})