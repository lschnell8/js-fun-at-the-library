function shelfBook(book, shelf) {
  if(shelf.length < 3) {
  shelf.unshift(book)
}
  return shelf
};


function unshelfBook(bookTitle, shelf) {
for(var i = 0; i < shelf.length; i++) {
  if(bookTitle === shelf[i].title) {
    return shelf.splice([i], 1)
  }
}
};

function listTitles(shelf) {
var list = "";
for(var i = 0; i < shelf.length; i++) {
  if([i] < 2) {
    list += shelf[i].title + ", "
  }else {
    list += shelf[i].title
  }
}
return list
};

function searchShelf(shelf, title) {
for(i = 0; i < shelf.length; i++) {
  if(shelf[i].title === title) {
    return true
}
}
  return false
};



module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
