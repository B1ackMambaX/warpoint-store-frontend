import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../api/productSlice";
import categorySlice from "../api/categorySlice";


const store = configureStore({
    reducer: {
        [productSlice.reducerPath]: productSlice.reducer,
        [categorySlice.reducerPath]: categorySlice.reducer
    },
    devTools: process.env.NODE_ENV !== 'production'
})


export default store;