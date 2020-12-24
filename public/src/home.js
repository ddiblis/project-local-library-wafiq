const helperCount = (array) => {
  return array === null ? 0 : array.length
}

function totalBooksCount(books) {
  return helperCount(books)
}

function totalAccountsCount (accounts) {
  return helperCount(accounts)
}

function booksBorrowedCount(books) {
  let borrows = books.reduce((acc, {borrows}) => acc.concat(borrows), [])
  return borrows.filter(({returned}) => returned === false).length
}

function sortAndSlice(array){
  let sorted = array.sort((first, next) => first.count > next.count ? -1 : 1)
  return sorted.slice(0, 5)
}

function getMostCommonGenres(books){
  let genreObjects = books.reduce((acc, {genre}) => {
    work = acc.find(item => item.name === genre)
    if (work) work.count++
    else acc.push({name: genre, count: 1})
    return acc
  }, [])
  return sortAndSlice(genreObjects)
}

function getMostPopularBooks(books) {
  let genreObjects = books.reduce((acc, book) => {
    work = acc.find(item => item.name === book.title)
    acc.push({name: book.title, count: book.borrows.length})
    return acc
  }, [])
  return sortAndSlice(genreObjects)
}

function getMostPopularAuthors(books, authors) {
  authorPopularity = authors.reduce((acc, author) => {
    books.forEach(book => {
      if (book.authorId === author.id) {
        let {first, last} = author.name
        let fullname = first.concat(" ", last)
        work = acc.find(item => item.name === fullname)
        acc.push({name: fullname, count: book.borrows.length}) 
      }
    })
    return acc
  },[])
  return sortAndSlice(authorPopularity)
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
