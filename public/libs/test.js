/**
 * 第一题
 */
var l1 = [2, 4, 3];
var l2 = [5, 6, 4];
var addTwoNumbers = function (l1, l2) {
    if (l1.length > 0 && l2.length > 0) {
        let num1 = l1.reverse();
        let num2 = l2.reverse();
        let sum = +num1.join('') + +num2.join('');
        return sum.toString().split('').reverse().map(p => +p);
    } else {
        return [];
    }
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
    var allnum = nums1.concat(nums2).sort((a, b) => a - b);
    if (isEven) {
        var middleNum = allnum.length / 2 - 1;
        return (allnum[middleNum] + allnum[middleNum + 1]) / 2
    } else {
        return allnum[(allnum.length - 1) / 2]
    }
};

/**
 * 第四题
 */
var longestPalindrome = function (s) {
    if (s.length < 2) return s;

    var ss = s.split('');
    var currentMax = "";

    for (var i = 0, l = ss.length; i < l - 1; i++) {
        for (var j = i + 1; j <= l; j++) {
            var sp = ss.slice(i, j).join('');
            var ijl = j - i;
            if (isPalind(sp) && ijl > currentMax.length) {
                currentMax = sp;
            }
        }
    }
    return currentMax;

    function isPalind(s) {
        var len = s.length;
        if (len === 1) return true;
        if (s[0] !== s[s.length - 1]) return false;
        var isEven = len % 2 === 0;
        if (isEven) {
            return s.slice(0, len / 2) === s.slice(len / 2).split('').reverse().join('');
        } else {
            return s.slice(0, (len - 1) / 2) === s.slice((len - 1) / 2 + 1).split('').reverse().join('');
        }
    }
};

// var palindrome = "babad";//"bb"
var palindrome = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"; //"bb"
// console.log(longestPalindrome(palindrome));