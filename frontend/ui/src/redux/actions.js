import {
   GET_PRODUCTS_PENDING,
    GET_PRODUCTS_SUCESS,
     GET_PRODUCTS_FAILED,
     PRODUCT_DETAILS_FAILED,
     PRODUCT_DETAILS_PENDING,
     PRODUCT_DETAILS_SUCESS
} from './constant'

import axios from 'axios'

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