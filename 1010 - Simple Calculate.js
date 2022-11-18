var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [codigo1,unidade1,valor1] = lines.shift().split(' ');

let produto1 = unidade1 * valor1;

let [codigo2,unidade2,valor2] = lines.shift().split(' ');

let produto2 = unidade2 * valor2;

let total = produto1 + produto2;

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);