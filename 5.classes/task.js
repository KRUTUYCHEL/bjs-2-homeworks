class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
  }
  _state = 100;
  type = null;

  fix(){
    this.state *= 1.5;
  }
  set state (num){
    this._state = Math.max(Math.min(num, 100), 0);
  }
  get state(){
     return this._state;
  }
}

class Magazine extends PrintEditionItem {
  type = "magazine"
}
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
  }
  type = "book";
}
class NovelBook extends Book {
  type = "novel";
}
class FantasticBook extends Book {
  type = "fantastic";
}
class DetectiveBook extends Book {
  type = "detective";
}


class Library {
  constructor(name) {
    this.name = name;
  }
  books = [];

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book)
    }
  }
  findBookBy(type, value){
     for (let i = 0; i < this.books.length; i++){
       if (this.books[i][type] === value){
         return this.books[i];
       }
     }
    return null
  }

  giveBookByName(bookName){
    for (let i = 0; i < this.books.length; i++){
      if (this.books[i].name === bookName){
        return this.books.splice(i, 1)[0];
      }
    }
    return null
  }
}

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {}
  }

  addMark(score, subject) {
    if (score > 5 || score < 2) return;

    this.marks[subject] = this.marks[subject] || [];
    this.marks[subject].push(score);
  }

  getAverageBySubject(subject){
    const scores = this.marks[subject];
    if (!scores) return 0;

    return scores.reduce((sum, score) => sum + score, 0) / scores.length;
  }

  getAverage() {
    return Object.keys(this.marks)
      .map(subject => this.getAverageBySubject(subject))
      .reduce((avg, subjectAvg, index, list) => {
        return avg + subjectAvg / list.length
      }, 0);
  }
}