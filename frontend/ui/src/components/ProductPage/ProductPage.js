import React from 'react'
import {
    useParams,
    Link,
} from 'react-router-dom'

import {data} from '../../data'



export default function ProductPage() {
    let{id} = useParams()

    let product = data.products.find(prod => prod.id === id)
    return (
        <div >
            <div className="back">
                <Link to="/">Back </Link>
                
            </div>
            <div className="details">
                <div className="details-image">
                    <img src={process.env.PUBLIC_URL + `/images/${product.image}`} alt="undfined" />
                </div>
                <div className="details-info">
                    <ul>
                        <li>
                            <h4>{product.name}</h4>
                        </li>
                        <li>
                            {product.name} Stars ({product.numReviews} Reviews)
                        </li>
                        <li>
                              <b>${product.price}</b>
                        </li>

                        <li>
                            Description:
                            <div>
                                {product.description || 'no description' }
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="details-action">
                    <ul>
                       <li>Price: {product.price}</li>
                       <li>Status: {product.status}</li>
                       <li>Qty:
                           <select>
                               <option>1</option>
                               <option>2</option>
                               <option>3</option>
                               <option>4</option>
                           </select>
                       </li>
                       <li>
                           <button className="add-to-cart">Add to Cart</button>
                       </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}
