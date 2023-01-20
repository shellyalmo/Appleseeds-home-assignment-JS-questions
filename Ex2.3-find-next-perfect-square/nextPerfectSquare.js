function nextPerfectSquare(n) {
  let sqrt = Math.sqrt(n);
  let isPerfect = false;

  if (Number.isInteger(sqrt)) {
    while (isPerfect === false) {
      sqrt++;
      if (Number.isInteger(sqrt ** 2)) {
        isPerfect = true;
      }
    }
    return sqrt ** 2;
  } else {
    return -1;
  }
}

console.log(nextPerfectSquare(121));
console.log(nextPerfectSquare(625));
console.log(nextPerfectSquare(114));
