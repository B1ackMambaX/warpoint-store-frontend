import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../api/productSlice";
import categorySlice from "../api/categorySlice";
import authSlice from "../api/authSlice";
import userApi from "../api/userApi";
import gameSlice from "../api/gameSlice";


const store = configureStore({
    reducer: {
        [productSlice.reducerPath]: productSlice.reducer,
        [categorySlice.reducerPath]: categorySlice.reducer,
        [authSlice.reducerPath]: authSlice.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [gameSlice.reducerPath]: gameSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
          productSlice.middleware,
          categorySlice.middleware,
          authSlice.middleware,
          userApi.middleware,
          gameSlice.middleware
    ),
    devTools: process.env.NODE_ENV !== 'production'
})


export default store;