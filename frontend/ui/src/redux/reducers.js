import {

    GET_PRODUCTS_SUCESS,
    GET_PRODUCTS_FAILED,
    GET_PRODUCTS_PENDING,
    PRODUCT_DETAILS_FAILED,
    
    PRODUCT_DETAILS_SUCESS,
    PRODUCT_DETAILS_PENDING

} from './constant'


const initialState = {
    products:[],
    isPending:true,
    error:''
    
}

const initialDetails = {
    product:{},
    isPending:true
}


 const getProducts = (state=initialState,action={})=>{
    switch(action.type){
        case GET_PRODUCTS_PENDING:
            return {...state, isPending:true};
        
        case GET_PRODUCTS_SUCESS:
            return {...state,products:action.payload,isPending:false}
             
        case GET_PRODUCTS_FAILED:
            return {...state, error:action.payload,isPending:false}

        default:
            return state
    }
}


 const detailsProduct = (state =initialDetails , action)=>{
     
    switch(action.type){
        case PRODUCT_DETAILS_PENDING:
            return {...state , isPending : true}
        
        case PRODUCT_DETAILS_SUCESS:
            return {...state , isPending:false , product: action.payload}

        case PRODUCT_DETAILS_FAILED:
            return {...state , isPending:false, error:action.payload}

        default :
            return state
    }
}

export {detailsProduct , getProducts}