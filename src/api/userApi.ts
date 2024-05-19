import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

import RegisterResponse from "../models/RegisterResponse";

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://5.42.105.101/api/',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('access_token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
});

const userApi = createApi({
    reducerPath: 'userSlice',
    baseQuery,
    endpoints: (builder) => ({
       getUserInfo: builder.query<RegisterResponse, void>({
        query: () =>  'user/me/'
       })
    }),
});


export default userApi;

export const {
    useGetUserInfoQuery
} = userApi;