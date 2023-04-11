import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const StudendApi = createApi({
  reducerPath: "StudendApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: (name) => `products`,
    }),
  }),
});

export const { useGetAllPostsQuery } = StudendApi;
