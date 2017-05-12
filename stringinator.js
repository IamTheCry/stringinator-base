const _ = require('./underbar');

const first = function(str, n) {
  return _.first(str, n)
};

const last = function(str, n) {
  return _.last(str, n)
};

const removeChar = function(str, target) {
  // const newArr = _.reject(str, (char) => char === target)
  // const newStr = newArr.join('');
  // return newStr;
  return _.reject(str, (char) => char === target).join('');
  // hint: use _.reject
  // Your code goes here
};

const hasChar = function(str, target) {
  return _.some(str, char => char === target);
  // hint: use _.some
  // Your code goes here
};

const isOnlyDigits = function(str) {
  return _.every(str, (digit) => !isNaN(digit))
  // Your code goes here
};

const filterToOnlyDigits = function(str) {
  // Your code goes here
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  // hint: use truncateString above
  // Your code goes here
};

const countChars = function(str) {
  // Your code goes here
};

const dedup = function(str) {
  // Your code goes here
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};