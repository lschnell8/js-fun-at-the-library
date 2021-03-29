function createLibrary(library) {
  return {
    name: library,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
};

function addBook(library, book) {
  if(book.genre === 'fantasy') {
return library.shelves.fantasy.push(book);
} else if(book.genre === 'nonFiction') {
  return library.shelves.nonFiction.push(book);
} else {
  return library.shelves.fiction.push(book)
}
};

function checkoutBook(library, book, genre) {
  for (var i = 0; i <= library.shelves[genre].length; i++) {
    if(library.shelves[genre][i].title === book) {
library.shelves[genre].splice([i], 1)
  return `You have now checked out ${book} from the ${library.name}`
} else if(library.shelves[genre][i].title !== book) {
  return `Sorry, there are currently no copies of ${book} available at the ${library.name}`
}
}
}
module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
