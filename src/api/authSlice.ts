import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import LoginResponse from "../models/LoginResponse";
import LoginBody from "../models/LoginBody";
import RegisterResponse from "../models/RegisterResponse";
import RegisterBody from "../models/RegisterBody";


const authSlice = createApi({
    reducerPath: 'authSlice',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://5.42.105.101/api/auth'}),
    endpoints: (builder) => ({
        register: builder.mutation<RegisterResponse, RegisterBody>({
            query: (credentials) => ({
                url: '/sign_up',
                method: 'POST',
                body: credentials,
              }),
        }),

        login: builder.mutation<LoginResponse, LoginBody>({
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