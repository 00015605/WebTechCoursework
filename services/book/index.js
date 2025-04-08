const fs = require('fs');
const books = require(global.mock_db);

const book_service = {
    getAll() {
        return books
    },
    getById(id) {
        return books.find(b => b.id == id)
    },
    create(req, res) {
        let new_id = genRandId(4)
                
        const book = req.body

        const new_book = {
            id: new_id,
            book: book
        }

        books.push(new_book)
        
        writeToFile(books)
        
        return new_book
    },
    update(id, updateData){
        const bookIndex = books.findIndex(b => b.id == id)

        if (bookIndex === -1) {
            return null
        }

        books[bookIndex].book = { ...books[bookIndex].book, ...updateData }

        writeToFile(books)

        return books[bookIndex]
    },
    delete(id) {
        const index = books.findIndex(u => u.id == id)
        books.splice(index, 1)    
        writeToFile(books)
    }
};

// function for overwriting the db file when content is updated
let writeToFile = async (users) => {
    await 
        fs.writeFileSync(
            global.mock_db,
            JSON.stringify(
                users, null, 4
            ),
            'utf8'
        )
}

// generating random ids
let genRandId = (count) =>{
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < count; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}

module.exports = book_service;