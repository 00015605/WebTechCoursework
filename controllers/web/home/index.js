const book_service = require('../../../services/book');

const home_controller = {
    index: async (req, res) => {
        res.render('home');
    },
    add: async (req, res) =>{
        res.render('home/add_update', {mode: 'Add'});
    },
    update: async (req, res) =>{
        const bookData = await book_service.getById(req.params.id);
        res.render('home/add_update', {mode: 'Update', bookData: bookData});
    }
};

module.exports = home_controller;