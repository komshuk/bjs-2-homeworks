class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = state;
      this.type = type;
    }
  
    get state() {
      return this._state;
    }
  
    set state(value) {
      if (value < 0) {
        this._state = 0;
      } else if (value > 100) {
        this._state = 100;
      } else {
        this._state = value;
      }
    }
  
    fix() {
      this.state *= 1.5;
    }
  }
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100) {
      super(name, releaseDate, pagesCount, (state = 100));
      this.type = "magazine";
    }
  }
  
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
      super(name, releaseDate, pagesCount, (state = 100));
      this.author = author;
      this.type = "book";
    }
  }
  
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
      super(author, name, releaseDate, pagesCount, (state = 100));
      this.type = "novel";
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
      super(author, name, releaseDate, pagesCount, (state = 100));
      this.type = "fantastic";
    }
  }
  
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
      super(author, name, releaseDate, pagesCount, (state = 100));
      this.type = "detective";
    }
  }
  
  class Library {
    constructor(name, books) {
      this.name = name;
      this.books = [];
    }
  
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
  
    findBookBy(type, value) {
      for (let i = 0; i < this.books.length; i++) {
        const book = this.books[i];
        if (book[type] === value) {
          return book;
        }
      }
      return null;
    }
  
    giveBookByName(bookName) {
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].name === bookName) {
          return this.books.splice(i, 1)[0];
        }
      }
      return null;
    }
  }
  
  class Student {
    constructor(name) {
      this.name = name;
      this.marks = {};
    }
  
    addMark(mark, subject) {
      if (mark < 2 || mark > 5) {
        return;
      }
      if (!this.marks[subject]) {
        this.marks[subject] = [];
      }
      this.marks[subject].push(mark);
    }
    getAverageBySubject(subject) {
      if (!this.marks[subject]) {
        return 0;
      }
      const sum = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
      return sum / this.marks[subject].length;
    }
  
    getAverage() {
      const subjects = Object.keys(this.marks);
      const sum = subjects.reduce(
        (acc, subject) => acc + this.getAverageBySubject(subject),
        0
      );
      return sum / subjects.length;
    }
  }