const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];


const result = matrix
  .flat()                    
  .filter(num => num % 2 !== 0) 
  .map(num => num * 2)       
  .sort((a, b) => a - b);    

  console.log(result);