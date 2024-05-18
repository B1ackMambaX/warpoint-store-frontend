import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Product from '../models/Product';
import Review from '../models/Review';
import getAllProductParams from '../models/getAllProductParams';


const productSlice = createApi({
    reducerPath: 'productSlice',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://5.42.105.101/api/product' }),
    tagTypes: ['Product', 'Review'],
    endpoints: builder => ({
        getAllProduct: builder.query<any, getAllProductParams>({
            query: ({offset, limit}) => `/?skip=${offset}&limit=${limit}`,
            providesTags: ['Product']
        }),

        getProductById: builder.query<Product, number>({
            query: (id) => `/product/${id}`,
            providesTags: (_, _2, id) => [{ type: 'Product', id }]
        }),

        getReviewsByProductId: builder.query<Review, number>({
            query: (productID) => `/product/${productID}/review`,
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