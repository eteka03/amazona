const express = require('express')

const app = express()
const env = require('dotenv')
const config = require('./config')

const mongoose = require('mongoose')
const userRoute = require('./routes/userRoute')

env.config()

const mongodbUrl = config.MONGODB_URL

mongoose.connect(mongodbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).catch(error =>console.log(error.reason))

const fakeData = {
    products:[
        {
            id:'1',
            name:'Slim shirt',
            image:'slim-shirt.jpg',
            brand: 'Nike',
            rating:4.5,
            price:70,
            numReviews: 9,
            category:'shirt',
            countInStock:10

        },
        {
            id:'2',
            name:'Best pants',
            image:'slim-shirt.jpg',
            brand: 'lacoste',
            rating:4,
            price:30,
            numReviews: 15,
            category:'Pants',
            countInStock:5

        },
        {
            id:'3',
            name:'Fit shirt',
            image:'slim-shirt.jpg',
            brand: 'adidas',
            rating:3,
            price:60,
            numReviews: 9,
            category:'shirt',
            countInStock:29

        }
    ]
}
app.use(express.json())
app.use('/users',userRoute)


app.get('/',(req,res)=>{
    res.send('its working !')
})

app.get('/products',(req,res)=>{
    
    res.send(fakeData.products)
})

app.get('/product/:id',(req,res)=>{
    const {id} = req.params
    
    let product = fakeData.products.find(prod => prod.id === id)

    if(product){
        res.status(200).send(product)
    }else{
        res.status(404).send({msg:"product not found"})
    }
})

app.listen(8000,()=>{
    console.log('app listenning on port 8000')
})