import operationMixin from './utils.js'

class BookStore {
    constructor(name) {
        this.name = name;
        this.list = [];
        this.earnings = 0;
    }
}

Object.assign(BookStore.prototype, operationMixin)

const nbs = new BookStore('National Book Store');

nbs.addBook('Blood', 1, 300);
nbs.addBook('Terminator', 11, 250);
nbs.addBook('Tom Sawyer', 21, 500);

//nbs.restock('test12', 2);

nbs.sell('Terminator', 5);
nbs.sell('Tom Sawyer', 5);

// console.log(nbs.list);
// console.log(nbs)

//nbs.searchBook('Terminator');

nbs.earn();