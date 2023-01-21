/**
 * implement filter, foreach and map methods using only for loops, arrays and objects.
 * @param {Array} arr
 * @param {Function} callback
 * @returns {Array}
 */
function implementFilter(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

/**
 * implement filter, foreach and map methods using only for loops, arrays and objects.
 * @param {Array} arr
 * @param {Function} callback
 */
function implementForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

/**
 * implement filter, foreach and map methods using only for loops, arrays and objects.
 * @param {Array} arr
 * @param {Function} callback
 * @returns {Array}
 */
function implementMap(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i], i, arr));
  }
  return newArr;
}

module.exports = {
  implementFilter,
  implementForEach,
  implementMap,
};
