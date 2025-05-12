/* Please read the instructions located in the 1-constructor-exercise-readme.md file and complete your code below */

function Book(title, author, year, genre) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.genre = genre;
}

Book.prototype.getSummary = function () {
  return `The book ${this.title} came out in the year ${this.year} and is of the ${this.genre} genre.`;
};

Book.prototype.isClassic = function (currentYear) {
  if (currentYear - this.year >= 50) {
    return true;
  }
  return false;
};

Book.prototype.updateYear = function (newYear) {
  this.year = newYear;
  return `Publication year updated to ${this.year}`;
};

Book.prototype.changeGenre = function (newGenre) {
  this.genre = newGenre;
  return `Genre updated to ${this.genre}`;
};

const book1 = new Book("To Kill a Mocking Bird", "Harper Lee", 1960, "Fiction");

console.log(book1);
console.log(book1.getSummary());
console.log(book1.isClassic(2025));
console.log(book1.updateYear(1999));
console.log(book1.changeGenre("NonFiction"));
console.log(book1.getSummary());
console.log(book1.isClassic(2025));
