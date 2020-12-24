function findAccountById(accounts, accountID) {
  const found = accounts.find(account => account.id === accountID)
  return found
}

function sortAccountsByLastName(accounts) {
  const names = accounts.reduce((acc, account) => {
    acc.push({name: account.name})
    return acc
  },[])
  let sorted = names.sort((first, next) => {
    return first.name.last > next.name.last ? 1 : -1
  })
  return sorted
}

function numberOfBorrows(account, books) {
  const noOfBorrows = books.reduce((acc, {borrows}) => {
    borrows.forEach(borrow => {
      if (account.id === borrow.id) acc++
    })
    return acc
  },0)
  return noOfBorrows
}

function getBooksPossessedByAccount(account, books, authors) {
  return books.reduce((acc, book) => {
    book.borrows.forEach(borrow => {
      if (borrow.id === account.id && !borrow.returned) {
        authors.forEach(author => {
          if (author.id === book.authorId) {
            acc.push({title: book.title, author: {name: author.name}})
          }
        })
      }
    })
    return acc
  },[])
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
