class Users {
    constructor(name, lastName, city) {
        this.name = name;
        this.lastName = lastName;
        this.city = city;
        this.borrowedBooks = [];
    }
    borrow(book) {
        if (book.canBorrow) {
            this.borrowedBooks.push(book);
        }
    }
}

class BookReport {
    constructor(name) {
        this.name = name;
        this.allUsers = [];
    }
    addNewUser(user) {
        this.allUsers.push(user);
    }
    printReport() {
        this.allUsers.forEach(user => {
            console.log(user.name + " " + user.lastName + " from " + user.city + " borrows this books: ");
            user.borrowedBooks.forEach(book => console.log(book.title));
        });
    }
}


class Book {
    constructor(title, author, canBorrow) {
        this.title = title;
        this.author = author;
        if (canBorrow) {
            this.canBorrow = true;
        } else {
            this.canBorrow = false;
        }
    }
}


let user1 = new Users('Alex', 'Kuf', 'Petachtikva');
let user2 = new Users('Eli', 'Rotenberg', 'Jerusalem');
let user3 = new Users('Ayala', 'Shulman', 'Tel-aviv');
let user4 = new Users('Ben', 'Cohen', 'Elat');

let book = new Book('Percy Jackson', 'rick riardan', 'true')
let book1 = new Book('Land of stories', 'chris colfer', false)
let book2 = new Book('Night school', 'c.j dourty', 'true')
let book3 = new Book('The love hypophisist', 'ali hazelwood', false)
let book4 = new Book('The love hypophisist2', 'ali hazelwood', 'true')


user1.borrow(book);
user1.borrow(book1);
user1.borrow(book2);
user1.borrow(book3);
user2.borrow(book3);
user2.borrow(book4);
user2.borrow(book);
user3.borrow(book2);
user3.borrow(book1);
user4.borrow(book2);


let a = new BookReport("report1");

a.addNewUser(user1);
a.addNewUser(user2);
a.addNewUser(user3);
a.addNewUser(user4);
console.log(a);
a.printReport();
