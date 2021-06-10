let operationMixin = {
    addBook( title, quantity, value ) {
        this.list.push({ title, quantity, value });
        this.notification(`Book successfully added to inventory.`)
    },
    sell(title, quantity) {
        let bookFound = this.findBook( title );

        if(bookFound) {
            if(quantity > bookFound.quantity) {
                this.notification(`${ title } book has only ${ bookFound.quantity } left`);
            } else {
                bookFound.quantity -= quantity;
                this.earnings += quantity * bookFound.value;
                this.notification(`You are successfully purchased ${ quantity } copies of ${ title }.`);
            }
        } else {
            this.notification(`We don't have this book ${ title }`);
        }
    },
    restock( title, quantity ) {
        let bookFound = this.findBook( title );

        if (bookFound) {
            bookFound.quantity += quantity;
        } else {
            this.notification(`We don't have this book ${ title }`);
        }
    },
    earn() {
        this.notification(`${ this.name } earnings PHP${ this.earnings }.00`);
    },
    notification( msg ) {
        console.log( msg );
    },
    searchBook( title ) {
        const search = this.findBook( title );

        if ( search ) {
            this.notification(`${ title } is available, we have ${ search.quantity } stocks.`);
        } else {
            this.notification(`${ title } is not available.`);
        }
    },
    findBook( title ) {
        const findBook = this.list.find(book => book.title === title);

        return findBook;
    }
}

export default operationMixin;