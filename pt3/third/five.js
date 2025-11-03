function sumArray(arr) {
    let sum = 0;
    arr.forEach(function(n) {
        sum += n;
    });
    return sum;
}

console.log(sumArray([1, 2, 3, 4]));