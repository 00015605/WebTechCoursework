// import specific service class
const book_service = require('../../../services/book');

// mention the service's needed actions (methods)
const book_controller = {
    getAll(req, res) {
        res.json(book_service.getAll());
    },
    create(req, res) {
        res.status(201).json(
            book_service.create(req, res)
        )
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