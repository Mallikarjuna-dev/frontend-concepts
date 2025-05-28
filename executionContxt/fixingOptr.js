const library = {
    books: [
        { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
    ],
    addBook(book) {
        if (typeof book !== 'object' || !book.title || !book.author || !book.year) {
            console.error("Book information is incomplete");
            return;
        }
        if (this.findBookByTitle(book.title)) {
            console.warn(`Book titled "${book.title}" already exists.`);
            return;
        }

        this.books.push(book);
        console.log(`Book added: "${book.title}" by ${book.author}`);
    },

    findBookByTitle(title) {
        return this.books.find(book => book.title === title);
    },

    removeBook(title) {
        const index = this.books.findIndex(book => book.title === title);

        if (index !== -1) {
            const removed = this.books.splice(index, 1)[0];
            console.log(`Book removed: "${removed.title}"`);
        } else {
            console.log(`Book titled "${title}" not found.`);
        }
    }
};

// error for incomplete book
library.addBook({ author: "George Orwell", year: 1949 });

// adds a complete book
library.addBook({ title: "1984", author: "George Orwell", year: 1949 });

// prevents adding a duplicate
library.addBook({ title: "1984", author: "George Orwell", year: 1949 });

console.log(`📚 Total books in library: ${library.books.length}`);

// finding a book
console.log("🔎 Found:", library.findBookByTitle("1984"));

// removing a book
library.removeBook("The Hobbit");

// final list
console.log("Final Library:", library.books);
