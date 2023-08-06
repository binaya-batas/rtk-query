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
