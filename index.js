// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
// Example: [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
function findOdd(A) {
  let num;
  const hashTable = A.reduce((p, v) => {
    p[v] = (p[v] || 0) + 1;
    return p;
  }, {});
  for (let key in hashTable) {
    if (hashTable[key] % 2) num = key;
  }
  return +num;
}

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
function highAndLow(numbers) {
  const numArr = numbers.split(' ');
  const max = Math.max(...numArr);
  const min = Math.min(...numArr);
  return `${max} ${min}`;
}

// In this kata, you are asked to square every digit of a number and concatenate them.
//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
function squareDigits(num) {
  const result = Number(
    String(num)
      .split('')
      .map((item) => item ** 2)
      .join('')
  );
  return result;
}

//Given two arrays a and b write a function comp(a, b) (orcompSame(a, b))
//that checks whether the two arrays have the "same" elements,
//with the same multiplicities (the multiplicity of a member is the number of times it appears).
//"Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
function comp(array1, array2) {
  if (!array1 || !array2) return false;
  if (array1.length !== array2.length) return false;
  const sortedArr1Copy = [...array1].sort((a, b) => a - b);
  const sortedArr2Copy = [...array2].sort((a, b) => a - b);
  let answer = true;
  for (let i = 0; i < sortedArr1Copy.length; i += 1) {
    answer = sortedArr2Copy[i] === sortedArr1Copy[i] ** 2;
    if (answer === false) break;
  }
  return answer;
}

//In this simple Kata your task is to create a function that turns a string into a Mexican Wave.
//You will be passed a string and you must return that string in an array where an uppercase letter
//is a person standing up.
function wave(str) {
  const arr = [...str];
  const resultArr = [];
  arr.forEach((item, i) => {
    let temp = [...arr];
    temp.splice(i, 1, item.toUpperCase());
    if (item !== ' ') {
      resultArr.push(temp.join(''));
    }
  });

  return resultArr;
}
