var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var lines = input.split('\n');

let pi = 3.14159;    
let a = parseFloat(lines.shift());
let area = Math.pow(a, 2) * pi;

console.log(`A=${area.toFixed(4)}`);