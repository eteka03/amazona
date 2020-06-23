import React,{useEffect} from 'react'
import {useParams, Link,useHistory} from 'react-router-dom'
import {useQuery} from '../../hooks/useQuery'
import {useSelector,useDispatch} from 'react-redux'
import {addToCart,removeProductFromCart} from '../../redux/actions'

export default function CartPage() {

    const {id} = useParams()
    let history = useHistory()
    let query = useQuery()
    let qty = query.get("qty")
    const productDetails = useSelector(state => state.detailsProduct)
    const cart = useSelector(state => state.cartReducer)
    const {cartItems} = cart
    const {product} = productDetails
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(addToCart(product,qty))
    },[])

   const removeFromCart = (productId)=>{
       dispatch(removeProductFromCart(productId))
   }

   const addToProductQty =(item)=>{
       let newQty = Number(item.qty) + 1

       dispatch(addToCart(item,newQty))
   }

   const removeProductQty = (item)=>{
    let newQty = Number(item.qty) - 1

    dispatch(addToCart(item,newQty))
   }

   const checkoutHandler = ()=>{
        history.push('/signin?redirect=shipping')
   }

    return (
        <div className="cart">
           <div className="cart-list">
                <ul className="cart-list-container">
                    <li>
                        <h3>Shopping Cart</h3>
                        <div>
                            price
                        </div>
                    </li>
                    {
                        cartItems.length <= 0 ? 
                        <div>Cart is empty</div> :
                        cartItems.map(item =>
                            <li key={item.name}>
                                    <div className="cart-image">
                                         <img src={process.env.PUBLIC_URL + `/images/${item.image}`} alt="item"/>
                                    </div> 
                               <div className="cart-name">
                                    <div>
                                        <Link to={`/product/${item.id}`}>
                                            {item.name}
                                        </Link></div>
                                    <div>
                                        Qty:
                                        <div>
                                            <button disabled={item.qty <= 1 ? true :false} onClick={()=>removeProductQty(item,qty)}>-</button>
                                            {item.qty}
                                            <button disabled={item.qty >= item.countInStock ? true : false} onClick={()=>addToProductQty(item,qty)}>+</button>
                                        </div>

                                        <button className="button-delete" onClick={()=>removeFromCart(item.id)}>delete</button>
                                    </div>

                               </div>

                              <div className="cart-price"><Link to={`/product/${item.id }`}></Link>${item.price}</div>
                          
                            </li>
                           
                            )
                    }
                </ul>
           </div>

           <div className="cart-action">
                    <h3>
                        Subtotal ({ cartItems.reduce((prev,current)=> Number( prev)+Number(current.qty),0)} items)
                    </h3>
                    :
                    ${ cartItems.reduce((prev,current)=> Number(prev)+(Number(current.qty) * Number(current.price)),0)}
          
                    <button onClick={checkoutHandler} className="checkout-button" disabled={cartItems.length === 0}>Proceed to checkout</button>
           </div>
        </div>
    )
}
