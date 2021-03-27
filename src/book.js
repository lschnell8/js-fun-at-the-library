function createTitle(title) {
  return `The ${title}`
};


function buildMainCharacter(name, age, pronouns) {
  return {name, age, pronouns};
};
function saveReview(content, reviews) {
if (reviews.includes(content)) {
  return 'Thanks for your submission'
}else {
  return reviews.push(content);
}
};

function calculatePageCount(pages) {
  return pages.length * 20
};

function writeBook(bookTitle, bookCharacter, genre) {
return book = {
  title : bookTitle,
  mainCharacter : bookCharacter,
  pageCount : bookTitle.length * 20,
  genre : genre}
};

function editBook(book) {
book.pageCount *= .75
return book.pageCount
}
module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
