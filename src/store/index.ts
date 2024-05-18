import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../api/productSlice";
import categorySlice from "../api/categorySlice";
import authSlice from "../api/authSlice";


const store = configureStore({
    reducer: {
        [productSlice.reducerPath]: productSlice.reducer,
        [categorySlice.reducerPath]: categorySlice.reducer,
        [authSlice.reducerPath]: authSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
          productSlice.middleware,
          categorySlice.middleware,
          authSlice.middleware
    ),
    devTools: process.env.NODE_ENV !== 'production'
})


export default store;