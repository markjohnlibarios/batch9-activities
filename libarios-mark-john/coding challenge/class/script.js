class MainStore {
    constructor(name) {
        this.name = name;
        this.inventory = [];
        this.earnings = 0;
    }
}

const newStore = new MainStore('Avion');

class BookStore extends MainStore {
    constructor(name) {
        super(name);
        this.list = [];
    }

    addBook( title, quantity, value ) {
        this.list.push({ title, quantity, value });
        this.inventory.push({ title, quantity, value });
        //this.inventory = [];
        //this.inventory = [...this.list];
    }

    restockBook( title, quantity ) {
        let bookFound = this.findBook( title );

        if (bookFound) {
            bookFound.quantity += quantity;
        } else {
            console.log(`We don't have this book ${title}`);
        }
    }

    sellBook( title, quantity ) {
        let bookFound = this.findBook( title );

        if(bookFound) {
            if(quantity > bookFound.quantity) {
                return `${title} has only ${bookFound.quantity} left`;
            } else {
                bookFound.quantity -= quantity;
                this.earnings += quantity * bookFound.value;
                return `Purchase successfully processed \n`;
            }
        } else {
            return `We don't have this book ${title}`;
        }
    }

    findBook( title ) {
        const findBook = this.list.find(book => book.title === title);

        return findBook;
    }
}

const nbs = new BookStore('National Book Store');

nbs.addBook('test', 1, 2);
nbs.addBook('test1', 11, 100);
nbs.addBook('test2', 21, 22);
//console.log(nbs.inventory);

//nbs.restockBook('test1', 2);
//console.log(nbs.list);

console.log(nbs.sellBook('test1', 2));
console.log(nbs.earnings);