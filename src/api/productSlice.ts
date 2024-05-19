import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Product from '../models/Product';
import Review from '../models/Review';
import getAllProductParams from '../models/getAllProductParams';


const productSlice = createApi({
    reducerPath: 'productSlice',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://5.42.105.101/api/product' }),
    tagTypes: ['Product', 'Review'],
    endpoints: builder => ({
        getAllProduct: builder.query<Product[], getAllProductParams>({
            query: ({offset, limit}) => limit ? `/?skip=${offset}&limit=${limit}` : `/?skip=${offset}`,
            providesTags: ['Product']
        }),

        getProductById: builder.query<Product, number>({
            query: (id) => `/${id}`,
        }),

        getReviewsByProductId: builder.query<Review, number>({
            query: (productID) => `/${productID}/review`,
            providesTags: (_, _2, productId) => [{ type: 'Review', id: productId }],
        })
    }) 
});

export const {
    useGetAllProductQuery,
    useGetProductByIdQuery,
    useGetReviewsByProductIdQuery
} = productSlice;


export default productSlice;