function findAuthorById(authors, authorID) {
  const authorByID = authors.reduce((acc, author) => {
    if (author.id === authorID) {
      acc = author
    }
    return acc
  },{})
  return authorByID
}

function findBookById(books, bookID) {
 
  const bookByID = books.reduce((acc, book) => {
    if(book.id === bookID) acc = book
    return acc
  },{})
  return bookByID
}

function partitionBooksByBorrowedStatus(books) {
  let list = []
  let borrowed = []
  let returned = []
  lists = books.forEach(book => {
    [first, ...rest] = book.borrows
    if(first.returned === true) returned.push(book.title)
    else borrowed.push(book.title)
  })
  list.push(borrowed)
  list.push(returned)
  return list
}

function getBorrowersForBook(book, accounts) {
  borrowerList = accounts.reduce((acc, account) => {
      book.borrows.forEach(borrower => {
        if (borrower.id === account.id) {
          acc.push({name: account.name, email: account.email, returned: borrower.returned}) 
        }
      })
  return acc
  },[])
  return borrowerList.slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
