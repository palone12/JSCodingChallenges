let str = "fake";
let res = "";

function reverseString(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}

console.log(reverseString(str));

// Second Way

let result = str.split("").reverse().join("");
console.log(result);
