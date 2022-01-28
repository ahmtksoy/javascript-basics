const getNthElement = (index, array) => {
  const newindex = index % array.length;
  if (index >= array.length) {
    return array[newindex];
  } else {
    return array[index];
  }
};

const arrayToCSVString = array => {
  return array.toString();
  return array.numbersToStrings();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(function(a) {
    return a.toString();
  });
};

const uppercaseWordsInArray = strings => {
  return strings.map(item => item.toUpperCase());
};
function reverseWordsInArray(strings) {
  return strings.map(function reverse(string) {
    return string
      .split('')
      .reverse()
      .join('');
  });
}

const onlyEven = numbers => {
  return numbers.filter(function(oe) {
    return oe % 2 === 0;
  });
};

const removeNthElement2 = (index, array) => {
  return array.filter(function removeN(rn2) {
    return rn2 !== array[index];
  });
};

const elementsStartingWithAVowel = strings => {
  return strings.filter((x) => {
    return (
      x[0].toLowerCase() === 'a' ||
      x[0].toLowerCase() === 'e' ||
      x[0].toLowerCase() === 'i' ||
      x[0].toLowerCase() === 'o' ||
      x[0].toLowerCase() === 'u'
    );
  });
};

const removeSpaces = string => {
  return string.replace (/ /g, "")
};

const sumNumbers = numbers => {
  return numbers.reduce((a,b) => a+b,0
  );
};

const sortByLastLetter = strings => {
  return strings.sort(
    (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
  );
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
