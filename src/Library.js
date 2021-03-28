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
} else {
  return library.shelves.nonFiction.push(book);
}
};

function checkoutBook(library, book, genre) {
  for (var i = 0; i < library.shelves[genre].length; i++) {
    if(library.shelves[genre][i].title === book) {
library.shelves[genre].splice([i], 1)
  return `You have now checked out ${book} from ${library}`
}
  }
}
module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
