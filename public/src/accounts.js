// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  return accounts.find(item => item.id === id) 
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accounta,accountb)=> accounta.name.last < accountb.name.last ? -1 : 1)
  const authorNames = accounts.map(account => ({"name": account.name}))  
  return authorNames
  }


function getTotalNumberOfBorrows(account, books) {
 const accountID = account.id
 let acc = 0
 books.forEach(book => book.borrows.forEach(item => {if(item.id === accountID) {acc += 1}
 }))
 return acc           
}

function findAuthorById(array, id) {
let matchingItems = {}
array.forEach((item) => {
  if(item.id === id){
    matchingItems = item
  }
})
return matchingItems
}

function getBooksPossessedByAccount(account, books, authors) {
let possessedBooks =[];
books.forEach((book) =>
book.borrows.forEach((borrow)=>
   {
  if(borrow.id === account.id && borrow.returned === false) possessedBooks.push(book)}))
  
possessedBooks.forEach((book) => book.author = findAuthorById(authors, book.authorId))

return possessedBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
