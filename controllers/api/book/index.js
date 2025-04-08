// import specific service class
const book_service = require('../../../services/book/');

// mention the service's needed actions (methods)
const book_controller = {
    getAll(req, res) {
        res.json(book_service.getAll());
    },
    create(req, res) {
        res.status(201).json(
            book_service.create(req, res)
        )
    }
};

module.exports = book_controller;