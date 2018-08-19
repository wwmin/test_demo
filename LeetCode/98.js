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

// 88. 合并两个有序数组

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i];
  }
  nums1.sort((a, b) => {
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
  });
};

let nums1 = [1, 2, 3, 0, 0, 0]; //, m = 3
let nums2 = [2, 5, 6]; //,       n = 3
// merge(nums1, 3, nums2, 3);
// console.log(nums1);

// 66. 加一
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let rDigits = digits.reverse();
  for (let i = 0, l = digits.length; i < l; i++) {
    let sum = rDigits[i] + 1;
    if (sum === 10) {
      rDigits[i] = 0;
      sum = rDigits[i + 1] + 1;
      if (i === l - 1) {
        rDigits[i + 1] = 1;
      }
    } else {
      rDigits[i] = sum;
      break;
    }
  }
  return rDigits.reverse();
};
let digits = [9, 9];
console.log(plusOne(digits))

// 43. 字符串相乘
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  
  return num1;
};

let num1 = "2";
let num2 = "3";
console.log(multiply(num1, num2));