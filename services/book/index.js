const fs = require('fs');
// access global mock db file
const books = require(global.mock_db);

// write service method implementations
const book_service = {
    getAll() {
        return books
    }
};

module.exports = book_service;