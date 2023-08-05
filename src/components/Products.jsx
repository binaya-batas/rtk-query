import React from 'react'
import { useGetAllProductsQuery } from '../services/productsApi'

const Products = () => {
    const { data } = useGetAllProductsQuery();

    return (
    <div>
        {
            data?.map(item => (
                item.title
            ))
        }
    </div>
  )
}

export default Products