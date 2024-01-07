//[1,2,3,4,3,5,4,6,7,8] => totle elements - 10
// count largest sum of consecutive digits
//num -4
// sum = 25

// conditions
// num > array > error messgae
// 10 - 4 + 1 => 7  loop execute

function findLargest(array, num) {
  if (array.length < num) {
    throw new Error("num is not large of array");
  } else {
    let max = 0;
    for (let i = 0; i < array.length - num + 1; i++) {
      let temp = 0;
      for (let j = 0; j < num; j++) {
        // console.log("i", i, "j", j);
        temp += array[i + j];
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
}

const result = findLargest([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
console.log(result);
