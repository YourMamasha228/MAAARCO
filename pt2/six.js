let str = "Hello World From JS";
let words = str.split(' ');

let result = words.map((word, index) => {
    return index === 0 ? word.toLowerCase() : word;
}).join(' ');

console.log(result); 