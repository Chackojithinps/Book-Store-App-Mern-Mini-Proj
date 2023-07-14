const Book = require('../model/bookModel')

const getAllBooks = async (req,res,next) =>{
    let books;
    try {
       console.log("kiran")
       books = await Book.find();
    } catch (error) {
      console.log(error.message)
    }
    if(!books){
          return res.status(404).json({message:"No products found"})
    }else{
        return res.status(200).json({books})
    }
}


const getByid = async (req,res,next)=>{
    let books;
    try {
        const id = req.params.id
        console.log("id"+id)
        books = await Book.findById(id)
        console.log("books : "+books)
    } catch (error) {
        console.log(error.message)
    }
    if(!books){
        return res.status(404).json({message:"No products found"})
    }else{
      return res.status(200).json({books})
  }
}


const addBook = async (req,res,next) =>{
    let books
    try { 
        console.log("Hellooooooooooooooo")
        console.log(req.body)
        const {name,author,description,price,available} = req.body
         books = new Book ({
            name,
            author,
            description,
            price,
            available
        })
        await books.save()
    
    } catch (error) {
        console.log(error.message)
    }
    if(!books){
        return res.status(500).json({messege:"Unable to add"})
    }
    return res.status(201).json({books})
    
}

exports.getAllBooks = getAllBooks
exports.addBook = addBook
exports.getByid = getByid