// compare a string Anagram
// 'hello' -> 'llohe'
// step

// check string legth

function isAnagram(string1, string2) {
  if (string1.length !== string2.length) return false;

  const compare = {};
  for (let latter of string1) {
    compare[latter] = (compare[latter] || 0) + 1;
  }

  for (let items of string2) {
    if (!compare[items]) return false;
    compare[items] -= 1;
    return true;
  }
}

const anagram = isAnagram("fenill", "lnilfe");
console.log(anagram);
