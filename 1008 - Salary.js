var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let quantidade = parseInt(lines.shift());
let horas = parseInt(lines.shift());
let valor = parseFloat(lines.shift());

let salario = valor*horas;

console.log(`NUMBER = ${quantidade}\nSALARY = U$ ${salario.toFixed(2)}`);