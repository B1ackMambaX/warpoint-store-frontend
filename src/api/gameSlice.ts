import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import Avatar from "../models/Avatar";
import Level from "../models/Level";
import Inventory from "../models/Inventory";
import Bonus from "../models/Bonus";

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

const gameSlice = createApi({
    reducerPath: 'gameSlice',
    baseQuery,
    endpoints: (builder) => ({
       getAvatar: builder.query<Avatar, void>({
        query: () =>  'avatar/me/'
       }),
       getLevel: builder.query<Level, void>({
        query: () =>  'level/me/'
       }),
       getInventory: builder.query<Inventory[], void>({
            query: () => 'inventory/me/'
       }),
       getBonus: builder.query<Bonus[], void>({
        query: () => 'bonus/me/'
   })
    }),
    
});


export default gameSlice;

export const {
    useGetAvatarQuery,
    useGetLevelQuery,
    useGetInventoryQuery,
    useGetBonusQuery
} = gameSlice;