import React from 'react'
import ProductList from '../productList/productList'
import {data} from '../../data'

export default function HomePage() {
    return (
       <>
             <ProductList products={data.products} />
       </>
    )
}
