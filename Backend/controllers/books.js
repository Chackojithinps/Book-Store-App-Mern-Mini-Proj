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
        console.log(req.body)
        const {name,author,description,price,available,image} = req.body
         books = new Book ({
            name,
            author,
            description,
            price,
            available,
            image
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


const updateBook =async (req,res) =>{
    let books;
    try {
        const id = req.params.id;
        const {name,author,description,price,available,image} = req.body
         books = await Book.findByIdAndUpdate(id,{
            name,
            author,
            description,
            price,
            available,
            imamge
         })
         await books.save()
    } catch (error) {
        console.log(error.message)
    }
    if(!books){
        return res.status(500).json({messege:"Unable to update"})
    }
    return res.status(201).json({books})
}


const deleteBook = async (req,res) =>{
    let books;

    try {
        const id = req.params.id
        books = await Book.findByIdAndDelete(id)
    } catch (error) {
        console.log(error.message);
    }
    if(!books){
        return res.status(500).json({message:"No items found in this id to delete"})
    }
    return res.status(200).json({message:"item deleted sucessfully"})
}

exports.getAllBooks = getAllBooks
exports.addBook = addBook
exports.getByid = getByid
exports.updateBook = updateBook
exports.deleteBook = deleteBook