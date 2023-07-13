const express= require('express')
const router = express.Router()
const Book = require('../model/bookModel')
router.get('/', async (req,res,next)=>{
   let books;
   try {
      books = await Book.find();
   } catch (error) {
     console.log(error.message)
   }
   if(!books){
         return res.status(404).json({message:"No products found"})
   }else{
       return res.status(200).json({books})
   }
})

module.exports = router