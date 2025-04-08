// import specific service class
const book_service = require('../../../services/book');

const book_controller = {
    getAll(req, res) {
        res.json(book_service.getAll());
    },
    create(req, res) {
        res.status(201).json(
            book_service.create(req, res)
        )
    },
    update(req, res) {
        const book = book_service.update(req.params.id, req.body)
        
        if (book) {
            res.json(book)
        } else {
            res.status(404).send('Book not found!')
        }
    },
    delete(req, res) {
        const book = book_service.getById(req.params.id)
        
        if (book) {
            book_service.delete(req.params.id)
            res.status(204).send('Book deleted successfully!')
        } else {
            res.status(404).send('Book not found!')
        }
    }
};

module.exports = book_controller;