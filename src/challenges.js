// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(b, h) {
  let area = (b * h) / 2;

  return area;
}

// Desafio 3
function splitSentence(str) {
  let sentence = str.split(' ');

  return sentence;
}

// Desafio 4
function concatName(arr) {
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let a = wins * 3;
  let b = ties * 1;

  return a + b;
}

// Desafio 6
function highestCount(arr) {
  let higherValue = Math.max(...arr);

  return arr.filter((v) => (v === higherValue)).length;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
