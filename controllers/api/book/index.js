// import specific service class
const book_service = require('../../../services/book/');

// mention the service's needed actions (methods)
const book_controller = {
    getAll(req, res) {
        res.json(book_service.getAll());
    }
};

module.exports = book_controller;