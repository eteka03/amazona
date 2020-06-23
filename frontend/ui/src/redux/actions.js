import {
   GET_PRODUCTS_PENDING,
    GET_PRODUCTS_SUCESS,
     GET_PRODUCTS_FAILED,
     PRODUCT_DETAILS_FAILED,
     PRODUCT_DETAILS_PENDING,
     PRODUCT_DETAILS_SUCESS,
    REMOVE_FROM_CART,
     ADD_TO_CART,
     USER_SIGNIN_SUCESS,
     USER_SIGNIN_PENDING,
     USER_SIGNIN_FAILED,
     USER_REGISTER_FAILED,
     USER_REGISTER_SUCESS,
     USER_REGISTER_PENDING
} from './constant'

import axios from 'axios'
import Cookie from 'js-cookie'

export const getProducts = ()=>(dispatch)=>{
    dispatch({
        type:GET_PRODUCTS_PENDING,
    })

   const fetchData =async ()=>{
       const {data} = await axios.get('/products')
       return data
   }
    
   fetchData().then(data => dispatch({type:GET_PRODUCTS_SUCESS, payload:data}))
            .catch(error => dispatch({type:GET_PRODUCTS_FAILED,payload:error}))

}


export const detailsProduct = (productId) => async (dispatch)=> {
    try{
        dispatch({type: PRODUCT_DETAILS_PENDING,payload:productId })

        const {data} = await axios.get(`/product/${productId}`)

        dispatch({type: PRODUCT_DETAILS_SUCESS,payload:data})
    }
    catch(error){
        dispatch({type: PRODUCT_DETAILS_FAILED,payload:error.message})
    }
}




export const addToCart = (product,qty)=> async (dispatch,getState) =>{

 dispatch({
       type:ADD_TO_CART,
      payload:{
          ...product,
          qty
      }
  
    })

    const {cartReducer:{cartItems}} = getState()

    Cookie.set('cartItems',JSON.stringify(cartItems))
}


export const removeProductFromCart = productId => (dispatch,getState) =>{
    dispatch({
        type:REMOVE_FROM_CART,
        payload:productId
    })

    const {cartReducer:{cartItems}} = getState()

    Cookie.set('cartItems',JSON.stringify(cartItems))
}


export const signin = (email,password) => async  dispatch =>{
    dispatch({
        type: USER_SIGNIN_PENDING,
        payload:{email,password}
    })

    try{
        const {data} = await axios.post("/users/signin",{email,password}) 
        dispatch({type:USER_SIGNIN_SUCESS,payload:data})
        Cookie.set('userInfo',JSON.stringify(data))
  
    }catch(error){
        dispatch({type:USER_SIGNIN_FAILED,payload:error.message})
    }


}


export const register = (name,email,password) => async dispatch =>{
    dispatch({
        type: USER_REGISTER_PENDING,
        payload:{email,password}
    })

    try{
        const {data} = await axios.post("/users/register",{name,email,password}) 
        dispatch({type:USER_REGISTER_SUCESS,payload:data})
        Cookie.set('userInfo',JSON.stringify(data))
  
    }catch(error){
        dispatch({type:USER_REGISTER_FAILED,payload:error.message})
    }
}