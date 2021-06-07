// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
return books.reduce((acc, book) => acc + 1, 0);
}

function getTotalAccountsCount(accounts) {
let totalAccounts = 0
accounts.forEach((account) => {totalAccounts += 1})
 return totalAccounts
}


function getBooksBorrowedCount(books){
const borrowed = books.filter((book)=>book.borrows[0].returned === false)
  return borrowed.length
}


function getMostCommonGenres(books) {
const bookGenres = {}

  for(let i = 0; i < books.length; i++){
    let genre = books[i].genre
    if(!bookGenres.hasOwnProperty(genre)){
      bookGenres[genre] = 1
    } else {
      bookGenres[genre]++
    } 
  } 

  return Object
    .entries(bookGenres)
    .sort((a, b) => {
      return b[1] - a[1];
    })
    .slice(0,5)
    .map(genre => {
      return {
        name: genre[0],
        count: genre[1]
      };
    })
}


function getMostPopularBooks(books) {
  const mostPopular = {}
  const bookTitle = {}

  for(let i = 0; i < books.length; i++){
    let title = books[i].title
    if(!bookTitle.hasOwnProperty(title)){
      bookTitle[title] = books[i].borrows.length
    } else {
      bookTitle[title]+= books[i].borrows.length
    } 
  } 

  return Object
    .entries(bookTitle)
    .sort((a, b) => {
      return b[1] - a[1];
    })
    .slice(0,5)
    .map(title => {
      return {
        name: title[0],
        count: title[1]
      };
    })  
}


 function getMostPopularAuthors(books, authors) { 
  const authorCounts = {}

  books.forEach((book) => {
    const { authorId, borrows } = book;
    if(!authorCounts.hasOwnProperty(authorId)){
      authorCounts[authorId] = borrows.length
     }else{
      authorCounts[authorId] += borrows.length
     }
  })
   
  const mostPopular ={}
   
  for(const authorId of Object.keys(authorCounts)){
    for(let i=0;i<authors.length;i++){
      if(authorId == authors[i].id){
        mostPopular[`${authors[i].name.first} ${authors[i].name.last}`] = authorCounts[authorId]
       }
    }
  }
 
 return Object
    .entries(mostPopular) 
    .sort((a, b) => {
      return b[1] - a[1];
    })
    .slice(0,5)
    .map(authorID => {
      return {
        name: authorID[0],
        count: authorID[1]
      };
    }) 
 
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
