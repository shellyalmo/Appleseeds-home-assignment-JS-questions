// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

function findUnique(arr) {
  if (
    !arr.every(function (number) {
      return typeof number === "number";
    })
  ) {
    return "Input must be array of numbers";
  }

  const arrAsObj = {};
  arr.forEach((number) => {
    if (typeof number === "number" && arrAsObj[number] === undefined) {
      arrAsObj[number] = 1;
    } else if (typeof number === "number" && arrAsObj[number] !== undefined) {
      arrAsObj[number] += 1;
    }
  });
  const key = Object.keys(arrAsObj).filter((key) => arrAsObj[key] === 1);
  if (key.length === 1) {
    return key;
  } else {
    return "Didn't find one unique value";
  }
}
console.log(findUnique([0, 0, 0.55, 0, 0]));
console.log(findUnique([1, 1, 1, 2, 1, 1]));
console.log(findUnique([1, 1, 1, 1, 1, 1]));
console.log(findUnique([1, "1", 1, "2", 1, 1]));
console.log(findUnique([1, 2, 3, 4]));
console.log(findUnique([1, 1, 2, 2, 1, 1]));
