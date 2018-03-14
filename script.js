//zadanie 1

const h = 'Hello';
const w = 'World';

console.log(`${h} ${w}!`);

//zadanie 2


function multiply(a=1, b=1)  { return a*b };

//zadanie 3

const Avarage = Array.form(avarage);

let result = (...Avarage) => Avarage.forEach(result += Avarage);
result = result / Avarage.lenght;

//zadanie 4 - inaczej

const grades = [];

let sum = grades.reduce((accum, current) => current += accum);

let avarage = sum/grades.lenght;

//zadanie 5

const array = [ 1, 4, 'Iwona', false, 'Nowak'];

const [ , , firstname, , lastname] = array;

console.log(firstname, lastname);
