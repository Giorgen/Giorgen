const express = require('express');
const User = require('../model/Username');

const router = express.Router();

router.get('/', async (req,res)=>{
   const datos= await User.find()
        res.render("login")
    console.log(datos)

})
router.get('/home',(req,res)=>{
   
    res.render("home")
})
router.get('/registro',(req,res)=>{
   
    res.render("registro")
})
router.post("/registro",async(req,res)=>{
    const body=req.body
    if(body){
        const UserDB=new User(body)
        await UserDB.save()
        res.redirect('/')
    }else{
        console.log('nooo asi no se juega')
    }
})
router.post('/',async(req,res)=>{
    const body=req.body
    const username=body.username
    const password=body.password
    const UserLogin=await User.findOne({username:username})
    const passLogin=await User.findOne({username:password})

    if(UserLogin && passLogin){ 

        res.redirect('/home')
    }else{
        res.render('err-login')

    }
})

module.exports = router;