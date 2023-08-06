import { emptyApi } from "./api";

export const productsApi = emptyApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `products`,
    }),
    getSingleProduct: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } = productsApi;
