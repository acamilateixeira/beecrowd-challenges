var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let km = parseInt(lines.shift());
let litro = parseFloat(lines.shift());

let resultado = km / litro;

console.log(`${resultado.toFixed(3)} km/l`);