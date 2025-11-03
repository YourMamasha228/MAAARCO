let str = "JavaScript is a cool language ";
let longest = str.split(" ").reduce((a, b) => a.length > b.length ? a : b);
console.log(longest);