import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const jediOrderApi = createApi({
    reducerPath: 'jediOrderApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
    tagTypes: ['JediOrder'],
    endpoints: (builder) => ({
        getJediOrder: builder.query({
            query: (page = 1) => `starwars?_page=${page}&_limit=5`,
            providesTags: ['JediOrder'],
        }),
        createJedi: builder.mutation({
            query: (jedi) => ({
                url: 'starwars',
                method: 'POST',
                body: { jedi },
            }),
            invalidatesTags: ['JediOrder'],
        }),
    }),
});

export const { useGetJediOrderQuery, useCreateJediMutation, reducer, middleware} = jediOrderApi;