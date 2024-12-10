import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["Reviews"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({ query: () => "/restaurants" }),
    getUsers: builder.query({ query: () => "/users" }),
    getReviewsByRestrantId: builder.query({
      query: (id) => `/reviews?restaurantId=${id}`,
      providesTags: (id) => [{ type: "Reviews", id }],
    }),
    getDishById: builder.query({ query: (id) => `/dish/${id}` }),
    getDishesByIdRestaurant: builder.query({
      query: (id) => `/dishes?restaurantId=${id}`,
    }),
    addReview: builder.mutation({
      query: ({ id, body }) => ({
        url: `/review/${id}`,
        method: "POST",
        body,
      }),
      invalidatesTags: ({ id }) => [{ type: "Reviews", id }],
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetUsersQuery,
  useGetReviewsByRestrantIdQuery,
  useGetDishByIdQuery,
  useGetDishesByIdRestaurantQuery,
  useAddReviewMutation,
} = apiSlice;
