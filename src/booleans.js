function negate(a) {
  return (!(a))
};

function both(a, b) {
  return (a&&b)
};

function either(a, b) {
  return (a||b)
};

function none(a, b) {
 return !(a||b);
};

function one(a, b) {
  return !(a == b);
};

function truthiness(a) {
 if (a) {
   return true;
 } return false;
};

function isEqual(a, b) {
  return a == b;
};

function isGreaterThan(a, b) {
 if (a > b) {
   return true;   
 } else {
   return false;
 }
};

function isLessThanOrEqualTo(a, b) {
  if (a <= b) {
    return true;
  } else {
    return false;
  }
};

function isOdd(a) {
  if (a%2 !== 0) {
    return true;
  } else {
    return false;
  }
  }
;

function isEven(a) {
  if (a%2 == 0) {
    return true;
  } else {
    return false;
  }
};

function isSquare(a) {
  if (Math.sqrt (a) % 1 === 0){
    return true;
  } return false;
};

function startsWith(char, string) {
  if (string.startsWith(char)) {
    return true;
  } else {
    return false;
  }
};

function containsVowels(string) {
 if (string.match(/[catDOG]/)) {
   return true;
 } else {
   return false;
 }
};

function isLowerCase(string) {
   if (string===string.toLowerCase()){
     return true;
   } return false;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
