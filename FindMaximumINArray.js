let arr = [2, 3, 4, 88, 75, 32];
let max = 0;

function maxInArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(maxInArray(arr));

console.log(Math.ceil(5 / 2));
