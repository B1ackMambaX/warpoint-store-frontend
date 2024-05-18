import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";


const authSlice = createApi({
    reducerPath: 'authSlice',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://5.42.105.101/api/auth'}),
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (credentials) => ({
                url: '/sign_up',
                method: 'POST',
                body: credentials,
              }),
        }),

        login: builder.mutation({
            query: (credentials) => ({
                url: '/sign_in',
                method: 'POST',
                body: credentials
            }),
        }),
    }),
});

export default authSlice;

export const { useRegisterMutation, useLoginMutation } = authSlice;