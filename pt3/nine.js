function filterByLength(words, minLen) {
  return words.filter(word => word.length > minLen);
}
console.log(filterByLength(["hi", "hello", "world"] , 3).join(" "))