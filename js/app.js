// Task 1

const singleQuotes = '\\\'\\\'';
const doubleQuotes = '\\\" \\\"';
console.log(`You can ignore single and double quotes like this: ${singleQuotes} ${doubleQuotes}`);


// // Task 2
const message = "Please enter your data";
alert(message);

let userName = prompt("What is your name?", 'Name');
alert(`Your name is: ${userName}`);

let surname = prompt("What is your surname?", 'Surname');
  alert(`Your fullname is: ${userName} ${surname}`);

let age = prompt("How old are you?", 'Age');
alert(`Your fullname is: ${userName} ${surname}, your age is: ${age}`);

let access = confirm('Are you admin?');
alert(`Your fullname is: ${userName} ${surname}, your age is: ${age}, admin status: ${access}`);


//Task 3
//Операторы сравнения > < преобразовывают операнды к числу и возвращают буль.

console.log(Boolean(alert('5')));// //false - alert indefined, indefined falsy значение,
// соответственно строка 5 преобразвовывается в значение алерт, алерт в фелси

console.log(true > false);//true - true это 1, false это 0, соответсвенно 1>0 - true;
console.log(true > 5);//false  - true это 1, соответсвенно 1>5 - false;
console.log(true > '5');//false - true это 1, '5' string преобразованый в number, соответсвенно 1>5 - false;
console.log(true > null);//true - null это 0, true это 1, соответсвенно 1>0;

