function apply(fn, value) {
  return fn(value);
}
let result = apply(x => x + 1, 5);
console.log(result)