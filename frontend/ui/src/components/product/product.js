import React from 'react'
import {Link} from 'react-router-dom'

export default function Product({produit}) {

   

    const {id,name,price,brand,rating,image,numReviews} = produit
    return (
        <li>
            <div className="product">
            <Link to={`product/${id}`}>
            <img className="product-image" src={process.env.PUBLIC_URL + `/images/${image}`} alt="image"/>
            </Link>  
    <span className="product-name"><Link to={`product/${id}`}>{name}</Link></span>
    <span className="product-brand">{brand}</span>
    <span className="product-price">{`$` + `${price}`}</span>
    <span className="product-rating">{`${rating} Stars (${numReviews} reviews)`}</span>
            </div>
            
           
        </li>
    )
}
