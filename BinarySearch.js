// Divide & conqerer Technique
// Find the index of the given no in a sorted array 7
// [1,2,3,4,5,6,7,8,910,11,12,13,14,15] => 6

function binarySearch(array, number) {
  min = 0;
  max = array.length - 1;

  while (min < max) {
    let midIndex = Math.floor((min + max) / 2);
    if (array[midIndex] < number) {
      min = midIndex + 1;
    } else if (array[midIndex] > number) {
      max = midIndex - 1;
    } else {
      return midIndex;
    }
  }
  return -1;
}

const result = binarySearch(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  6
);
console.log(result);
