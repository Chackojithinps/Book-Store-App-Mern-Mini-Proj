const express= require('express')
const router = express.Router()
const booksController = require('../controllers/books')



router.get('/',booksController.getAllBooks)
router.get('/:id',booksController.getByid)
router.post('/',booksController.addBook)
router.put('/update/:id',booksController.updateBook)
router.delete('/:id',booksController.deleteBook)

module.exports = router