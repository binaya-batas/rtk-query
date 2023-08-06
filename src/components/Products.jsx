import React from 'react'
import { useGetAllProductsQuery, useGetSingleProductQuery } from '../services/productsApi'

const Products = () => {
    // const { data } = useGetAllProductsQuery();
    const { data } = useGetSingleProductQuery(1);

    return (
    <div>
        {
            data?.title
        }
    </div>
  )
}

export default Products