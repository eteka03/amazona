const express = require('express')
const User = require('../models/userModel')
const getToken = require('../util')
const router = express.Router()


router.post('/signin',async (req,res)=>{
    const {email,password} = req.body
    const signinUser = await User.findOne({
        email,
        password
    })
    if(signinUser){
        const {_id,name,email,isAdmin} = signinUser
        res.send({
            _id,
            name,
            email,
            isAdmin,
            token:getToken(signinUser)
        })
    }else{
        res.status(401).send({msg:'Invalid email or password'})
    }
})

router.post('/register',async (req,res)=>{
    const {email,password,name} = req.body

    const user = new User({
        name,
        email,
        password
    })

    const registerUser = await user.save()
    

    if(registerUser){
        const {_id,name,email,isAdmin} = registerUser
        res.send({
            _id,
            name,
            email,
            isAdmin,
            token:getToken(registerUser)
        })
    }else{
        res.status(401).send({msg:'Invalid user data'})
    }
})

router.get('/createAdmin' ,  async (req,res)=>{
    try{

        const user = new User({
            name: 'lucia',
            email: 'lucia@gmail.com',
            password:'1234',
            isAdmin:true
        })
    
        const newUser = await user.save()
        res.send(newUser)
    }catch(error){
        res.send({msg:error.message})
    }
   
})



module.exports =  router