import React,{useEffect,useState} from 'react'
import {
    useParams,
    Link,
    useHistory
} from 'react-router-dom'

import {useSelector,useDispatch} from 'react-redux'
import {detailsProduct} from '../../redux/actions'




export default function ProductPage() {

    let history = useHistory();
    const [qty,setQty] = useState(1)
    const [isdisable , setIsDisable] = useState(false)
    const productDetails = useSelector(state => state.detailsProduct)
    const {product,isPending,error} = productDetails
    const dispatch = useDispatch()
    let{id} = useParams()

    useEffect(()=>{
        dispatch(detailsProduct(id))
    },[])

    const addQty = ()=>{
        qty < product.countInStock ?
            setQty(qty+1) && setIsDisable(false) : 
             setIsDisable(true)

    }

    const removeQty = ()=>{
        
        qty <= 0 || setQty(qty-1) && setIsDisable(false) 

    }


    const handleAddToCart = () => {
            history.push(`cart/${id}?qty=${qty}`)
    }

    
    return (
       <>
            {isPending ? <h1>Loading...</h1> :
                error ? <h1>{error}</h1> :
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
                                  <h4>${product.price}</h4>
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
                           <li>Price: ${product.price}</li>
            <li>Status: {product.status || product.countInStock > 0 ? <span> {product.countInStock} unité disponible</span> : <span>indisponible</span>}</li>
                           <li>Qty:
                               
                               <div className="details-qty">
            <button onClick={removeQty}>-</button><h4> {qty} </h4> <button className={isdisable ? "disabled" : ""} disabled={isdisable}  onClick={addQty}>+</button>
                               </div>
                           </li>
                           <li>
                               <button
                                disabled={product.countInStock <= 0 || qty <= 0 ? true : false } 
                                 onClick={handleAddToCart}
                                className={`${(product.countInStock <= 0 || qty <= 0 )? 'add-to-cart-disabled': 'add-to-cart'}` }
                                  >
                                      Add to Cart
                                </button>
                           </li>
                        </ul>
    
                    </div>
                </div>
            </div>

            }
       </>
    )
}
