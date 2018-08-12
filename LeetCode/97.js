/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function (A, B) {
  let a = countValue(A.split(" "));
  let b = countValue(B.split(" "));
  let uncommonList = [];
  debugger;
  for (item in a) {
    if (a[item] > 1) {
      delete a[item];
      delete b[item];
      continue;
    }
    if (b[item] === undefined) {
      delete a[item];
      uncommonList.push(item);
    } else {
      delete a[item];
      delete b[item];
    }
  }
  
  for (item in b) {
    if (b[item] > 1) {
      delete b[item];
      continue;
    }
    uncommonList.push(item);
  }
  return uncommonList;

  function countValue(list) {
    return list.reduce((obj, name) => {
      obj[name] = obj[name] ? ++obj[name] : 1
      return obj;
    }, {});
  }
};

// let A = "this apple is sweet";
// let B = "this apple is sour";
// let A = "apple apple";
// let B = "banana";
let A = "abcd def abcd xyz";
let B = "ijk def ijk";
console.log(uncommonFromSentences(A, B));