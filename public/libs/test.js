/**
 * 第一题
 */
var l1 = [2, 4, 3];
var l2 = [5, 6, 4];
var addTwoNumbers = function (l1, l2) {
    let num1 = l1.reverse();
    let num2 = l2.reverse();
    let sum = +num1.join('') + +num2.join('');
    return sum.toString().split('').reverse().map(p => +p);
};


/**
 * 第二题
 */
var s = "anviaj";
var lengthOfLongestSubstring = function (s) {
    if (s.length === 0) return 0;
    var l = s.length;
    var substringList = [];
    var substring = [];
    for (var i = 0; i < l; i++) {
        var subNum = substring.indexOf(s[i]);
        if (subNum > -1) {
            substringList.push(substring.join(''));
            var lastString = substring.slice(subNum + 1);
            substring = lastString;
            substring.push(s[i]);
        } else {
            substring.push(s[i]);
        }
    }
    if (substring.length > 0) {
        substringList.push(substring.join(''));
    }
    return Math.max(...substringList.map(p => p.length))
}

/**
 * 第三题
 */
var findMedianSortedArrays = function (nums1 = [], nums2 = []) {
    var numLength1 = nums1.length;
    var numLength2 = nums2.length;
    var isEven = (numLength1 + numLength2) % 2 === 0;
    var allnum = nums1.concat(nums2).sort((a,b)=>a-b);
    console.log(allnum);
    if (isEven) {
        var middleNum = allnum.length / 2 - 1;
        return (allnum[middleNum] + allnum[middleNum + 1]) / 2
    } else {
        return allnum[(allnum.length -1) / 2]
    }

};

/**
 * 第四题
 */
var longestPalindrome = function(s) {
    
};