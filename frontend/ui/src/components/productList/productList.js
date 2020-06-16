import React from 'react'
import Product from '../product/product'

export default function ProductList({products}) {
    return (
        <ul className="products">
                {products.map(prod => <Product key={prod.name} produit={prod}/>)}
         </ul>
    )
}
