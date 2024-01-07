// checking sum zero - Problem 1
// [-5, -4, -2, 0, 2, 4, 6, 8]
// [-4, -4]   output

function checkSum(array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let sum = left + right;
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (right > 0) {
      right--;
    } else {
      left++;
    }
  }
}

const result = checkSum([-5, -4, -2, 0, 2, 4, 6, 8]);
console.log(result);
