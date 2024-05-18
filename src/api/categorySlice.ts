import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Category from '../models/Category';


const categorySlice = createApi({
    reducerPath: 'categorySlice',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://5.42.105.101/category' }),
    tagTypes: ['Category'],
    endpoints: builder => ({
        getAllCategory: builder.query<Category, void>({
            query: () => '/',
            providesTags: ['Category']
        })
    }) 
});

export const {
    useGetAllCategoryQuery,
} = categorySlice;

export default categorySlice;