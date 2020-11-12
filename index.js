/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = []
}
Person.prototype.eat = function(edible){
if (this.stomach.length < 10){
  this.stomach.push(edible);
  }
}
Person.prototype.poop = function(){
  this.stomach = [];
}
Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`
}
const personOne = new Person('Najee', 19);
const personTwo = new Person('Nhlapo', 19);
const personThree = new Person('Kemp', 21);

console.log(personOne.toString());
console.log(personTwo.toString());
console.log(personThree.toString());

personOne.eat('taco');
personOne.eat('pizza');
personOne.eat('cake');

console.log(personOne.stomach);
 
personOne.poop();
 console.log(personOne.stomach)


/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, mpg){
  this.model = model;
  this.mpg = mpg;
  this.odometer = 0;
  this.tank = 0;
}
Car.prototype.fill = function(gallons){
this.tank += gallons;
}
Car.prototype.toString = function(){
  return `${this.model}, ${this.mpg}`
  }

const carOne = new Car('Focus', 26);
const carTwo = new Car('Challenger', 27);
const carThree = new Car('Ram', 23);

console.log(carOne.toString());
console.log(carTwo.toString());
console.log(carThree.toString());

console.log(carOne.fill(3));
 console.log(carOne.tank);


/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, toy){
this.name = name;
this.age = age;
this.favoriteToy = toy;
}
Baby.prototype.play = function(){
  return `Playing with ${this.favoriteToy}`;
}
/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. Window Binding, not for use, if you don't give it any context it defaults to the window.
  2. Implicit Binding, most common, whatever is left of dot is what the 'this' refers to.
  3. Explicit Binding, call and apply will immediately invoke the function, requires you to pass in arguments 1 by 1.
  4. New Binding, using the new keyword constructs a new object and 'this' points to it.
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
