/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function (A, B) {
  let sumA = A.reduce((c, p) => c + p, 0);
  let sumB = B.reduce((c, p) => c + p, 0);
  console.log(sumA, sumB);
  let diff = sumA - sumB;
  console.log(diff);
  let d = diff / 2;
  console.log(d);

  let result = [];
  debugger;
  for (let i = 0; i < A.length; i++) {
    const item = A[i];
    console.log(item);

    let c = B.find(p => {
      d > 0 ? p - item === d : item - p === d;
      if (d > 0 && p < item) {
        return item - p === d
      } else if (d < 0 && p > item) {
        return item - p === d
      }
    });
    console.log(c);

    if (c !== undefined) {
      result = [item, c];
      break;
    }
  }

  return result;
};

let A = [1, 2, 5];
let B = [2, 4];
console.log(fairCandySwap(A, B))