// count unique number
// [1,1,2,2,3,4,4,6,5,6,7,7,8]

// output -> 8

function unique(array) {
  if (array.length) {
    let i = 0;
    for (let j = 1; j < array.length; j++) {
      if (array[i] !== array[j]) {
        i++;
        array[i] = array[j];
      }
    }
    return i + 1;
  } else {
    throw new Error("Array is empty");
  }
}
const result = unique([1, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8]);
console.log(result);
