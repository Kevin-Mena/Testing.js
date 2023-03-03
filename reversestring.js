const reverseString = (str) =>
  str.toLowerCase().split("").reverse().join(" ").replace("\\s+", " ").trim();
console.log(reverseString("hello"));
module.exports = reverseString;
