/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
	return grid;
};

let grid = [ [ 2 ] ];
console.log(surfaceArea(grid));

/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function(A) {
	let r = [];
	let result = [];
	for (let i = 0, l = A.length; i < l; i++) {
		let current = A[i].split('');
		r.push(perm(current));
	}

	for (let i = 0, l = r.length; i < l; i++) {
		let c = [];
		if (r[i].length > 0) {
			let s = r[i][0];
			c.push(s);
			r[i] = [];
			r.forEach((p, index) => {
				if (p.includes(s)) {
					c.push(r[index][0]);
					r[index] = [];
				}
			});
		}
		if (c.length > 0) {
			result.push(c);
		}
	}

	function swap(arr, i, j) {
		if (i != j) {
			var temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}
	function perm(arr) {
		let result = [];
		(function fn(n) {
			//为第n个位置选择元素
			for (var i = n; i < arr.length; i++) {
				if (i % 2 === n % 2) {
					swap(arr, i, n);
					//判断数组中剩余的待全排列的元素是否大于1个
					if (n + 1 < arr.length - 1) {
						fn(n + 1); //从第n+1个下标进行全排列
					} else {
						result.push(arr.join(''));
					}
					swap(arr, i, n);
				}
			}
		})(0);
		return result;
	}
	return result.length;
};

let A = [ 'abcd', 'cdab', 'adcb', 'cbad' ];
// console.log(numSpecialEquivGroups(A));

function swap(arr, i, j) {
	if (i % 2 === j % 2) {
		var t = arr[i];
		arr[i] = arr[j];
		arr[j] = t;
	}
}
function sort(index) {
	for (var j = index.length - 2; j >= 0 && index[j] > index[j + 1]; j--); //本循环从位置数组的末尾开始，找到第一个左边小于右边的位置，即j
	if (j < 0) return false; //已完成全部排列
	for (var k = index.length - 1; index[k] < index[j]; k--); //本循环从位置数组的末尾开始，找到比j位置大的位置中最小的，即k
	swap(index, j, k);
	for (j = j + 1, k = index.length - 1; j < k; j++, k--) swap(index, j, k); //本循环翻转j+1到末尾的所有位置
	return true;
}
function perm(arr) {
	let result = [];
	var index = new Array(arr.length);
	for (var i = 0; i < index.length; i++) index[i] = i;
	do {
		var temp = [];
		for (i = 0; i < index.length; i++) temp.push(arr[index[i]]);
		result.push(temp.join(''));
	} while (sort(index));
	return result;
}
let r = perm([ '1', '2' ]);
console.log(r);
