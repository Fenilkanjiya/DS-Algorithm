// check squre in tw array
// [1,2,3,4] -> [1,4,16,9]

function checkSqure(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    let isChecked = false;
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] * array1[i] === array2[j]) {
        isChecked = true;
      }
      if (j === array2.length - 1) {
        if (!isChecked) {
          return false;
        }
      }
    }
  }
  return true;
}

const result = checkSqure([1, 2, 3, 4], [1, 4, 16, 9]);
console.log(result);
