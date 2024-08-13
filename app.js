// This is an in-line comment.
/* This is a
multi-line comment */
//declare and assign values
var MyName;
MyName = 10;
var MyVar;
MyVar = MyName;
//intialization:assigning value in one line
var MyVar = 10;
//declaring variable
var Character = "Hello";
//unintialized value
var a = 5;
a = a + 1;
//camel case:it means first word will be small and second word first letteer would be capital
var camelCase = "Hello";
var myCar = "bugtata";
//declare variable using let
let MyHome ="10";
//diffrence
var MyVar = 10;
var MyVar = 10;
//it dosent throw error
//let MyHome ="10";
//let MyHome ="10";
//it  throw error
//declare variable using const
const MyConst = 8;
//adition in "70"
let a = 65;
let b = 5;
a = a + b;
//subtraction
let a = 65;
let c = 5;
a = a - c;
//multiplication
let a = 65;
let d = 5;
a = a * d;
//divide
let a = 65;
let e = 5;
a = a / e;
//remaainder
let a = 65;
let f = 5;
a = a % f;
//augmented addition
let a = 65;
let g = 5;
a += g;
//augmented subtraction
let a = 65;
let h = 5;
a -= h;
//augmented multiplication
let a = 65;
let i = 5;
a *= i;
//augmented division
let a = 65;
let j = 5;
a /= j;
//escaping lateral quotes
const MyStr = "Afkham said, \"usaid is learning JavaScript\".";
//Quoting Strings with Single Quotes
const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
//Escape Sequences in Strings
const oStr = "usaid\\\n\t afkham";
//contating strings
const pStr = "I come first. " + "I come second.";
//usaing plus operator
const cStr = "I come first. ";
cStr += "I come second.";
//constructing string with variable
const ourStr = "Hello, our name is " + ourName + ", how are you?";
//Appending Variables to Strings
const anAdjective = "awesome!";
let goStr = "noami is";
goStrStr += anAdjective;
//Find the Length of a String
let lastNameLength = 0;//here the lenght of love lace is 8
const lastName = "Lovelace";
lastNameLength = lastName;
console.log(lastName.length);
//Use Bracket Notation to Find the First Character in a String
const firstName = "Usaid";
const firstLetter = firstName[0];
//Understand String Immutability
let getStr = "rob";
getStr[0] = "J";
//Use Bracket Notation to Find the Last Character in a String
const secondName = "usaid";//in jss counting stars from 0 so 0 target first character of string
const lastLetter = secondName[secondName.length - 1];
//Use Bracket Notation to Find the Nth-to-Last Character in a String
const secondCharacter= "usaid";
const lastCharacter = secondName[secondName.length - 3];
//word blanks
const blanks = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
//Store Multiple Values in one Variable using JavaScript Arrays
const life = ["money", "money", "money"];
//Nest one Array within Another Array
const teams = [["trent", 23], ["manchester", 45]];
//Access Array Data with Indexes
const array = [50, 60, 70];
console.log(array[0]);
const number = array[1];
//Access Multi-Dimensional Arrays With Indexes
const kArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];
//push
const ourArray = [["John", 23], ["cat", 2]];//push method:allows you to push a value in the end of an array and gives it gives a new lenght
Array.push["dog", 3];
//pop
const yourArray = [["John", 23], ["cat", 2]];//pop:rhis method removes the last value o an array and returns it to a new variable
Array.pop["cat", 2];
//shift: removes first element
const thierArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
//unshift:shift value in start and gives it a new lenght
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift("cat,23");
//Write Reusable JavaScript with Functions
function Reusablefunction() {
    console.log("Hello World");
  }
//
function functionWithArgs(param1, param2) {
    console.log("Hello","World");
  }
//Return a Value from a Function with Return
function plusThree(num) {
    return num + 3;
  }
  
  const answer = plusThree(5);
//


