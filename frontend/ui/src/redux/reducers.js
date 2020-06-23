import {

    GET_PRODUCTS_SUCESS,
    GET_PRODUCTS_FAILED,
    GET_PRODUCTS_PENDING,
    PRODUCT_DETAILS_FAILED,
    
    PRODUCT_DETAILS_SUCESS,
    PRODUCT_DETAILS_PENDING,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    USER_SIGNIN_PENDING,
    USER_SIGNIN_SUCESS,
    USER_SIGNIN_FAILED,
    USER_REGISTER_PENDING,
    USER_REGISTER_SUCESS,
    USER_REGISTER_FAILED

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

const cartReducer = (state={cartItems:[]},action)=>{

    switch(action.type){
        case ADD_TO_CART:
            const item = action.payload
            const searchProduct = state.cartItems.find(prod => prod.id === item.id)

            if(searchProduct){
                const newCart = state.cartItems.filter(prod => prod.id!== searchProduct.id)
                return {cartItems:[...newCart,item]}
            }else{
                if(item.id){
                    return { cartItems:[...state.cartItems,item]}
                }
                else{
                    return state
                }
              
                
            }
        case REMOVE_FROM_CART:
            return {cartItems: state.cartItems.filter(prod => prod.id !== action.payload)}
         
     
            default:
             return state
    }
}

const userSigninReducer = (state={}, action)=>{

    switch (action.type) {
        case USER_SIGNIN_PENDING:
            return {isPending:true}
            
        case USER_SIGNIN_SUCESS:
            return {...state,userInfo:action.payload,isPending:false}
        
            case USER_SIGNIN_FAILED:
                return {isPending:false,error:action.payload}
        default:
            return state;
    }
}

const userRegisterReducer = (state={},action)=>{

    switch (action.type) {
        case USER_REGISTER_PENDING:
            
            return {isPending:true};
        case USER_REGISTER_SUCESS:
            return {isPending:false,userInfo:action.payload}
         case USER_SIGNIN_FAILED:
                return {isPending:false,error:action.payload}
        default:
            return state;
    }
}


export {detailsProduct , getProducts ,cartReducer,userSigninReducer,userRegisterReducer}