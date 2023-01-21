/**
 * implement filter, foreach and map methods using only for loops, arrays and objects.
 * @param {Array} arr
 * @param {Function} callback
 * @returns
 */
function implementFilter(arr, callback) {
  let newArr = [];
  for (let item of arr) {
    if (callback(item)) {
      newArr.push(item);
    }
  }
  return newArr;
}

module.exports = {
  implementFilter,
  //   implementForEach,
  //   implementMap,
};
