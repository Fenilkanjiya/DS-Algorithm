// checking sum zero - Problem 1
// [-5, -4, -2, 0, 2, 4, 6, 8]
// [-4, -4]   output

function checkingSum(array) {
  for (let number of array) {
    for (let j = 1; j < array.length; j++) {
      if (number + array[j] === 0) {
        return [number, array[j]];
      }
    }
  }
}

const result = checkingSum([-5, -4, -2, 0, 2, 4, 6, 8]);
console.log(result);
