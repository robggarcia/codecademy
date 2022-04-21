/*
Rob Garcia
April 20, 2022
Codecademy Project: Build a Library
Creating Classes and inhereting objects and methods from a parent class.
*/

class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  set isCheckedOut(value) {
    if (typeof value === 'boolean') {
      this._isCheckedOut = value;
    } else {
      console.log('Please specify True or False.');
    }
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
    }
  getAverageRating() {
    let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    let ratingsLength = this._ratings.length;
    return ratingsSum/ratingsLength;
  }
  addRating(newRating) {
    return this._ratings.push(newRating);
  }
}

// build a Book class that extends the Media class
class Book extends Media {
  constructor(author, title, pages){
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

// build a Movie class that extends the Media class
class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

// create a Book instance
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
console.log(historyOfEverything);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

// create a Move instance
const speed = new Movie('Jan de Bont', 'Speed', 116);
console.log(speed);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

// create a CD class that extends Media
class CD extends Media {
  constructor(artist, title, tracklist) {
    super(title);
    this._artist = artist;
    this._tracklist = tracklist;
  }
  get artist() {
    return this._artist;
  }
  get tracklist() {
    return this._tracklist;
  }
  reverse() {
    const count = this._tracklist.length;
    for (let i = 0; i < count/2; i++) {
        let tempCount = this._tracklist[i];
        this._tracklist[i] = this._tracklist[count-i-1];
        this._tracklist[count-i-1] = tempCount;
    }
  }
  shuffle() {
    const count = this._tracklist.length;
    for (let i = 0; i < count; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = this._tracklist[i];
    this._tracklist[i] = this._tracklist[j];
    this._tracklist[j] = temp;
  }
}
}

const rush = new CD('Rush', 'Killer Diller', ['Song1', 'Song2', 'Song3', 'Song4']);
console.log(rush);
rush.reverse();
console.log(rush.tracklist);
rush.shuffle();
console.log(rush.tracklist);
