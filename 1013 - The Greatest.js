var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [a,b,c] = lines.shift().split(" ");

let aFloat = parseFloat(a);
let bFloat = parseFloat(b);
let cFloat = parseFloat(c);

let maiorAB = (aFloat + bFloat + Math.abs(aFloat-bFloat)) / 2;

let maior = (maiorAB + cFloat + Math.abs(maiorAB-cFloat)) / 2;

console.log(`${maior} eh o maior`);