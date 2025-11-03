let negr = "apple,banana,orange,apple".split(",");
let ne = negr.filter(x => x.includes('apple')).length
console.log(ne)