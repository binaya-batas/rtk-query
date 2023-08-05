
import { emptyApi } from "./api";

export const productsApi = emptyApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => `products`
        })
    })
})

export const { useGetAllProductsQuery } = productsApi

