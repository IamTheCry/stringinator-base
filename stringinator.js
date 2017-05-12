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
};

const hasChar = function(str, target) {
  return _.some(str, char => char === target);
  // hint: use _.some
};

const isOnlyDigits = function(str) {
  return _.every(str, (digit) => !isNaN(digit))
};

const filterToOnlyDigits = function(str) {
  const digitsArray = _.filter(str, (nums) => !isNaN(nums));
  return digitsArray.join('').trim();
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  //return _.each(obj, truncateString(this.obj[key], maxLength));
  return _.map(obj, item => truncateString(item, maxLength));
};

const countChars = function(str) {
  _.reduce(str, function (obj, char) { 
    if( char in obj ) { 
      obj[char] ++; 
    } else {  
      obj[char] = 1;  
    }
    console.log(obj)
    return obj; 
  }, {});
  //return _.reduce(str, (letter, count) => letter[count] += 1 || 0 ,{});
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