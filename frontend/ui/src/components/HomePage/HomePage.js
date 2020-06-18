import React,{useState,useEffect} from 'react'
import {connect } from 'react-redux'

import {getProducts} from '../../redux/actions'
import ProductList from '../productList/productList'

import axios from 'axios'



const mapStateToProps = state =>{
    return {
        products: state.getProducts.products,
        isPending:state.getProducts.isPending,
        error:state.getProducts.error
    }
}

const mapDispatchToprops = dispatch =>{
    return {
       onRequestProducts: ()=> dispatch(getProducts())
    }
}

const HomePage = ({onRequestProducts,products,isPending,error}) => {

const [product,setProducts] =  useState([])

useEffect(()=>{

   onRequestProducts()
},[])

    return (
       <>
      
            {isPending ?<h1>Loading...</h1>:<ProductList products={products} />}
   
             
       </>
    )
}


export default connect(mapStateToProps,mapDispatchToprops)(HomePage)