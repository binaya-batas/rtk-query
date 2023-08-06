import { emptyApi } from "./api";

export const productsApi = emptyApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => `products`,
        }),
        getSingleProduct: builder.query({
            query: (id) => `products/${id}`,
        }),
        getProductCategories: builder.query({
            query: () => `products/categories`,
        }),
        getSpecificCategory: builder.query({
            query: (categoryName) => `products/${categoryName}`
        }),
        addNewProduct: builder.mutation({
            query: (body) => ({
                url: `products`,
                method: 'POST',
                body
            })
        }),
        updateProduct: builder.mutation({
            query: (id, body) => ({
                url: `products/${id}`,
                method: 'PUT',
                body
            })
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `products/${id}`,
                method: 'DELETE'
            })
        })
    }),
});

export const { 
    useGetAllProductsQuery, 
    useGetSingleProductQuery, 
    useGetProductCategoriesQuery,
    useGetSpecificCategoryQuery,
    useAddNewProductMutation 
} = productsApi;
