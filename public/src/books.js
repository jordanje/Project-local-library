// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(array, id) {
let matchingItems = {}
array.forEach((item) => {
  if(item.id === id){
    matchingItems = item
  }
})
return matchingItems
}

function findBookById(array, id) {
let findBook = findAuthorById(array,id)
return findBook
}


function partitionBooksByBorrowedStatus(books) {
  const booksBorrowed = [];
  const booksReturned = [];
  const result = [];

  books.forEach(book => {
    if (book.borrows[0].returned) {
      booksReturned.push(book);
    } else {
      booksBorrowed.push(book);
    };
  })

  result[0] = booksBorrowed;
  result[1] = booksReturned;

  return result;
}

function getBorrowersForBook(book, accounts) {
  const result = []

  book.borrows.forEach((borrow) => {
    const account = accounts.find(account => account.id === borrow.id)
    const newObject = {...account, returned: borrow.returned};
    result.push(newObject);
  })

  return result.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
